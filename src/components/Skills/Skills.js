import React, { Component } from "react";
import "./Skills.css";
export default class Skills extends Component {
  render() {
    return (
      <div className="anim">
        <h1 className="header_style">My Skills</h1>

        <div className="skills">
          {/* Languages */}
          <div className="languages">
            <h2 className="header_languages">Languages</h2>
            <div className="list_items">
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>Java</li>
                <li>Ruby</li>
              </ul>
            </div>
          </div>
          {/* Frameworks */}
          <div className="frameworks">
            <h2 className="header_languages">Frameworks / Libraries</h2>
            <div className="list_items">
              <ul className="ul_adj">
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>Django</li>
              </ul>
            </div>
          </div>
          {/* Databases */}
          <div className="databases">
            <h2 className="header_languages">Databases</h2>
            <div className="list_items">
              <ul>
                <li>Oracle 11g</li>
                <li>Postgresql</li>
              </ul>
            </div>
          </div>
          {/* Tools */}
          <div className="tools">
            <h2 className="header_languages">Tools</h2>
            <div className="list_items">
              <ul className="list_adj">
                <li>Github</li>
                <li>VScode</li>
                <li>NPM</li>
                <li>WebPack</li>
                <li>Babel</li>
                <li>Create-react-app</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
