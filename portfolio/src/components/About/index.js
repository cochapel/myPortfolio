import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="head">ABOUT ME</h1>
        </div>

        <div className="container2">
          <p className="textCenter">
            I am a recent graduate from the University of North Carolina at
            Chapel Hill who earned a degree from the School of Media and
            Journalism with a focus in interactive multimedia. I have experience
            in creating designs that solve problems using research from a
            user-centered perspective. I have also gained a background in
            graphic design, as well as, some web development skills.
          </p>

          <br />
          <p className="textCenter">
            For my career goals, I aspire to be a UX designer focusing on
            frontend design and development. I use the concepts I have learned
            in graphic design, usability research and my computer science skills
            to help me progress through the world of UX. I have worked through
            usability research methods, personas, user journeys, concept maps
            and wireframes. I have even taken some opportunities in redesigned
            several websites. Venturing through this site you will discover my
            most recent projects.
          </p>
        </div>
      </Router >
    );
  }
}

export default About;
