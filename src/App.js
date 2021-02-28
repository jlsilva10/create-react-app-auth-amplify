import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="p1"><span className="Apple-converted-space">    </span>&lt;&gt;HOME&lt;/a&gt;</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
