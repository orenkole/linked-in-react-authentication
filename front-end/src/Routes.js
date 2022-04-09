import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';
import { LogInPage } from './pages/LoginPage';
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
                <Route path="/login" exact>
                    <LogInPage />
                </Route>
                <Route path="/signup" exact>
                    <SignUpPage />
                </Route>
                <Route path="/please-verify">
                    <VerifyEmailPage />
                </Route>
            </Switch>
        </Router>
    );
}