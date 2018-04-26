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

  userswitchUsernameHandler = newUsername => {
    // this.setState({
    //   username: "sammy!!!",
    //   language: "spanish"
    // });
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
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />

        <button onClick={this.switchLanguageHandler.bind(this)}>
          Make Spanish
        </button>
        <p>{this.state.language}</p>
      </div>
    );
  }
}

export default App;
