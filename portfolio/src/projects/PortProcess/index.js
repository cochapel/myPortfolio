import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class PortProcess extends Component {
  render() {
    return (
      <Router>
        <h1 className="head">My Protfolio Process</h1>

        <div className="container2">
          {/** Project Details */}
          <div id="btm-border">
            <h2 className="margSpace2">Project Details</h2>
            <h3>My Role:</h3>
            <p>
              Interaction Design, Visual Design, Frontend Development
            </p>

            <h3>Timeline:</h3>
            <p>4 Weeks</p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe Photoshop, Adobe Illustrator, Figma, Pen and Paper,
              HTML5, CSS3, JavaScript, React.js, Bootstrap
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            For this project, I decided to design my own portfolio and develop
            it. I ran into a problem while hosting my original portfolio with
            GoDaddy and decided to figure out a way to have my portfolio hosted
            for free through GitHub Pages. Therefore, I came up with this
            project to help showcase my skills in understanding UX design and
            frontend development.
          </p>

          <h3>Solution</h3>
          <p>
            To create a project that showcases my skills in UX design, UX
            development and graphic design without paying for hosting and
            keeping my website secure.
          </p>

          <div className="center">
            <img src={require("../../images/portProject/portExamp.png")}
              alt="Portfolio Homepage"
              className="projectImg"
            />
            <p className="caption2">**Final homepage design</p>
          </div>

          <h2>Design Process</h2>

          <h3>Desktop Sketches</h3>
          <p>
            To begin my design process, I had to take into consideration the
            flow of my users when navigating through my portfolio. I wanted
            to keep this simple and easy to follow so that my projects would be
            the first thing my users see when entering my site. To help
            visualize this process, I sketched out the potential design of my
            portfolio and asked people if the flow was easy to understand for a
            portfolio. I iterated on this process the most until the website
            flow was simple for users to understand.
          </p>

          <div className="center">
            <img
              src={require("../../images/portProject/portProject_desktop.jpg")}
              alt="Sketch 1"
              className="projectImg3 topSpac2"
            />
          </div>

          <h3 className="topSpac">Mobile Sketches</h3>
          <p>
            For the responsive design, I also began by sketching out how the
            information would lay out on mobile versus desktop. I kept to a one
            column grid for the mobile design and a three-column grid for the
            desktop design on the “work” page. For all pages in the mobile
            design, I kept to the one-column grid. This was the most efficient
            way to display information to my users without elements becoming too
            small to read.
          </p>

          <div className="center">
            <img
              src={require("../../images/portProject/portProject_mobile.jpg")}
              alt="Sketch 1"
              className="projectImg3 topSpac2"
            />
          </div>

          <h3 className="topSpac">Desktop Mid-Fidelity Wireframes</h3>
          <p>
            Next, I moved on to creating higher fidelity wireframes and
            beginning to make final commitments to the layout of my
            portfolio. During this process, I decided to take out the
            “contact” page from my portfolio because it was redundant
            compared to the “resume” page. Instead, I decided to create
            a “Weekly UI” blog to show progress through UI challenges I
            come up with each week. This was an excellent solution because
            the users who will be using my portfolio will be getting an
            idea of my work and not my contact information.
          </p>

          <div className="center">
            <img src={require("../../images/portProject/wireframe_desktop.png")}
              alt="First Design Iteration"
              className="projectImg topSpac2"
            />

            <img
              src={require("../../images/portProject/wireframe_desktop2.png")}
              alt="Second Design Iteration"
              className="projectImg topSpac2"
            />
          </div>

          <h3 className="topSpac">Mobile Mid-Fidelity Wireframes</h3>
          <p>
            During the mobile wireframes, I committed to the responsive
            design of collapsing the project buttons to a one-column grid
            to make it easier for users to tap and enter the project’s page.
            I also committed to collapsing the “Project Details” section to
            a one-column grid for the mobile design so that users would have
            an easier time reading the information on the project’s page.
          </p>

          <div className="center">
            <img src={require("../../images/portProject/wireframe_mobile.png")}
              alt="First Design Iteration"
              className="projectImg topSpac2"
            />
          </div>

          <h3 className="topSpac">Styleguide</h3>
          <p>
            While creating the styleguide, I decided to choose colors that are
            personal to me. I came up with a color scheme that represents where
            I came from. The red is a symbol of my school colors and the yellow
            is a triadic color from red that creates great contrast when used
            together. I also used black for smaller subsections and paragraph
            texts because it also creates excellent contrast with the yellow
            background.
          </p>

          <p>
            The typography for this project was a challenge. I had to figure out
            what would be the best representation of my personality. I decided
            to use the Jhiaux font for headings and subheadings because of how
            large it is. The seems to grab my user’s attention the best when
            compared to other fonts I tested. The font also does well in
            representing my organized personality because of how the letters are
            spaced and the symmetry of each letter, which I felt was important
            to showcase in my portfolio. I also used Florentia font because it
            is an easy font to read for my users and matches well with the
            Jhiaux font.
          </p>

          <div className="center">
            <img src={require("../../images/portProject/portStyleguide.png")}
              alt="First Design Iteration"
              className="projectImg2 topSpac2"
            />
          </div>

          <h2>Final Product</h2>

          <p>
            The final product can be seen while navigating through this
            portfolio. I used HTML5, CSS3 and JavaScript to help me
            develop this website portfolio from scratch. I even used tools
            such as React.js and Bootstrap to help me organize my workflow
            and for starter templates such as the main navigation for the
            site. You can view my code by viewing my &nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cochapel/myPortfolio">
              GitHub Repository
            </a>.
          </p>


        </div>

        <h1 className="head topSpac3">Check Out My Other Work</h1>

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
        </div>
      </Router>
    );
  }
}

export default PortProcess;
