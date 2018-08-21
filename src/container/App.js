import React, { Component } from "react";

import "./App.css";

// Importing Components
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home"
    };
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    const { route } = this.state;
    return (
      <div>
        <Navigation />
        {route === "home" ? (
          <div>
            <Home
              onRouteChange={this.onRouteChange}
              strings={[
                "am a FullStack Developer",
                "love everything about coding",
                "solve problems."
              ]}
            />
          </div>
        ) : (
          <div>
            <h1>Hello</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
