import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const ForgotPasswordPage = () => {
	const [emailValue, setEmailValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [success, setSuccess] = useState('');
	const history = useHistory();

	const onSubmitClicked = async () => {
		try {
			await axios.put(`/api/forgo-password/${emailValue}`)
			setSuccess(true);
			setTimeout(() => {
				history.push('/login')
			}, 3000)
		} catch (err) {
			setErrorMessage(err.message)
		}
	}
	return (<>{
		success
		? (
			<div className="content-container">
				<h1>Success</h1>
				<p>Check your email for reset link</p>
			</div>
		)
		: (
			<div>
				<h1>Forgot Password</h1>
				<p>Enter your email and we'll send you a reset link</p>
				{errorMessage && <div className="fail">{errorMessage}</div>}
				<input
					value={emailValue}
					onChange={e => setEmailValue(e.target.value)}
					placeholder="johndoe@gmail.com"
				/>
				<button
					disabled={!emailValue}
					onClick={onSubmitClicked}
				>
					Send reset link
				</button>
			</div>
		)
	}</>)
}