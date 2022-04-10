import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { LogInPage } from './pages/LoginPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { VerifyEmailPage } from './pages/verifyEmailPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/verify-email/:verificationString">
                    <EmailVerificationLandingPage />
                </Route>
                <Route path="/login" exact>
                    <LogInPage />
                </Route>
                <Route path="/signup" exact>
                    <SignUpPage />
                </Route>
                <Route path="/please-verify">
                    <VerifyEmailPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password/:passwordResetCode">
                    <PasswordResetLandingPage />
                </Route>
            </Switch>
        </Router>
    );
}