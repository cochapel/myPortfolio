import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class VectorArt extends Component {
  render() {
    return (
      <Router>
        <h1 className="head"> Vector Art Project </h1>

        <div className="container">

          {/** Project Details */}
          <div id="btm-border">
            <h2 className="margSpace2">Project Details</h2>
            <h3>My Role:</h3>
            <p>
              Graphic Designer
            </p>

            <h3>Timeline:</h3>
            <p>3 Weeks</p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe Photoshop, Adobe Illustrator, Pen and Paper
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            An information graphic that depicts a social issue in the United
            States. For this project I decided to create a graphic about
            substance abuse among young adults in the country. According to
            the National Institute on Drug Abuse, young adults between the
            ages 18 to 25 suffer with substance abuse more than any other
            age group in the United States.
          </p>

          <h3>Solution</h3>
          <p>
            Create awareness using imagery and color that help conveys a
            message of the problem. Use this technique in unison with data
            found about the abuse of drugs and alcohol in the United States.
          </p>

          <div className="center">
            <img src={require("../../images/vecArt/Phillips_final.png")}
              alt="Avatar"
              className="projectImg topSpac2"
            />
            <p className="caption2">**Finalized design</p>
          </div>

          <h2>Design Process</h2>

          <h3>Sketches</h3>
          <p>
            After finding the data needed to help convey my message about
            substance abuse, I began sketching the layout of how my
            information graphic might look. I decided to use a face smoking
            a cigarette faded in the background, which represents a looming
            shadow of a potential problem. I also tilted the title and
            subtitles to help represent an intoxicating effect when looking
            at the graphic.
          </p>

          <div className="center">
            <img src={require("../../images/vecArt/sketch1.jpeg")}
              alt="Avatar"
              className="projectImg4"
            />

            <img src={require("../../images/vecArt/sketch2.jpeg")}
              alt="Avatar"
              className="projectImg4"
            />

            <img src={require("../../images/vecArt/sketch3.jpeg")}
              alt="Avatar"
              className="projectImg4"
            />
          </div>

          <h3 className="topSpac">Iterative Planning</h3>
          <p>
            Throughout the duration of the project I went through two
            iterations before settling with the final design. During each
            iteration, I would get constructive feedback from my
            classmates and professor. Before each iteration I would make
            improvements based on the feedback I would receive.
          </p>

          <div className="center">
            <img src={require("../../images/vecArt/iter1.jpg")}
              alt="Avatar"
              className="projectImg2"
            />

            <img src={require("../../images/vecArt/iter2-2.jpg")}
              alt="Avatar"
              className="projectImg2"
            />
          </div>
        </div>

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
          <Link to="/busapp/">
            <div className="container">
              <img src={require("../../images/busAppLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Bus App Usability Project
                </div>
              </div>
            </div>
          </Link>

          {/** Fourth Project Tab */}
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

export default VectorArt;
