import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class BusApp extends Component {
  render() {
    return (
      <Router>
        <h1 className="head"> Bus App Usability Project </h1>

        <h1 className="head">Check Out My Other Work</h1>

        <div className="flex">
          {/** First Project Tab */}
          <Link to="/campusy/">
            <div className="container">
              <img src={require("../../images/campusYLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Campus Y Redesign
                </div>
              </div>
            </div>
          </Link>

          {/** Second Project Tab */}
          <Link to="/nccf/">
            <div className="container">
              <img src={require("../../images/NCCFLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  North Carolina Coastal Federation Redesign
                </div>
              </div>
            </div>
          </Link>

          {/** Third Project Tab */}
          <Link to="/toch/">
            <div className="container">
              <img src={require("../../images/TOCHLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Town of Chapel Hill Redesign
                </div>
              </div>
            </div>
          </Link>

          {/** Fourth Project Tab */}
          <Link to="/vector/">
            <div className="container">
              <img src={require("../../images/vectorArtLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Vector Project
                </div>
              </div>
            </div>
          </Link>

          {/** Fifth Project Tab */}
          <Link to="/sociss/">
            <div className="container">
              <img src={require("../../images/socIssLogo.jpg")}
                alt="Avatar"
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

export default BusApp;