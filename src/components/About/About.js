import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="anim1">
        <div>
          <img src={require("./1.jpg")} className="img_adj" alt="" />
        </div>
        <div>
          <p className="para">
            An aspiring engineer working with great zeal and trying to explore
            in the field of Web Development.I would love to learn new
            technologies and I keep on updating myself with the following trend.
            <br />
            Passionate about Artificial Intelligence and I would like to build
            robust apps, search engines, software using Artificial Intelligence
            and Machine Learning
          </p>
          <div className="btnadj">
            <a
              href={require("./Rahul_CV.pdf")}
              download="resume"
              class="website"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
