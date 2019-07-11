import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class CampusY extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal1: false,
      showModal2: false,
    };

    this.handleShow1 = () => {
      this.setState({
        showModal1: true,
      });
    };

    this.handleShow2 = () => {
      this.setState({
        showModal2: true,
      });
    };

    this.handleHide = () => {
      this.setState({
        showModal1: false,
        showModal2: false,
      });
    };
  }

  render() {
    return (
      <Router>
        <h1 className="head"> Campus Y Redesign </h1>

        <div className="container2">
          {/** Project Details */}
          <div id="btm-border">
            <h2 className="margSpace2">Project Details</h2>
            <h3>My Role (Solo Project):</h3>
            <p>
              User Research, Information Architecture, Interaction Design,
              Visual Design
            </p>

            <h3>Timeline:</h3>
            <p>3 Weeks</p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe XD, Adobe Illustrator, Adobe Photoshop, Pen and Paper
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            A design proposal for the Campus Y website to help members in the
            organization make reservations for meetings at the Campus Y
            building. The design proposal also focuses on guiding students at
            the University of North Carolina at Chapel Hill to find information
            related to the Campus Y or other organizations that work alongside
            them. There was frustration expressed by the co-presidents of the
            Campus Y for making reservations and navigating within their website
            to find this information.
          </p>

          <h3>Solution</h3>
          <p>
            To restructure the main navigation of the site to better match
            subcategories beneath them, and to create a more understanding
            design in order to help navigate users where they intend to go.
          </p>

          <h3>Problem Statement</h3>
          <p>
            How might we improve the navigation for the Campus Y website and
            improve the design in order to attract a larger audience?
          </p>

          <div className="center">
            <img src={require("../../images/finHomepage.png")}
              alt="Campus Y Laptop Platform"
              className="projectImg"
            />
            <p className="caption">**Final homepage design</p>
          </div>

          <h2>Introduction</h2>
          <h3>Background Context</h3>
          <p>
            The Campus Y is a student organization meant to help engage
            students in social justice around UNC-Chapel Hill. They are often
            involved in activities that help promote equality around campus
            and to help influence students to speak up in order to promote
            social change. The purpose for their website is to guide students
            in a direction to follow an organization that relates to their
            passions.
          </p>

          <h3>My Mission</h3>
          <p>
            In the redesign challenge my focus was on two audiences, the
            Campus Y members and the students at UNC-Chapel Hill. Based on
            usability tests, the issues with the current site are primarily to
            do with the layout and the site architecture. I used card sorting
            to help formulate a more efficient user flow. This method was
            helpful in guiding the information architecture in a way that is
            most convenient and easy to use. Interestingly, not many users
            seemed to have trouble finding the reservation page for reserving a
            room in the Campus Y building, but they showed frustration in the
            booking process due to the number of steps needed to take. There
            were many issues for students finding the committees page for the
            organizations that work alongside the Campus Y as well. These two
            issues became the main focus for my redesign challenge.
          </p>

          <h2>User Testing and Analysis</h2>
          <p>
            To begin my research, I created an audience analysis chart while
            talking to the co-presidents of the organization to get an idea of
            their target range. Afterwards, I began conducting usability tests
            of the old site in order to keep track of how the website is being
            used. This helped in creating two personas representing the
            audience that is most likely to use the site. You can see the
            audience analysis, usability brief and other methods used in
            conducting the research below.
          </p>

          <div className="center">
            <img src={require("../../images/persona1.png")}
              alt="First Persona"
              className="projectImg2"
            />

            <img src={require("../../images/persona2.png")}
              alt="Second Persona"
              className="projectImg2"
            />
          </div>

          {/** Usability Brief Modal */}
          <div className="btn-center2">
            <Button
              className="btn-text2"
              variant="primary"
              onClick={this.handleShow1}>
              Audience Analysis
            </Button>
          </div>

          <Modal
            show={this.state.showModal1}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className="adjBG">
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>Audience Analysis</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="adjBG2">
              <object
                className="adjWidth"
                data={require("../../images/audienceAnalysis.pdf")}
                type="application/pdf">
                <embed
                  src={require("../../images/audienceAnalysis.pdf")}
                  type="application/pdf" />
              </object>
            </Modal.Body>
          </Modal>

          {/** Usability Brief Modal */}
          <div className="btn-center2">
            <Button
              className="btn-text2"
              variant="primary"
              onClick={this.handleShow2}>
              Usability Brief
            </Button>
          </div>

          <Modal
            show={this.state.showModal2}
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
          <h3>Sketches</h3>
          <p>
            After analyzing the user research on the old website, I began
            sketchinga design to help me visualize how the new site should
            look. My first sketches were focused on how the home page of the
            site should be restructured and how to improve the reservation
            page by using a calendar. I also came up with an idea to better
            align the news section on the homepage because the communications
            director complained about this as a problem in the aesthetics of
            the site.
          </p>

          <div className="center">
            <img src={require("../../images/campYSketch.jpg")}
              alt="First Sketch"
              className="projectImg2"
            />

            <img src={require("../../images/campYSketch2.jpg")}
              alt="Second Sketch"
              className="projectImg2"
            />
          </div>

          <h3 className="topSpac">Styleguide</h3>
          <p>
            Next, I created a styleguide to help visualize how the redesign of
            the site might look. I sampled the colors from the Campus Y logo
            and altered them a little to get better contrasting. I also kept to
            the original Lato font to remain consistant with the Campus Y brand.
            However, I did manage to talk the co-presidents into changing their
            secondary font to Karla. This complemented the Lato font better.
          </p>

          <div className="center">
            <img src={require("../../images/campYstyle.png")}
              alt="Styleguide"
              className="projectImg3 topSpac2"
            />
          </div>

          <h3 className="topSpac">Mockups</h3>
          <p>
            After the styleguide, I began creating wireframes based on user
            testing. In total, I went through two iterations before coming up
            with the final design. For the first iteration, I tested the
            hierarchy of the mid-fidelity wireframes to make sure that
            information was easier to find than the old site’s architecture.
            The second iteration relied on user testing to see if a heart icon
            would be a better way to represent a donation link. Unfortunately,
            the heart icon was unsuccessful, and I decided to make a button
            called “Make A Donation” instead.
          </p>

          <div className="center">
            <img src={require("../../images/campYmocks.png")}
              alt="Mockups"
              className="projectImg topSpac2"
            />
          </div>


          <h3 className="topSpac">Final Design</h3>
          <p>
            For the final design, I reduced the number of steps to make a room
            reservation from seven to four. Instead of taking multiple small
            steps to make a room reservation, I combined some of them into
            larger steps to prevent users from feeling they are making redundant
            steps. I also decided to organize each committee into four columns
            so it would reduce the time for users to locate a particular
            committee. Below are the mockups showing each step from beginning to
            end for making a reservation and finding a committee.
          </p>

          <div className="center">
            <img src={require("../../images/finReservations.png")}
              alt="Reservation Mockup"
              className="projectImg topSpac2"
            />
            <p className="caption2">**Final reservations pages mockup</p>
          </div>
          <div className="center">
            <img src={require("../../images/finCommittees.png")}
              alt="Committees Mockup"
              className="projectImg topSpac2"
            />
            <p className="caption2">**Final committees pages mockup</p>
          </div>

          <h2 className="topSpac">Final Prototypes</h2>
          <h3>Reservations Prototype</h3>
          <div className="center">
            <video loop autoplay="autoplay" className="projectVid topSpac2">
              <source
                src={require("../../images/finReservation.mp4")}
                type="video/mp4"
              />
            </video>
          </div>

          <h3>Committees Prototype</h3>
          <div className="center">
            <video loop autoplay="autoplay" className="projectVid topSpac2">
              <source
                src={require("../../images/finCommittees.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/** Other Work Tabs */}
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
                  NCCF Redesign
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

export default CampusY;
