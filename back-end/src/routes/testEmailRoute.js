import {sendEmail} from "../util/sendEmail";

export const testEmailRoute = {
	path: '/api/test-email',
	method: 'post',
	handler: async (req, res) => {
		try {
			await sendEmail({
				to: 'nyoledanit+test1@gmail.com',
				from: 'nyoledanit@gmail.com',
				subject: 'Does this work?',
				text: 'If you reading this it works'
			})
			res.sendStatus(200);
		} catch(e) {
			console.log(e);
			res.sendStatus(500);
		}
	}
}