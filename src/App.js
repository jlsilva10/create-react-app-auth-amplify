import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="All">
      <div>
        <h1 className="Title">2 Truths and a Lie</h1>
        <h2 className="Subtitle">Icebreaker Game</h2>
      </div>
      <div className="Selection">
        <h1 className="TabTitle">Likes/Dislikes</h1>
        <form action="/action_page.php">
          <p className="TabTitle">Your guess:</p>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male" className="TabTitle">
            I like broccoli
          </label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female" className="TabTitle">
            I am a vegetarian
          </label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other" className="TabTitle">
            I like turtles
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    );
  }
}

export default withAuthenticator(App, true);
