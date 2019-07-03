import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class CampusY extends Component {
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
        <div className="container">
          <h1 className="head btm-border"> Campus Y Redesign </h1>
        </div>

        <div className="flex container" id="container">
          <div className="box1" id="first">
            <h2>About the Project</h2>

            <h3>Overview</h3>
            <p>
              A design proposal for the Campus Y website to help
              members in the organization make reservations for
              meetings at the YMCA building on campus. The design
              proposal also focuses on guiding students at the
              University of North Carolina at Chapel Hill find
              information related to the organization or other
              organizations that work alongside the Campus Y. There
              was much frustration expressed by the members at the
              Campus Y for making reservations and navigating
              throughout their website to find important information.
            </p>

            <h3>Solution</h3>
            <p>
              To restructure the main navigation of the site to better
              match subcategories beneath them, and to create a more
              understanding design in order to help navigate users
              where they intend to go.
            </p>

            <h3>Problem Statement</h3>
            <p>
              How might we improve the navigation for the Campus Y
              website and improve the design in order to attract a
              larger audience?
            </p>

            <img src={require("../../images/CompImg.png")}
              alt="Avatar"
              className="projectImg"
            />

            <h2>Introduction</h2>

            <h3>Background Context</h3>
            <p>
              The Campus Y is a student organization meant to help
              engage students in social justice around UNC-Chapel Hill.
              They are often involved in activities that help promote
              equality around campus and to help influence students to
              speak up to influence social change. The purpose for their
              website is to guide students in a direction to follow an
              organization that relates to their passions that work
              alongside the Campus Y.
            </p>

            <h3>My Mission</h3>
            <p>
              In the redesign challenge, my focus was on two audiences, the
              Campus Y members and the students at UNC-Chapel Hill. Based
              on usability tests, the issues with the current site are
              primarily to do with the layout and the site architecture. I
              used card sorting to help formulate a more efficient user flow.
              This method was helpful in guiding the information architecture
              in a way that is most convenient and easy to use. Interestingly,
              not many users seemed to have trouble finding the reservation
              page for reserving a room at the Campus Y but showed frustration
              in the booking process due to the number of steps needed to
              take. There were many issues for students finding the committees
              page for the organizations that work alongside the Campus Y as
              well. These two issues became the main focus for my redesign
              challenge.
            </p>

            <h2>User Testing and Analysis</h2>
            <p>
              To begin my research, I created an audience analysis chart while
              talking to the co-presidents of the organization to get an idea of
              their target range. Afterwards, I began conducting usability tests
              of the old site in order to keep track of how the website is being
              used. This helped in creating two personas representing the
              audience that is most likely to use the site. You can also see the
              usability brief for the audience analysis and methods used in
              conducting the research here.
            </p>
            <div className="btn-center2">
              <Button
                className="btn-text"
                variant="primary"
                onClick={this.handleShow}>
                Usability Brief
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
                  <h2>Usability Brief</h2>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="adjBG2">
                <object
                  className="adjWidth"
                  data={require("../../images/usabilityTest.pdf")}
                  type="application/pdf">
                  <embed
                    src={require("../../images/usabilityTest.pdf")}
                    type="application/pdf" />
                </object>
              </Modal.Body>
            </Modal>

            <h2>Design Process</h2>
            <p>
              After analyzing all the user research on the old website, I began
              sketching a design to help me visualize how the new site should
              look. My first sketches were focused on how the home page of the
              site should look and how to improve the reservation page by using
              a calendar. There were seven steps before a user was confirmed a
              room at the Campus Y. By the medium-fidelity wireframes, I had the
              steps knocked down to four for reserving a room.
            </p>
          </div>

          <div id="btm-border">
            <div className="box2" id="second">
              <h2>Project Details</h2>

              <h3>My Role (Solo Project):</h3>
              <p>
                User Research, Information Architecture, Interaction Design,
                Visual Design
              </p>

              <h3>Timeline:</h3>
              <p>3 Weeks</p>

              <h3>Tools:</h3>
              <p className="margSpace">Adobe XD, Adobe Illustrator, Adobe Photoshop, Pen and Paper</p>
            </div>
          </div>
        </div>

        <h1 className="head">Check Out My Other Work</h1>

        <div className="flex">
          {/** First Project Tab */}
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

          {/** Second Project Tab */}
          <Link to="/toch/">
            <div className="container">
              <img src={require("../../images/TOCHLogo.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  Town of Chapel Hill Redesign
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

          {/** Fifth Project Tab */}
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

export default CampusY;
