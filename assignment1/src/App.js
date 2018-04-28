import React, { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "sammy",
    language: "english"
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  switchLanguageHandler = () => {
    this.setState({
      username: "sammy!!!",
      language: "spanish"
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.togglePersonsHandler}>
          Switch Name
        </button>

        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />

        <button onClick={this.switchLanguageHandler.bind(this)} />
      </div>
    );
  }
}

export default App;
