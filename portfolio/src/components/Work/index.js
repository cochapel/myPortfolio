import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./styles.css";

class Work extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="head">MY WORK</h1>
        </div>

        <div className="flex">
          <h5 >UX DESIGN</h5>
        </div>

        <div className="flex">
          {/** First Project Tab */}
          <Link to="/campusy/">
            <div className="container">
              <img src={require("../../images/campusYLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Campus Y Redesign</div>
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
                North Carolina Coastal Federation Redesign
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
              <div className="overlay">Town of Chapel Hill Redesign</div>
            </div>
          </Link>

          {/** Fourth Project Tab */}
          <Link to="/busapp/">
            <div className="container">
              <img src={require("../../images/busAppLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Bus App Usability Project</div>
            </div>
          </Link>
        </div>

        <div className="flex">
          <h5 >GRAPHIC DESIGN</h5>
        </div>
        <div className="flex">
          {/** First Project Tab */}
          <Link to="/vector/">
            <div className="container">
              <img src={require("../../images/vectorArtLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Vector Project</div>
            </div>
          </Link>

          {/** Second Project Tab */}
          <Link to="/sociss/">
            <div className="container">
              <img src={require("../../images/socIssLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Social Issue Project</div>
            </div>
          </Link>
        </div>
      </Router>
    );
  }
}

export default Work;
