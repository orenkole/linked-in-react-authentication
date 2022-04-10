import { loginRoute } from './LoginRoute';
import { signUpRoute } from './SignUpRoute';
import { testRoute } from './testRoute';
import {updateUserInfoRoute} from "./updateUserInforRoute";
import {verifyEmailRoute} from "./verifyEmail";
import {forgotPasswordRoute} from "./forgotPasswordRoute";

export const routes = [
    testRoute,
    signUpRoute,
    loginRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
];
