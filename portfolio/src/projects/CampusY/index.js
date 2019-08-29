import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/** Class for the Campus Y Component for the App */
class CampusY extends Component {
  /** Contructor that sets the state of the Modals
   * @param {Object} props
   * @param {Object} context
  */
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

  /** Renders the Campus Y page to the App
  * @return {any} JSX content
  */
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

            <h3>Timeframe:</h3>
            <p>
              3 weeks
            </p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe XD, Adobe Illustrator, Adobe Photoshop, Pen and Paper
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            A design proposal for the Campus Y website that helps members of the
            organization find the information they are looking for. There was
            frustration expressed by the communications director and the
            co-presidents of the Campus Y for making reservations and navigating
            through their website. I volunteered to help make this a better
            experience for the members of the organization and students by using
            a human-centered design approach to their website.
          </p>

          <h3>Solution</h3>
          <p>
            To restructure the main navigation of the site to better match the
            subcategories associated with them, and to create a more
            understanding user interface to help guide users where they intend
            to go.
          </p>

          <h3>Problem Statement</h3>
          <p>
            How might we improve the navigation for the Campus Y website and
            make improvements on the user flow?
          </p>

          <div className="center">
            <img src={require("../../images/finHomepage.png")}
              alt="Campus Y Laptop Platform"
              className="projectImg"
            />
            <p className="caption">**Final homepage design</p>
          </div>

          <h3>Background Context</h3>
          <p>
            The Campus Y is a student organization meant to help engage students
            in social justice around UNC-Chapel Hill. They are often involved in
            activities that help promote equality around campus and influence
            students to speak up for social change. The purpose for their
            website is to guide students in a direction by offering them
            opportunities to follow an organization that relates to their
            values.
          </p>

          {/** Running user testing on the old website */}
          <h2>User Testing and Analysis</h2>
          <h3>My Mission</h3>
          <p>
            In the redesign challenge my focus was on two audiences, the Campus
            Y members and the students at UNC-Chapel Hill. Based on usability
            tests, the issues with the current website are primarily to do with
            content organization and the site architecture. I used card sorting
            to help formulate a more efficient user flow. Interestingly, none
            of my participants had trouble finding the room reservations page
            for booking a group meeting at the Campus Y, but they expressed
            frustration due to the number of steps it takes to complete the
            room reservation form.
          </p>

          <p>
            Another issue that I discovered was the difficulty for students to
            find certain pages, because the subcategories of the main menu were
            in an irrelevant location. One of these pages that were difficult to
            find was the committees page, which is an important page for
            students to find according to the communications director and the
            co-presidents.  Even if a student managed to find the committees
            page, they struggled to find a particular group they were interested
            in because of how the content was organized. Therefore, I made the
            site architecture, room reservations page, and the group committees
            page the main focus for this website redesign.
          </p>

          <h3>Audience Analysis and Usability Tests</h3>
          <p>
            I began this project by creating an audience analysis chart while
            talking to the communications director and the co-presidents of the
            organization. This helped me get an idea of the Campus Y’s target
            audience, what information the audience is drawn to the most, and
            what the website is being used for.
          </p>

          <p>
            Afterwards, I began conducting usability research of the old website
            to get a better understanding of what their users are struggling
            with. This is where I found issues using the main navigation,
            looking for committees, and completing the room reservation form.
            You can view the audience analysis and the usability brief below.
          </p>

          {/** Audience Analysis Modal */}
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

          <h3>User Personas</h3>
          <p>
            The personas I created for this project are a representation of the
            audience that is most likely to use this website. I decided to take
            an ethnographic approach by studying the target audience in a
            non-obtrusive way. I sat around the Campus Y observing people’s
            habits, motives, and discussions with other people around them
            without getting involved and staying away from the environment.
            This gave me an understanding of what the audience wants to get out
            of the Campus Y.
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

          <h3 className="topSpac">User Journeys</h3>
          <p>
            Once I had my personas defined and understood, I went on to create
            user journeys to figure out certain touchpoints and painpoints they
            may encounter when going through the website. This was used to help
            figure out where I can improve the website and create a better user
            experience for the Campus Y’s audience.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/CampusYUserJourney.png")}
              alt="First User Journey"
              className="projectImg2"
            />

            <img src={require("../../images/campusY/CampusYUserJourney2.png")}
              alt="Second Persona"
              className="projectImg2"
            />
          </div>

          {/** The Design Process */}
          <h2 className="topSpac">Design Process</h2>
          <h3>Sketches for the Committees Page</h3>
          <p>
            For the committee’s user flow, I decided to keep the button above
            the introductory video on the homepage because the communications
            director mentioned that this was the most important page in the
            website. This isn’t surprising because during my observations at
            the Campus Y, I noticed many students talking about committees they
            wanted to get involved with.
          </p>

          <p>
            I also organized the content shown on the committees’ page to make
            it easier for users to find the committee they are interested in.
            Compared to the old website layout, this layout reduced the amount
            of time it took for users to find their committee by a significant
            amount without any issues.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/committees.jpg")}
              alt="First Sketch"
              className="projectImg3 topSpac2"
            />
          </div>

          <h3 className="topSpac">Sketches for the Room Reservation Page</h3>
          <p>
            For the room reservation form on the Campus Y website, I was able to
            reduce the number of steps that it took to confirm a reservation
            from seven to four. The old process for making a room reservation
            caused many users to give up filling out the form and calling to
            confirm a room. This user flow is meant to ease the frustration from
            filling out a lengthy form by helping guide users through the
            process much faster and easier.
          </p>

