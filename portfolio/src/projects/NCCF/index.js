import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class NCCF extends Component {
  render() {
    return (
      <Router>
        <h1 className="head"> North Carolina Coastal Federation Redesign </h1>

        <div className="flex">
          <h5 >Check Out My Other Work</h5>
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
          <Link to="/toch/">
            <div className="container">
              <img src={require("../../images/TOCHLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Town of Chapel Hill Redesign</div>
            </div>
          </Link>

          {/** Third Project Tab */}
          <Link to="/campusy/">
            <div className="container">
              <img src={require("../../images/campusYLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Campus Y Redesign</div>
            </div>
          </Link>

          {/** Fourth Project Tab */}
          <Link to="/campusy/">
            <div className="container">
              <img src={require("../../images/campusYLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Campus Y Redesign</div>
            </div>
          </Link>

          {/** Fifth Project Tab */}
          <Link to="/campusy/">
            <div className="container">
              <img src={require("../../images/campusYLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">Campus Y Redesign</div>
            </div>
          </Link>
        </div>
      </Router>
    );
  }
}

export default NCCF;
