import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./styles.css";

/** Class for the Work Component for the App */
class Work extends Component {
  /** Renders the Work page to the App
  * @return {any} JSX content
  */
  render() {
    return (
      <Router>
        {/** UX Design Projects */}
        <div>
          <h1 className="head">UX DESIGN</h1>
        </div>

        <div className="flex">
          {/** First Project Tab */}
          <Link to="/campusy/">
            <div className="container">
              <img src={require("../../images/campusYLogo.jpg")}
                alt="Campus Y Logo"
                className="image"
              />
              <div className="overlay">
              </div>
              <div className="text">
                Campus Y Redesign
              </div>
            </div>
          </Link>

          {/** Second Project Tab */}
          <Link to="/nccf/">
            <div className="container">
              <img src={require("../../images/NCCFLogo.jpg")}
                alt="NCCF Logo"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  NCCF Project
                </div>
              </div>
            </div>
          </Link>

          {/** Third Project Tab */}
          <Link to="/busapp/">
            <div className="container">
              <img src={require("../../images/busAppLogo.jpg")}
                alt="Bus App Logo"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Bus App Project
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/** UX Development Projects */}
        <div>
          <h1 className="head">UX DEVELOPMENT</h1>
        </div>

        <div className="flex3">
          {/** First Project Tab */}
          <Link to="/portprocess/">
            <div className="container">
              <img src={require("../../images/myLogo.jpg")}
                alt="Portfolio Logo"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  My Portfolio Process
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/** Graphic Design Projects */}
        <div>
          <h1 className="head">GRAPHIC DESIGN</h1>
        </div>

        <div className="flex2">
          {/** First Project Tab */}
          <Link to="/vector/">
            <div className="container">
              <img src={require("../../images/vectorArtLogo.jpg")}
                alt="Vector Art Logo"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Vector Project
                </div>
              </div>
            </div>
          </Link>

          {/** Second Project Tab */}
          <Link to="/sociss/">
            <div className="container">
              <img src={require("../../images/socIssLogo.jpg")}
                alt="Social Issue Logo"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Social Issue Project
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Router>
    );
  }
}

export default Work;
