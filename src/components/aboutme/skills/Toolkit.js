import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/t2.1.png";
import pc from "../../../images/t1.1.png";
import git from "../../../images/t3.1.png";
import github from "../../../images/github.png";
import cb from "../../../images/Vs.png";
import pg from "../../../images/t4.1.png";
import pm from "../../../images/t5.1.png";
import chrome from "../../../images/t6.1.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "100%", height: "1000%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pc} alt="" style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt=""
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={cb} alt="" style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pg} alt="" style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pm} alt="" style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={chrome} alt="" style={{ width: "100%", height: "100%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
