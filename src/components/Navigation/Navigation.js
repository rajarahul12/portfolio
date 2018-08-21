import React, { Component } from "react";
import "./Navigation.css";
class Navigation extends Component {
  //EVENTS --?? NEED TO BE OPTIMIZED
  changeIcon1() {
    document.querySelector(".common_headings").style.display = "inline";
    document.querySelector(".fa-home").style.display = "none";
    document.querySelector(".common_headings").style.cursor = "pointer";
  }
  changeText1() {
    document.querySelector(".common_headings").style.display = "none";
    document.querySelector(".fa-home").style.display = "inline";
  }

  changeIcon2() {
    document.querySelector(".common_headings1").style.display = "inline";
    document.querySelector(".fa-user").style.display = "none";
    document.querySelector(".common_headings1").style.cursor = "pointer";
  }
  changeText2() {
    document.querySelector(".common_headings1").style.display = "none";
    document.querySelector(".fa-user").style.display = "inline";
  }

  changeIcon3() {
    document.querySelector(".common_headings2").style.display = "inline";
    document.querySelector(".fa-brain").style.display = "none";
    document.querySelector(".common_headings2").style.cursor = "pointer";
  }
  changeText3() {
    document.querySelector(".common_headings2").style.display = "none";
    document.querySelector(".fa-brain").style.display = "inline";
  }

  changeIcon4() {
    document.querySelector(".common_headings3").style.display = "inline";
    document.querySelector(".fa-video").style.display = "none";
    document.querySelector(".common_headings3").style.cursor = "pointer";
  }
  changeText4() {
    document.querySelector(".common_headings3").style.display = "none";
    document.querySelector(".fa-video").style.display = "inline";
  }

  changeIcon5() {
    document.querySelector(".common_headings4").style.display = "inline";
    document.querySelector(".fa-envelope").style.display = "none";
    document.querySelector(".common_headings4").style.cursor = "pointer";
  }
  changeText5() {
    document.querySelector(".common_headings4").style.display = "none";
    document.querySelector(".fa-envelope").style.display = "inline";
  }

  render() {
    return (
      <div className="navigation">
        <div
          className="one height_adj"
          onMouseOver={this.changeIcon1}
          onMouseLeave={this.changeText1}
        >
          <i className="fas fa-home fa-lg toggle" />
          <span className="common_headings" onClick={this.onClickBtn}>
            HOME
          </span>
        </div>
        <div
          className="two height_adj"
          onMouseOver={this.changeIcon2}
          onMouseLeave={this.changeText2}
        >
          <i className="fas fa-user fa-lg" />
          <span className="common_headings1">ABOUT</span>
        </div>
        <div
          className="three height_adj"
          onMouseOver={this.changeIcon3}
          onMouseLeave={this.changeText3}
        >
          <i className="fas fa-brain fa-lg" />
          <span className="common_headings2">SKILLS</span>
        </div>
        <div
          className="four height_adj"
          onMouseOver={this.changeIcon4}
          onMouseLeave={this.changeText4}
        >
          <i className="fas fa-video fa-lg" />
          <span className="common_headings3">PROJECTS</span>
        </div>
        <div
          className="five height_adj"
          onMouseOver={this.changeIcon5}
          onMouseLeave={this.changeText5}
        >
          <i className="fas fa-envelope fa-lg" />
          <span className="common_headings4">CONTACT</span>
        </div>
      </div>
    );
  }
}

export default Navigation;
