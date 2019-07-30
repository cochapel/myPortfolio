import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

import About from "./components/About";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import CampusY from "./projects/CampusY";
import NCCF from "./projects/NCCF";
import BusApp from "./projects/BusApp";

import VectorArt from "./projects/VectorArt";
import SocialIssue from "./projects/SocialIssue";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pgPos">
          <div className="imgCenter">
            <img
              src={require("./images/logo.png")}
              className="img"
              alt="My Logo" />
          </div>

          <h1 className="intro">I'M COREY</h1>
          <h5 className="capt">
            I am a problem solver using research and design to help improve
            websites and mobile applications from a user-centered perspective.
          </h5>

          <nav>
            <ul className="delBullet">
              <ButtonToolbar>
                <ToggleButtonGroup type="button">
                  <li>
                    <Link to="/">
                      <Button className="btn-text">MY WORK</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/">
                      <Button className="btn-text">ABOUT ME</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resume/">
                      <Button className="btn-text">RESUME</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/">
                      <Button className="btn-text">CONTACT ME</Button>
                    </Link>
                  </li>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </ul>
          </nav>

          <Route path="/" exact component={Work} />
          <Route path="/about/" exact component={About} />
          <Route path="/resume/" exact component={Resume} />
          <Route path="/contact/" exact component={Contact} />

          <Route path="/campusy/" exact component={CampusY} />
          <Route path="/nccf/" exact component={NCCF} />
          <Route path="/busapp/" exact component={BusApp} />

          <Route path="/vector/" exact component={VectorArt} />
          <Route path="/sociss/" exact component={SocialIssue} />
        </div >
      </Router >
    );
  }
}

export default App;