          <p>
            I even created a new calendar user interface to interact with when
            users try booking a room through the Campus Y. This user interface
            will give the user a better experience finding a time they can book
            a room by guiding them step-by-step through the process instead of
            the user filling out all the information at once in the old
            website’s user interface.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/reservation.jpg")}
              alt="First Sketch"
              className="projectImg3 topSpac2"
            />
          </div>

          <h3 className="topSpac">Sketches for the Newsletter Page</h3>
          <p>
            For the newsletter page, I decided to keep it consistent to the
            layout as the committees’ page. This gives the user a more natural
            way of reading each stories title from left to right instead of
            scrolling down through each story. I even included a user interface
            where the user can scrape through multiple pages by clicking the
            next or previous button at the bottom of the page. The user even has
            the option to choose which page number they would like to go instead
            of clicking next one page at a time.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/newsletter.jpg")}
              alt="First Sketch"
              className="projectImg3 topSpac2"
            />
          </div>

          <h3 className="topSpac">Mid-Fidelity Wireframes for the Homepage</h3>
          <p>
            When organizing the content for the homepage, I thought about what
            is most important to users when they enter the Campus Y website. For
            the Campus Y members, it is the room reservations page. For the
            students at UNC-Chapel Hill it is learning more about the
            organization. According to the communications director of the Campus
            Y, she thinks of the site as a way for students to learn how the
            organization is helping to make a difference. This is why the
            homepage has more of a focus on informing viewers with the
            newsletter and attempting to get more students to join a committee.
            I even figured out a way to help increase subscriptions to weekly
            newsletters by including a sign-up form on the bottom of the page.
            This made it much easier for users to find instead of hunting it
            down in the navigation bar.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/homepage.png")}
              alt="First Sketch"
              className="projectImg topSpac2"
            />
          </div>

          <h3 className="topSpac">
            Mid-Fidelity Wireframes for the Committees Page
          </h3>
          <p>
            The committees page is where there seemed to be the most issue for
            finding information. In order to show more committees in the
            viewport, I decided to organize the content into a four-column grid.
            I also got rid of each committees’ short description that was
            included in the old website design of this page. This helped by
            alleviating users from feeling overwhelmed by the amount of content
            on the page and providing them with a more focused search when
            looking for a committee. Many more students were able to find the
            committees they were looking for faster with this layout.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/committees.png")}
              alt="First Sketch"
              className="projectImg topSpac2"
            />
          </div>

          <h3 className="topSpac">
            Mid-Fidelity Wireframes for the Room Reservations Page
          </h3>
          <p>
            During the meeting with the communications director and the
            co-presidents, they told me that there were a lot of calls coming
            in for reserving a room at the Campus Y even though there was a way
            to complete a form online. I found out during my research that users
            who were trying to reserve a room online, but they would give up and
            call to reserve it instead. This is because of the number of steps
            it took to complete the reservation form in the old website. To
            solve this issue, I cut down the number of steps to complete the
            form from seven to four. This gave users a better experience overall
            because it made them feel less overwhelmed.
          </p>

          <p>
            I even created a better user interface for the user to schedule a
            time for their group meetings. In the old user interface, the user
            had to go back and forth between pages to figure out which times
            wouldn’t conflict with other group meetings. My solution will
            include group meetings that have already been reserved within the
            user interface. The user can pick a date and see if there are events
            conflicting with their times and reserve their room all in one page.
            My solution also provides more guidance for scheduling a meeting by
            eliminating text heavy information and making the process more
            straightforward.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/roomReserv1.png")}
              alt="First Sketch"
              className="projectImg topSpac2"
            />

            <img src={require("../../images/campusY/roomReserv2.png")}
              alt="First Sketch"
              className="projectImg topSpac2"
            />

            <img src={require("../../images/campusY/roomReserv3.png")}
              alt="First Sketch"
              className="projectImg topSpac2"
            />
          </div>

          <h3 className="topSpac">
            Mid-Fidelity Wireframes for the Newsletter Page
          </h3>
          <p>
            The layout of content on the weekly newsletter section of the
            website was out of alignment and seemed to not follow a grid. My
            solution was to include stories in a one-column grid and give users
            the option to scrape through multiple pages to view more content
            faster. In the old website layout, scraping through content was more
            difficult for users because there was only a next and previous
            button to go through each page one at a time. My solution gives
            users the option to skip pages to find stories from several weeks
            ago much faster than the older layout.
          </p>

          <div className="center">
            <img src={require("../../images/campusY/newsletter.png")}
              alt="First Sketch"
              className="projectImg topSpac2"
            />
          </div>

          <h3 className="topSpac">Styleguide</h3>
          <p>
            Coming soon...
          </p>

          {/** Visual Design and Prototyping */}
          <h2 className="topSpac">Final Product</h2>
          <h3>Mockups and Prototype for the Committees Page</h3>
          <p>
            Coming soon...
          </p>

          <h3>Mockups and Prototype for the Room Reservations Page</h3>
          <p>
            Coming soon...
          </p>

          <h3>Mockups and Prototype for the Newsletter Page</h3>
          <p>
            Coming soon...
          </p>
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
