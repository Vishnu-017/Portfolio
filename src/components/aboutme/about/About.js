import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Vishnu Prabu </b> 
                  and I am a <b className="purple">Machine Learning and Data Science Enthusiastic </b> 
                    student at <b className="purple">Sri Eshwar College of Engineering </b> .
                    
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    Python, SQL, NoSQL, Java, C.{" "}
                  </b>
                <br />
                <br />
                I also have experience in working with Machine Learning and Deep Learning models 

                  <b className="purple">
                    {" "}
                    CNN, RNN, Tensorflow, OpenCV, NLP, , Knime, Tabelau, AWS, Pandas, and NumPy. {" "}
                  </b>
                  And also worked with Data Analysis and Data Visualisation&nbsp;
                  <b className="purple">
                    {" "}
                    Knime, Tabelau, Pandas, and NumPy. {" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products using &nbsp;
                  <b className="purple">
                    {" "}
                    Generative AI and LSTM.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and listening to music and podcasts. &nbsp;
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
