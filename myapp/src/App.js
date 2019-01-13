import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Nick", age: 31, belt: "red", id: 2 },
      { name: "Vero", age: 32, belt: "yellow", id: 3 },
      { name: "Ripley", age: 38, belt: "yellow", id: 4 }
    ]
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });

    this.setState({ ninjas: ninjas });
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
