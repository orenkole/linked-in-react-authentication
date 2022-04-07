import {getDbConnection} from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
		});

		const {insertedId} = result;

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