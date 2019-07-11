import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class VectorArt extends Component {
  render() {
    return (
      <Router>
        <h1 className="head"> Vector Art Project </h1>

        <div className="container2">

          {/** Project Details */}
          <div id="btm-border">
            <h2 className="margSpace2">Project Details</h2>
            <h3>My Role:</h3>
            <p>
              Graphic Designer
            </p>

            <h3>Timeline:</h3>
            <p>4 Weeks</p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe Photoshop, Adobe Illustrator, Pen and Paper
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            For this information I was challenged by given the task to either do
            an organic or a vector graphic that relates to data that I present.
            Since I have an interest in learning about dangerous snake, I
            decided to do a vector graphic about the Inland Taipan. The Inland
            Taipan is known to be the most venomous snake in the world. I also
            decided to present tips on how to treat snake bites in case someone
            gets bitten by a venomous snake.
          </p>

          <h3>Solution</h3>
          <p>
            Create awareness using imagery, color and layout to help inform
            people on the dangers of venomous snakes and how to treat a snake
            bite.
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
            For this information graphic I also used some organic art to help
            my graphic stand out. Inland Taipans are found in specific parts
            of the Australian deserts. This is why I used a sketch of
            Australia to help showcase their locations. I also sketched
            diagrams on how to tend to snake bites and used a sketch of a
            stopwatch to express the time it takes for an Inland Taipan’s
            venom to kill a person.
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
            Just like my social issues project, I went through two
            iterations before settling with the final design. During
            each iteration, I would get constructive feedback from my
            classmates and professor. Before each iteration, I would
            make improvements based on the feedback I would receive.
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
