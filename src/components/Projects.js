import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Manager Full Stack Engineer",
      description: "Proxy API for Aflac Nov 2023-Present",
      point:  "-Manage a team of 10 members",
      point2: "-Manage the deployment and configuration of the APIs’ proxies",
      point3: "-Develop guidelines and procedures resources for our team",
      imgUrl: projImg1,
    },
    {
      title: "Full Stack Engineer",
      description: "SSO Auth for MUFG BANK June 2021- Oct 2023  ",
      point:  "-Lead the off-shore team of 5 people to revitalize existing Java  programs to Java 11",
      point2: "-Guided a team of 3 developers to update 33 of our sql batch jobs to be configured to our new servers/systems",
      point3: "-Created multiple java programs to make calls to the api’s utilizing SoapUI to update our systems and database",
      imgUrl: projImg2,
    },
    {
      title: "Education",
      description: "DePaul University ",
      point:  "BS Computer Science 2021",
      point2: "National Society of Honor and Sucess",
      point3: "",
      imgUrl: projImg3,
    },
    {
        title: "Internships",
        description: "Common Wealth Edison",
        point:  "-Worked for ComEd for every summer of 2017-2020",
        point2: "-Develped skills in SQL to help clean data for anylasis",
        point3: "-Created dashboards on SmartSheet and PowerBI to get live data reporting for the company",
        imgUrl: projImg4,
      },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>My journey in the tech industry began during my tenure as an Intern at ComEd,
                   where I honed my skills in data and technology. From there, I been growing to become more adept in today's technologies.
                  I've always been passionate about leveraging technology to solve real-world problems..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}