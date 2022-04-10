import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {PasswordResetSuccess} from "./PasswordResetSuccess";
import {PasswordResetFailure} from "./PasswordResetFailure"

export const PasswordResetLandingPage = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isFailure, setIsFailure] = useState(false);
	const [passwordValue, setPasswordValue] = useState('');
	const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
	const {passwordResetCode} = useParams();

	if(isFailure) return <PasswordResetFailure />
	if(isSuccess) return <PasswordResetSuccess />

	const onResetClicked = async () => {
		try {
			await axios.put(
				`/api/users/${passwordResetCode}/reset-password`,
				{newPassword: passwordValue}
			)
			setIsSuccess(true);
		} catch (err) {
			setIsFailure(true);
		}
	}

	return (
		<div className="content-container">
			<h1>Reset password</h1>
			<p>Please enter a new password</p>
			<input
				type="password"
				value={passwordValue}
				onChange={e => setPasswordValue(e.target.value)}
				placeholder="Password"
			/>
			<input
				type="password"
				value={confirmPasswordValue}
				onChange={e => setConfirmPasswordValue(e.target.value)}
				placeholder="Password"
			/>
			<button
				disabled={!passwordValue || confirmPasswordValue !== passwordValue}
				onClick={onResetClicked}
			>
				Reset password
			</button>
		</div>
	)
}