import React, {Component} from 'react';
import Amplify from 'aws-amplify';

import {Main, Navigator} from './components';
import './App.css';
import aws_exports from './aws-exports';

Amplify.Logger.LOG_LEVEL = 'INFO';
Amplify.configure(aws_exports);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigator/>
                <Main/>
            </React.Fragment>
        );
    }
}

export default App;
