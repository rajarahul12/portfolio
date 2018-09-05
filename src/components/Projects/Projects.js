import React, { Component } from "react";
import "./Projects.css";
class Projects extends Component {
  render() {
    return (
      <div className="anim">
        {/* 1 */}
        <div className="mar">
          <h1 className="head">Smart Brain</h1>
          <div className="flex_arrange">
            <img src={require("./1.png")} className="img_adjs" alt="" />
            <div className="flex_col">
              <p className="para">
                This a Project created using <b>React.js</b> for the FontEnd
                <b>Node.js</b> for Backend and <b>Postgresql</b> for the
                database. It accepts an image URL as an input and detects the
                human faces in it using <b>Machine Learning</b>.
              </p>
            </div>
          </div>
          <div className="flex_btn_adj">
            <a
              href="https://rajarahul12.github.io/smart-brain-facerecognition/"
              className="website"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="mar">
          <h1 className="head">Travel Guide</h1>
          <div className="flex_arrange2">
            <img src={require("./2.png")} className="img_adjs" alt="" />
            <div className="flex_col">
              <p className="para">
                This is a Project was created as a part of Hackathon. It is a
                one stop guide for planning your travel. It gets the air line
                fares using Goibio Api and also display nearby tourist places to
                visit.
                <br />
                <span className="span">*</span> It is just a working prototype.
              </p>
            </div>
          </div>
          <div className="flex_btn_adj">
            <a
              href="https://rajarahul12.github.io/travel_guide/"
              className="website"
              rel="noopener noreferrer"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
        {/* 3 */}
        <div className="mar">
          <h1 className="head">ToDo List</h1>
          <div className="flex_arrange">
            <img
              src={require("./3.jpg")}
              height="120px"
              width="150px"
              className="img_adjs"
              alt=""
            />
            <div className="flex_col">
              <p className="para">
                This is a simple ToDO List App created using JavaScript and that
                uses Browser's Local Storage to save the tasks created by the
                user.
              </p>
            </div>
          </div>
          <div className="flex_btn_adj">
            <a
              href="https://rajarahul12.github.io/ToDoList"
              className="website"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
        {/* 4 */}
        <div className="mar">
          <h1 className="head">TIC TAC TOE CLI</h1>
          <div className="flex_arrange2">
            <img
              src={require("./4.jpg")}
              height="120px"
              width="160px"
              className="img_adjs"
              alt=""
            />
            <div className="flex_col">
              <p className="para">
                This is a simple Command Line Application created using Ruby. It
                works as a basic TicTacToe game and It can be played by two
                players.
              </p>
            </div>
          </div>
          <div className="flex_btn_adj">
            <a
              href="https://github.com/rajarahul12/Tic-Tac-Toe-CLI"
              className="website"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT Repository
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
