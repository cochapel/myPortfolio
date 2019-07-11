import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

class BusApp extends Component {
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
        <h1 className="head"> Bus App Usability Project </h1>

        <div className="container2">
          {/** Project Details */}
          <div id="btm-border">
            <h2 className="margSpace2">Project Details</h2>
            <h3>(Solo Project) My Role:</h3>
            <p>
              User Research/Analysis and Visual Design
            </p>

            <h3>Timeline:</h3>
            <p>3 Weeks</p>

            <h3>Tools:</h3>
            <p className="margSpace">
              Adobe Comp, Pen and Paper
            </p>
          </div>

          {/** Project Overview */}
          <h2>About the Project</h2>
          <h3>Overview</h3>
          <p>
            The purpose for this project was to come up with a startup idea and
            create an application that solves an “experience-based” problem.
            From my experience, the NextBus app would be inaccurate at
            predicting times for when the next bus would arrive, as well as
            being unnecessarily difficult to use. Therefore, I took on the
            project to develop an app that would solve these problems.
          </p>

          <h3>Solution</h3>
          <p>
            To develop an application that will better predict bus arrivals
            at particular spots. For this, I would need to add locator
            numbers at bus stops to type into the app. This would help save
            time for finding a bus route to a user’s next location.
          </p>

          <h3>Problem Statement</h3>
          <p>
            How might we make transit apps more convenient and reliable for
            users?
          </p>

          <h2>UX Strategy</h2>
          <p>
            The purpose of this app is to help users by providing more
            reliable times for when the bus will arrive at the stop closest
            to them. There are also added features such as including updates
            provided by the transit organization and real-time updates that
            users can input for other users to read in case the transit
            organization might not be providing it in time. During my field
            research, there was evidence supporting this need from users who
            use NextBus or transit apps similar to it. Many users even
            reported a desire to include emergency services on the app, such
            as P2P services, to make the service more convenient and easier
            to use.
          </p>
          <p>
            Based on the research conducted throughout this project, the
            transit app should be reliable with bus arrival times. This was
            the largest issue with current apps used for transit systems.
            Another idea that this app should focus on is convenience. Many
            users reported complications with the current transit apps that
            make it inconvenient and difficult to use. Some users even
            reported that certain bus routes would disappear from the app
            leaving them unsure of when their bus would arrive. Lastly, this
            app should include a map that pinpoints every known stop around
            the area to prevent confusion when the user searches up nearby
            bus stops. Many users complain about current apps that only
            include major stops and not the stops closest to them.
          </p>

          <h2>Business Strategy and Value</h2>
          <h3>Customer Segments</h3>
          <p>
            Based on early research, users show a desire for a new transit
            app that meets their needs of reliability and convenience.
            University students use transit apps to help them find the
            fastest route to class or any other places they need to be at a
            certain time. Providing real-time updates of delays or
            cancellations of bus routes would be beneficial to this segment
            of users in order to figure out the best route for them. These
            users want an app that helps them get to where they need to be
            without the inconvenience of not knowing about a delay or bus
            cancellation.
          </p>

          <h3>Value Proposition</h3>
          <p>
            This app promises to fulfill the needs of users with reliable
            and convenient information to help them figure out the best
            transit route to get to where they are going.
          </p>

          <h3>Rationale</h3>
          <p>
            Users want a transit app that they can trust for getting them
            where they need to go. They also show a need for convenience
            when the transit system isn’t running in their favor. This is
            why this app will combine reliability and convenience into one
            simple space. This app will provide users with several options
            on how to get to where they are going if their main way of
            transportation isn’t running. Real-time updates will also help
            them decide in advance on how to get to where they are going
            in a timelier manner.
          </p>
          <p>
            Although there are apps available for users to figure out
            their route, many of them lack reliability and convenience.
            One transit app may have strengths in providing times for when
            their bus may arrive, but lack in providing them updates if
            the bus experiences delays. This app takes in user input to
            help transits inform other users about delays. Also, this app
            will make it easier for users to use emergency services, such
            as P2P, to get users where they need to be by inputting their
            own location and entering for a shuttle to pick them up instead
            of searching for the number and calling P2P.
          </p>

          <h2>Competitive Analysis</h2>
          <h3>NextBus</h3>
          <p>
            This is a popular transit app used by many users around the
            University of North Carolina at Chapel Hill. This app has a
            simple design that is easy to navigate and use. However, the
            app does not include updates for the transit system and users
            have complained about the reliability of arrival times shown in
            the app. Also, the app only lets the user search up major
            transit stops and doesn’t include each one that is around the
            entire campus.
          </p>

          <h3>CarolinaGO</h3>
          <p>
            This is another transit app that is used at UNC-Chapel Hill,
            but it is more difficult to navigate compared to other apps.
            When users search their location and destination using this app,
            they are very limited on their choices. This app seems to limit
            the stops a user can search more so than the NextBus app. Another
            issue that many users complain about is the amount of time it
            takes to load a page.
          </p>

          <h3>Chapel Hill Transit Live</h3>
          <p>
            Lastly, Chapel Hill Transit Live is another transit app that is
            used around UNC-Chapel Hill. This app has similar functionalities
            as the CarolinaGO app without the complex navigation and the load
            time errors for certain pages. Although the app is more convenient
            to use, it lacks the amount of stops you can search around the
            campus. Also, the apps purpose is to view live bus routes on a map,
            but this feature is a bit complicating for users to find and figure
            out.
          </p>

          <h2>Design Process</h2>
          <p>
            During the design phase for this project, I went through three
            iterations before settling with the final mid-fidelity wireframe.
            Each iteration consisted of changes that was influenced by asking
            what users felt should be included in a bus transit app over time.
            This was my way of making sure that the app remained consistent
            with users needs.
          </p>
          <h3>Iteration 1</h3>
          <div className="center topSpac2 margSpace">
            <img src={require("../../images/busApp/sketch1.jpg")}
              alt="Sketch 1"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/sketch2.jpg")}
              alt="Sketch 2"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/sketch3.jpg")}
              alt="Sketch 3"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/sketch4.jpg")}
              alt="Sketch 4"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/sketch5.jpg")}
              alt="Sketch 5"
              className="projectImg4"
            />
          </div>

          <h3>Iteration 2</h3>
          <div className="center topSpac2 margSpace">
            <img src={require("../../images/busApp/iter21.jpg")}
              alt="Iteration 2 1"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter22.jpg")}
              alt="Iteration 2 2"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter23.jpg")}
              alt="Iteration 2 3"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter24.jpg")}
              alt="Iteration 2 4"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter25.jpg")}
              alt="Iteration 2 5"
              className="projectImg4"
            />
          </div>

          <h3>Iteration 3</h3>
          <div className="center topSpac2">
            <img src={require("../../images/busApp/iter31.jpg")}
              alt="Iteration 3 1"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter32.jpg")}
              alt="Iteration 3 2"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter33.jpg")}
              alt="Iteration 3 3"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter34.jpg")}
              alt="Iteration 3 4"
              className="projectImg4"
            />

            <img src={require("../../images/busApp/iter35.jpg")}
              alt="Iteration 3 5"
              className="projectImg4"
            />
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

export default BusApp;
