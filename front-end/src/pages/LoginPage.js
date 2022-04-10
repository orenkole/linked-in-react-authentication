import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useToken} from "../auth/useToken";

export const LogInPage = () => {
	const [token, setToken] = useToken();
	const [errorMessage, setErrorMessage] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('')
	const [googleOauthUrl, setGoogleOauthUrl] = useState('');
	
	const history = useHistory();

	useEffect(() => {
		const loadOuathUrl = async () => {
			try {
				const response = await axios.get('/auth/google/url')
				const {url} = response.data;
				setGoogleOauthUrl(url)
			} catch (err) {
				console.log(err);
			}
		}

		loadOuathUrl();
	}, [])

	const onLoginClicked = async () => {
		const response = await axios.post("/api/login", {
			email: emailValue,
			password: passwordValue,
		})
		const {token} = response.data;
		setToken(token);
		history.push('/')
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
			<hr/>
			<button
				onClick={onLoginClicked}
				disabled={!emailValue || !passwordValue}
			>Log In</button>
			<button
				onClick={() => history.push("/forgot-password")}
			>Forgot your password?</button>
			<button
				onClick={() => history.push("/signup")}
			>Don't have an account? Sign Up</button>
			<button
				disabled={!googleOauthUrl}
				onClick={() => {window.location.href = googleOauthUrl}}
			>
				Log in with Google
			</button>
		</div>
	)
}