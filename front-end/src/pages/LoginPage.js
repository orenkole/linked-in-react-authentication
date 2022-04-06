import {useState} from "react";
import {useHistory} from "react-router-dom";

export const LogInPage = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('')
	const history = useHistory();

	const onLoginClicked = async () => {
		alert('Login not implemented yet')
	}
	return (
		<div className="content-container">
			<h1>Log In</h1>
			{errorMessage && <div className="fail">{errorMessage}</div>}
			<input 
				value={emailValue}
				onChange={e => setEmailValue(e.target.value)}
				placeholder="someone@gmail.com"
			/>
			<input
				value={passwordValue}
				onChange={e => setPasswordValue(e.target.value)}
				placeholder="password"
				type="password"
			/>
			<button
				onClick={onLoginClicked}
				disabled={!emailValue || !passwordValue}
			>Log In</button>
			<button
				onClick={() => history.push("/forgot-password")}
			>Forgot your password?</button>
			<button
				onClick={() => history.push("/sign-up")}
			>Don't have an account? Sign Up</button>
		</div>
	)
}