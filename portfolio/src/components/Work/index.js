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
          <div className="container">
            <img src={require("../../images/campusYLogo.jpg")}
              alt="Avatar"
              className="image"
            />
            <div className="overlay"></div>
          </div>
        </div>

        <div className="flex">
          <h5 >GRAPHIC DESIGN</h5>
        </div>
        <div className="flex">
          {/** First Project Tab */}
          <div className="container">
            <img src={require("../../images/organic.jpg")}
              alt="Avatar"
              className="image"
            />
            <div className="overlay">Vector Project</div>
          </div>

          {/** Second Project Tab */}
          <div className="container">
            <img src={require("../../images/socIss.jpg")}
              alt="Avatar"
              className="image"
            />
            <div className="overlay">Social Issue Project</div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Work;
