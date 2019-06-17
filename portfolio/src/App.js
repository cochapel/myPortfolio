import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

import About from "./components/About";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="bgColor">
          <div class="headPos">
            <div class="imgFrame">
            </div>
            <h1 class="intro">I'M AUSTIN</h1>
            <h5 class="cap">
              I AM A UX DESIGNER FROM NORTH CAROLINA. I HAVE A PASSION FOR
              DISCOVERING THE BEST APPROACH FROM USER-CENTERED DESIGN
            </h5>
            <nav>
              <ul>
                <ButtonToolbar>
                  <ToggleButtonGroup type="button" defaultValue={[1, 3]}>
                    <li>
                      <Link to="/">
                        <Button>My Work</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/">
                        <Button>About Me</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resume/">
                        <Button>Resume</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact/">
                        <Button>Contact Me</Button>
                      </Link>
                    </li>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </ul>
            </nav>
          </div>
        </div>

        <Route path="/" exact component={Work} />
        <Route path="/about/" exact component={About} />
        <Route path="/resume/" exact component={Resume} />
        <Route path="/contact/" exact component={Contact} />
      </Router>
    );
  }
}

export default App;
