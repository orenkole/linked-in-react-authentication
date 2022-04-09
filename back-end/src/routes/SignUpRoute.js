import {getDbConnection} from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {v4 as uuid} from "uuid";
import { sendEmail } from "../util/sendEmail";

export const signUpRoute = {
	path: '/api/signup',
	method: 'post',
	handler: async (req, res) => {
		const {email, password} = req.body;

		const db = getDbConnection("react-auth-db");
		// find user with received email
		const user = await db.collection('user').findOne({email})
		if(user) {
			// 409 - code for conflicting resource
			res.sendStatus(409);
		}

		const passwordHash = await bcrypt.hash(password, 10);

		// verification string for email
		const verificationString = uuid();

		const startingInfo = {
			hairColor: '',
			favoriteFood: '',
			bio: '',
		};

		const result = await db.collection('users').insertOne({
			email,
			passwordHash,
			info: startingInfo,
			isVerified: false,
			verificationString,
		});

		const {insertedId} = result;

		try {
			await sendEmail({
				to: email,
				from: 'nyoledanit@gmail.com',
				subject: 'Please verify your email',
				text: `
					Thanks for signin up. To verify your email, click here:
					http://localhost:3000/verify-email/${verificationString}
				`
			})
		} catch(err) {
			console.log(err);
			res.sendStatus(500);
		}

		// send jwt to client
		jwt.sign(
			{
				id: insertedId,
				email,
				info: startingInfo,
				isVerified: false,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '2d',
			},
			(err, token) => {
				if(err) {
					return res.status(500).send(err);
				}
				res.status(200).json({token})
			}
		)
	}
}