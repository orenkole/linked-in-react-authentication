import axios from "axios";
import {oauthClient} from "./oauthClient";

// google gave us accessToken, and we load user's data
const getAccessAndBearerTokenUrl = ({accessToken}) => {
	return `https://www.googleapis/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`;
}

export const getGoogleUser = async ({code}) => {
	const {tokens} = await oauthClient.getToken(code);
	const response = await axios.get(
		getAccessAndBearerTokenUrl({accessToken: tokens.access_token}),
		{headers: {Authorization: `Bearer ${tokens.id_token}`}}
	)

	return response.data;
}