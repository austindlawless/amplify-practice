import React, { Component } from 'react';
import { Lead } from 'bootstrap-4-react';
import { Authenticator } from 'aws-amplify-react';

export default class Login extends Component {
    render() {
        const { user } = this.props;

        return (
            <React.Fragment>
                { !user && <Authenticator /> }
                { user && <Lead>You are signed in as <span className="font-italic">{user.username}</span>.</Lead> }
            </React.Fragment>
        )
    }
}
