import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UserInfoPage />
                </Route>
                <Route path="/login" exact>
                    <LogInPage />
                </Route>
                <Route path="/signup" exact>
                    <SignUpPage />
                </Route>
            </Switch>
        </Router>
    );
}