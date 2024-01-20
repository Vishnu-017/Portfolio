import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/img1.png";
import ci from "../../images/img3.webp";
import hd from "../../images/hd.png";
import ir from "../../images/inforover1.jpg";
import pp from "../../images/img4.jpg";
import eco from "../../images/img5.jpg";
import meal from "../../images/img6.jpg";
import ac from "../../images/academic.png";
import calendar from "../../images/img7.jpg";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Futuristic Driving
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/Futuristic-Driving"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  This solution proposes the usage of number plate detection for collecting taxes.
                                  This solution proposes the elimination of tolls and fake number plates can be identified.
                                  The sms would be sent to the user once the taxes are collected.

                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Tensorflow | PaddleOCR | OpenCV | Streamlit | SQL
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  InfoRover
                                </h5>
                                <img src={ir} alt={ir} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/InfoRover"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  InfoRover is a PDF analysis tool designed to extract text, images, and links from uploaded PDF files. The workflow includes a character text splitter using Langchain, OpenAI embeddings and FAISS
                                  operations to enhance search capabilities. Users can input prompts, and the system generates relevant outputs based on similarity search

                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Langchain | OpenAI | FAISS | Streamlit
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Report Ease
                                </h5>
                                <img src={hd} alt={hd} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Report Ease is the AI website that reads medical reports like Blood tests, CT scan reports, MRI scan reports, etc…
                                  The AI will analyse the report and gives the detailed explanation of the uploaded report and also suggest a specialist related to his/her health condition.

                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                PaddleOCR | Javascript | SQL | RNN
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Data Visualisation of IPL
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/Tableau_Visualization"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Leveraged Tableau tools for dynamic visualizations (bubble charts, columned bar charts) in IPL
                                  dataset analysis.
                                  Applied creative analytical techniques to extract valuable insights from the visualizations.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Tableau
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Smart Attendance
                                </h5>
                                <img src={eco} alt={eco} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/Face-Recognition-Attendance-System"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  An application that detects the face of the employee and posts the attendance. The attendance is noted based on the geolocation of the workspace.
                                  It detects the faces even in the edge cases such as when the employee wears masks, spectacles, etc…
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                CNN | NoSQL
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Personal Portfolio
                                </h5>
                                <img src={pp} alt={pp} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/Personal_Portfolio"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Welcome to my personal portfolio. Explore my
                                  work, skills, and achievements in a concise
                                  and visually appealing format. Get a glimpse
                                  of my expertise and creativity.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, React, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Virtual Assistant
                                </h5>
                                <img src={meal} alt={meal} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/Virtual_Assistant"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  It works as an alexa by performing the user required tasks.
                                  The user face is first verified and once it is successful it performs further activities.
                                  It performs actions such as making calls, sending messages, e-mails, opening documents, surfing in the google, youtube, etc..
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Python
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Sales Analysis and Prediction 
                                </h5>
                                <img src={ac} alt={ac} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017/Sales_Prediction"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Pre-processed, visualized, and analyzed e-commerce data using Python. Trained machine learning models (Linear Regression, Decision Tree, K-NN, Random Forest) to
                                  predict e-commerce profit and evaluated for optimal accuracy.

                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Machine learning
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  GroveGood
                                </h5>
                                <img src={calendar} alt={calendar} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Vishnu-017"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  An E-Commerce platform that helps online customers in buying unique brands of organic products from the producers.
                                  A direct payment system is introduced between the producers and the customers which increases the profit rate of the producers.
                                  Organic product certifications and lab-tested reports will be visible to customers with the product description.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                MERN
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
