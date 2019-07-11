import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class NCCF extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <Router>
        <h1 className="head">
          North Carolina Coastal Federation Redesign
        </h1>

        <div className="container">
          {/** Project Details */}
          <div id="btm-border">
            <h2 className="margSpace2">Project Details</h2>
            <h3>My Role:</h3>
            <p>
              User Research/Analysis, Visual Designer
            </p>

            <h3>Timeline:</h3>
            <p>3 Weeks</p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe XD, Pen and Paper
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            A redesign proposal for the homepage of the North Carolina Coastal
            Federation’s website in order to improve message clarity to their
            audience. This proposal was based on user testing between a team of
            five user researchers and analyst. Throughout the duration of this
            project, 14 subjects participated in card sorting in order to help
            improve the sites architecture. Although this project was never
            intended to go past the mid-fidelity stage of design, it proved to
            be a valuable experience in user-centered design.
          </p>

          <h3>Solution</h3>
          <p>
            To restructure the homepage by improving site architecture for a
            better user experience and improve message clarity on the NCCF
            website.
          </p>

          <h3>Problem Statement</h3>
          <p>
            How might we improve the message that the North Carolina Coastal
            Federation wants North Carolina natives to know about?
          </p>

          <div className="center">
            <img src={require("../../images/nccf/nccfPlat.png")}
              alt="NCCF Laptop Platform"
              className="projectImg"
            />
            <p className="caption">**Original homepage design</p>
          </div>

          <h2>Introduction</h2>
          <h3>Background Context</h3>
          <p>
            The North Carolina Coastal Federation is an organization dedicated
            to making North Carolina natives more aware about the current
            conditions of our oceans and the marine life that lives in it. The
            purpose of their website is to help build awareness of their
            organization and get more people involved in their mission. Some
            of their events that people can get involved with are cleaning up
            the beaches along North Carolina’s coast.
          </p>

          <h3>Our Mission</h3>
          <p>
            For this challenge we decided to use card sorting as a way to get
            an idea of how to restructure the sites architecture. This proved
            to be a useful method because after each one of our group tested
            our participants, we evaluated our results and noticed familiar
            patterns in the way our subjects organized title sections that can
            be found on the NCCF website. This pattern was not consistent with
            how the original site was structure, which gave away a major issue
            to the site that we aimed to fix.
          </p>

          <h2>Usability Research</h2>
          <p>
            We went through several different testing stages before finalizing
            our mid-fidelity wireframe. You can read more in-depth about our
            methodologies and our results below.
          </p>

          {/** Usability Report Modal */}
          <div className="btn-center2">
            <Button
              className="btn-text2"
              variant="primary"
              onClick={this.handleShow}>
              Usability Report
            </Button>
          </div>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className="adjBG">
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>Usability Report</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="adjBG2">
              <object
                className="adjWidth"
                data={require("../../images/nccf/usabilityReport.pdf")}
                type="application/pdf">
                <embed
                  src={require("../../images/nccf/usabilityReport.pdf")}
                  type="application/pdf" />
              </object>
            </Modal.Body>
          </Modal>

          <h2>Design Process</h2>

          <h3>Low-Fidelity Wireframe</h3>
          <p>
            After my group and I analyzed the card sorting results, it was up to
            me and one other team member to come up with two low-fidelity
            wireframes. Once these were produced, we got our team back together
            to prepare for more user testing to figure out which wireframe
            worked best and what aspects of each wireframe users favored the
            most.
          </p>

          <div className="center">
            <img src={require("../../images/nccf/myWire.jpg")}
              alt="Low-fidelity Wireframe"
              className="projectImg2"
            />
            <p className="caption2">**My wireframe</p>
          </div>

          <h3 className="topSpac">Mid-Fidelity Wireframe</h3>
          <p>
            After taking input from more users on the low-fidelity wireframes,
            my team decided to leave the mid-fidelity wireframe to me. I
            assessed the input from all of our participants when comparing the
            two low-fidelity wireframes and included the best features in the
            final mid-fidelity wireframe for this project.
          </p>

          <div className="center">
            <img src={require("../../images/nccf/Phillips_wireframe.png")}
              alt="Mid-fidelity Wireframe"
              className="projectImg topSpac2"
            />
            <p className="caption2">**Finalized mid-fidelity wireframe</p>
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

          {/** Third Project Tab */}
          <Link to="/vector/">
            <div className="container">
              <img src={require("../../images/vectorArtLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Vector Project
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

export default NCCF;
