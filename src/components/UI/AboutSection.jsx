import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">
                Welcome to Jannat Travels Cab Services
              </h2>
              <p className="section__description">
                We
                prioritize customer satisfaction and go the extra mile to exceed
                your expectations. Our dedicated customer support team is
                available 24/7 to assist you with any inquiries, booking
                requests, or special requirements you may have. We believe in
                open communication and transparency, and we listen attentively
                to your feedback to continually improve our services. When you
                choose Jannat Travels, you choose a hassle-free and enjoyable
                travel experience. We take pride in making your journey
                comfortable, convenient, and memorable. Whether it's a solo
                trip, a family vacation, or a business engagement. Thank you for choosing Jannat Travels Cab Services. We
                look forward to serving you and being a part of your wonderful
                journey.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Reliable and Safe Transportation
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Punctuality and Efficiency
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Exceptional Customer Service
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Diverse Fleet Options
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
