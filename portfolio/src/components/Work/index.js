import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./styles.css";

class Work extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 class="head">MY WORK</h1>
        </div>

        <div class="flex">
          <h5 >UX DESIGN</h5>
        </div>
        <div class="flex">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>

        <div class="flex">
          <h5 >GRAPHIC DESIGN</h5>
        </div>
        <div class="flex">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
      </Router>
    );
  }
}

export default Work;
