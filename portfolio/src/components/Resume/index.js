import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";

class Resume extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 class="head">RESUME</h1>
        </div>

        <div className="container2">
          <h2>Austin Phillips</h2>
          <p>
            Phone: (336) 817-3325 |
            Email: cochapel@live.unc.edu |
            Website: cochapelport.com
          </p>

          <h3>EDUCATION</h3>

          <p>
            University of North Carolina at Chapel Hill - May 2019
            <br />
            Bachelor of Arts in Media and Journalism—Interactive Multimedia
            Concentration
          </p>
          <ul class="indent">
            <li>Cumulative GPA: 3.61</li>
            <li>Honors: Dean's List (all semesters)</li>
          </ul>

          <p>
            Guilford Technical Community College | Jamestown, NC - May 2016
            <br />
            Associate of Science—General Science
          </p>
          <ul class="indent">
            <li>Cumulative GPA: 3.96</li>
            <li>
              Honors: Dean’s List (all semesters),
              awarded Student Excellence,
              Phi Theta Kappa member
            </li>
          </ul>

          <h3>EXPERIENCE</h3>

          <p>
            Genomic Science Center |
            Greenhouse Assistant |
            Chapel Hill, NC - Aug. 2016 – Present
          </p>
          <ul class="indent">
            <li>Prepared and delivered soil orders for graduate projects</li>
          </ul>

          <p>
            Advertising UX and Engagement Design |
            Designer and Analyst |
            UNC-Chapel Hill -  Jan. 2019—May. 2019
          </p>
          <ul class="indent">
            <li>
              Created low-fidelity wireframes for website redesign of North
              Carolina Coastal Federation
            </li>
            <li>
              Worked in a team in order to collaborate the best approach
              for the website redesign of NCCF
            </li>
            <li>
              Analyzed and performed card sorts to improve the information
              hierarchy of the NCCF site from user input
            </li>
            <li>
              Designed prototypes and wireframes for a startup idea for a
              mental health app
            </li>
          </ul>

          <p>
            Campus Y |
            Web Designer |
            Chapel Hill, NC - Sept. 2018—Jan. 2019
          </p>
          <ul class="indent">
            <li>Created prototypes and storyboards for website redesign</li>
            <li>
              Organized group discussions on how to improve website
              design
            </li>
            <li>
              Analyzed website analytics to formulate the best approach
              for usability research
            </li>
          </ul>

          <p>
            UX Design and Usability |
            UX Designer |
            UNC-Chapel Hill - Aug. 2018—Dec. 2018
          </p>
          <ul class="indent">
            <li>
              Created prototypes and storyboards for website redesign of
              The Town of Chapel Hill
            </li>
            <li>
              Performed card sorting with a group in order to organize the
              website hierarchy
            </li>
            <li>
              Analyzed website analytics to formulate the best approach for
              usability research
            </li>
          </ul>

          <p>
            Information Graphics |
            Graphic Designer |
            UNC-Chapel Hill - Jan. 2018—May. 2018
          </p>
          <ul class="indent">
            <li>
              Drew sketches to help me plan out a design on data driven
              topics
            </li>
            <li>
              Participated in group discussions through iterations of each
              project to help improve designs
            </li>
            <li>
              Used Illustrator and Photoshop in unison to design a graphic
            </li>
          </ul>

          <p>
            Daily Tar Heel |
            Design Desk |
            Chapel Hill, NC - Sept. 2017—May 2018
          </p>
          <ul class="indent">
            <li>
              Collaborated with the editor in order to design page layouts for
              the daily paper every Sunday
            </li>
          </ul>

          <p>
            Vestal Buick GMC |
            Auto-Detail and Sales Administrator |
            Kernersville, NC - Sept. 2011 – Aug. 2016
          </p>
          <ul class="indent">
            <li>
              Photographed vehicles and uploaded them to the company’s website
            </li>
            <li>
              Inspected new vehicle inventory for damages and repaired them
            </li>
            <li>
              Organized paperwork and created data sheets for the finance
              department
            </li>
          </ul>

          <h3>SKILLS</h3>
          <p>
            Software: Adobe Creative Suite (XD, Comp, Illustrator, Photoshop,
            Premiere and InDesign) and Invision
          </p>
          <p>
            Programming Languages and Platforms: HTML5, CSS3, Javascript,
            React, Bootstrap, Wordpress and Java
          </p>
        </div>
      </Router>

    );
  }
}

export default Resume;
