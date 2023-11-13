import React, { useRef }  from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import emailjs from '@emailjs/browser';

const BookingForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wi5qitp', 'template_4kmge3h',e.target, '7eVfn4k5gxgoylehE')
      .then((result) => {
          console.log(result);
          alert('Message Send Sucessfully');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form  ref={form}  onSubmit={sendEmail}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="fname" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name="lname"  placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" name="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" name="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="faddress" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text"  name="taddress" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="people" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="luggage" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date"name="date" placeholder="Journey Date" />
      </FormGroup>
      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup> */}

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          name="message"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      <button className=" contact__btn" type="submit">
                  Send Message
                </button>
    </Form>
  );
};

export default BookingForm;
