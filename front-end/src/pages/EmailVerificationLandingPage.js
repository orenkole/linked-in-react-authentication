import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useToken} from "../auth/useToken";
import {EmailVerifictionFail} from "./EmailVerificationFail";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";

export const EmailVerificationLandingPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isSuccess, setIsSuccess] = useState(false);
	const {verificationString} = useParams();
	const [,setToken] = useToken();

	useEffect(() => {
		const loadVerification = async () => {
			try {
				const response = await axios.put('/api/verify-email', {verificationString});
				const {token} = response;
				setToken(token);
				setIsSuccess(true);
				setIsLoading(false);
			} catch (err) {
				setIsSuccess(false);
				setIsLoading(false);
			}
		}

		loadVerification()
	}, [setToken, verificationString])

	if(isLoading) return <p>Loading...</p>
	if(!isSuccess) return <EmailVerifictionFail />
	return <EmailVerificationSuccess />
}