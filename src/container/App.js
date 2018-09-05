import React, { Component } from "react";

import "./App.css";

// Importing Components
import Navigation from "../components/Navigation/Navigation";
import Home from "../components/Home/Home";
import AsyncComponent from "../components/AsyncComponent/AsyncComponent";

//Importing animation package
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
    if (route === "home") {
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <Home
            onRouteChange={this.onRouteChange}
            strings={[
              "am a FullStack Developer",
              "love everything about <br>coding",
              "solve problems."
            ]}
          />
        </div>
      );
    } else if (route === "about") {
      const AsyncPage2 = AsyncComponent(() =>
        import("../components/About/About")
      );
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <AsyncPage2 />
        </div>
      );
    } else if (route === "skills") {
      const AsyncPage3 = AsyncComponent(() =>
        import("../components/Skills/Skills")
      );
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <AsyncPage3 />
        </div>
      );
    } else if (route === "projects") {
      const AsyncPage4 = AsyncComponent(() =>
        import("../components/Projects/Projects")
      );
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <AsyncPage4 />
        </div>
      );
    } else if (route === "contact") {
      const AsyncPage5 = AsyncComponent(() =>
        import("../components/Contact/Contact")
      );
      return (
        <div>
          <Navigation onRouteChange={this.onRouteChange} />
          <AsyncPage5 />
        </div>
      );
    }
  }
}
export default App;
