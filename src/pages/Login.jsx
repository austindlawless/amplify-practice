import React, {Component} from 'react';
import {BSpan, Lead} from 'bootstrap-4-react';
import {Authenticator} from 'aws-amplify-react';

import {
    JConfirmSignIn,
    JConfirmSignUp,
    JForgotPassword,
    JForgotPasswordReset,
    JSignIn,
    JSignUp
} from '../components/auth';

const CustomAuthenticator = props => (
    <Authenticator hideDefault>
        <JSignIn/>
        <JConfirmSignIn/>
        <JSignUp/>
        <JConfirmSignUp/>
        <JForgotPassword/>
        <JForgotPasswordReset/>
    </Authenticator>
);

export default class Login extends Component {
    render() {
        const {user} = this.props;

        return (
            <React.Fragment>
                {!user && <CustomAuthenticator/>}
                {user && <Lead>You are signed in as <BSpan font="italic">{user.username}</BSpan>.</Lead>}
            </React.Fragment>
        )
    }
}
