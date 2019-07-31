import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="head">CONTACT ME</h1>
        </div>

        <div className="container2">
          <h3>Email</h3>
          <p className="textCenter">
            cochapel1@gmail.com
          </p>

          <br />
          <h3>Phone</h3>
          <p className="textCenter">
            (336) 817-3325
          </p>
        </div>
      </Router>
    );
  }
}

export default Contact;
