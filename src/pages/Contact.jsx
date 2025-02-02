import React, { useRef }  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import emailjs from '@emailjs/browser';
import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://wa.me/7210000092",
    icon: "ri-whatsapp-line",
  },
  {
    url: "https://www.instagram.com/jannat.travels/?igshid=MzRlODBiNWFlZA%3D%3D",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.instagram.com/jannat.travels/?igshid=MzRlODBiNWFlZA%3D%3D#",
    icon: "ri-linkedin-line",
  },
  {
    url: "https://www.instagram.com/jannat.travels/?igshid=MzRlODBiNWFlZA%3D%3D",
    icon: "ri-twitter-line",
  },
];

// emailjs.sendForm('service_m23siff','template_13i5h5n',form.current,'7eVfn4k5gxgoylehE')
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m23siff', 'template_13i5h5n',e.target, '7eVfn4k5gxgoylehE')
      .then((result) => {
          console.log(result.text);
          alert('Message Send Successfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form ref={form} onSubmit={sendEmail}> 
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" name="name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email"  name="email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description1 mb-0">
                #4421 Near Bus Stand , GT Road Sirhind, Punjab
                <br/>
            
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fw-bold fs-6 mb-0">Phone:</h6>
                  <p className="section__description1 mb-0">+917210000092</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6 fw-bold">Email:</h6>
                  <p className="section__description1 mb-0">  ridewithjannattravels@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4 ">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
