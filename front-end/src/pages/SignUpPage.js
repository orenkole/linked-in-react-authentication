import {useState} from "react";
import {useHistory} from "react-router-dom";

export const SignUpPage = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('')
	const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
	
	const history = useHistory();

	const onSignUpClicked = async () => {
		alert('Sign up is not implemented yet')
	}
	return (
		<div className="content-container">
			<h1>Sign Up</h1>
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
			<input
				value={confirmPasswordValue}
				onChange={e => setConfirmPasswordValue(e.target.value)}
				placeholder="password"
				type="password"
			/>
			<hr/>
			<button
				onClick={onSignUpClicked}
				disabled={!emailValue 
					|| !passwordValue
					|| passwordValue !== confirmPasswordValue
				}
			>Sign Up</button>
			<button
				onClick={() => history.push("/login")}
			>Already have an account? Log In</button>
		</div>
	)
}