import React, { Component } from "react";
import Typed from "typed.js";
import "./Home.css";

// import Navigation from "../Navigation/Navigation";

class Home extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  //ROUTE CHANGE
  onClickBtn = () => {
    this.props.onRouteChange("home");
  };

  render() {
    return (
      <div className="flexbox_arrange">
        <div className="font_style">
          <span className="hi">Hi , </span>
          <br /> I am <span className="name_color">Raja Rahul</span> , I<br />
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
        <div>
          <i className="fas fa-stroopwafel fa-10x" />
        </div>
        <div>
          <div className="icons" style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "25px", marginTop: "40px" }}>
              <a
                href="https://github.com/rajarahul12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg" />
              </a>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <a
                class="margin_bottom"
                href="https://www.linkedin.com/in/raja-rahul-87a172141/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-lg" />
              </a>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <a
                class="margin_bottom"
                href="https://twitter.com/RajaRahul123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg" />
              </a>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <a
                class="margin_bottom"
                href="https://www.instagram.com/raja__rahul__maddula/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram fa-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
