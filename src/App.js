import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <h1>2 Truths and a Lie</h1>
        <h2>Icebreaker Game</h2>
      </div>
      <div className="Selection">
        <h1>Likes/Dislikes</h1>
        <form action="/action_page.php">
  <p>Your guess:</p>
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">I like broccoli</label>
  <br/>
  <input type="radio" id="female" name="gender" value="female" />
  <label for="female">I am a vegetarian</label>
  <br/>
  <input type="radio" id="other" name="gender" value="other" />
  <label for="other">I like turtles</label>
  <br/>
  <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    );
  }
}

export default withAuthenticator(App, true);
