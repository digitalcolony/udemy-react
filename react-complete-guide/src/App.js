import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stefanie", age: 26 }
    ]
  };

  switchNameHandler = newName => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 128 },
        { name: "Manu", age: 129 },
        { name: "Stefanie", age: 126 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 222 },
        { name: event.target.value, age: 129 },
        { name: "Stefanie", age: 126 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hello there!!!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Amazing Max!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Evil Max!")}
          changed={this.nameChangeHandler}
        >
          My hobby: fishing.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
