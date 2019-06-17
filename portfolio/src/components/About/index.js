import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./styles.css";

class About extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 class="head">ABOUT ME</h1>
        </div>

        <div>
          <p class="textCenter">
            I am a student at the University of North Carolina at Chapel
            Hill majoring in interactive multimedia. I enjoy traveling and
            I plan on taking adventures around the world some day. So far
            the only international trip I have taken is to London, England
            and I have traveled to most southeastern states in the United
            States. My favorite vacation spot is Siesta Key, Florida.
          </p>

          <br />
          <p class="textCenter">
            For my career goals, I aspire to be a UX designer focusing on
            frontend design and development. I plan on using the concepts
            I have learned in graphic design to help progress me through
            the world of UX design. I have worked with wireframes, concept
            maps, and even redesigned several websites. Venturing through
            this site you will discover my most recent projects.
          </p>
        </div>
      </Router >
    );
  }
}

export default About;
