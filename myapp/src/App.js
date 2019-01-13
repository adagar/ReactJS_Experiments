import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Nick", age: 31, belt: "red", id: 2 },
      { name: "Vero", age: 32, belt: "yellow", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
