import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";





const FindCarForm = () => {


  
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address"  />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
       
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
       <button className="btn find__car-btn" >
              <Link to="/cars" style={{color: "white", textDecoration:"none", fontSize:"20px"}}>Reserve Now</Link>
           </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
