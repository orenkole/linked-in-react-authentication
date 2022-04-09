import {useEffect, userEffect} from "react"
import {useHistory} from "react-router-dom";

export const VerifyEmailPage = () => {
	const history = useHistory();
	
	useEffect(() => {
		setTimeout(() => {
			history.push('/')
		}, 3000)
	}, [history])

	return (
		<div className="content-container">
			<h1>Thanks fo Signing up</h1>
			<p>
				A verification email has been sent to your email
			</p>
		</div>
	)
}