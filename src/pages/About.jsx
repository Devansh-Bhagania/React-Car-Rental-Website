import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description1">
                  Customer satisfaction is at the core of our business. We take
                  pride in delivering personalized and attentive customer
                  service. Our dedicated support team is available 24/7 to
                  address any inquiries or special requests you may have. We
                  value your feedback and continuously strive to improve our
                  services based on your suggestions, ensuring that your
                  experience with Jannat Travels is nothing short of
                  exceptional.
                </p>

                <p className="section__description1">
                  Our drivers are familiar with the local routes and traffic
                  patterns, allowing us to provide efficient and timely
                  transportation services. Whether you need an airport pickup, a
                  hotel transfer, or transportation for a special event, we
                  strive to ensure that you reach your destination on time.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>
                      <a
                        href="tel:+917210000092"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "28px",
                        }}
                      >
                        +91 7210000092
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
