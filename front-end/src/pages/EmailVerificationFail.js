import {useHistory} from "react-router-dom";

export const EmailVerifictionFail = () => {
	const history = useHistory();

	return (
		<div className="content-container">
			<h1>Uh oh...</h1>
			<p>
				Something went wrong trying te verify your email	
			</p>
			<button
				onClick={() => history.push('/signup')}
			>
				Back to sign up page
			</button>
		</div>
	)
}