import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from "react";
import MsgTostify from "../../Custom-Components/Tostify/MsgTostify";
import "./detailform.css";
import axios from "axios";

const POST_API = `https://staging.get-licensed.co.uk/guardpass/api/public/sms/job/link`;
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
};

let message;

const DetailForm = () => {
  const [checkValue, setCheckValue] = useState();
  const [showMessage, setShowMessage] = useState(false);

  const {
    values,
    errors,
    setFieldValue,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: INITIAL_STATE,
    // validationSchema: ,
    onSubmit: (values,action) => {
      onSubmitHandle();
      action.resetForm()
    },
  });

  const postData = async () => {
    try {
      const request = await axios.post(POST_API, {
        first_name: values.firstName,
        last_name: values.lastName,
        mobile_number: values.number,
        email_address: values.email,
        job_id: 443,
        has_licence: checkValue,
      });
       message = request.data.message;
toast(message)       
    } catch (err) {
       message = err.response.data.message; 
       toast(message)
    }
  };

  const onSubmitHandle = () => {
    postData();
  };

  function radioCheckHandler(e) {
    setCheckValue(e.target.value);
  }

  return (
    <section className="detail-form-container">
      <div className="detailform-input">
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <Form.Control
          type="text"
          placeholder="Email Address"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Form.Control
          type="text"
          placeholder="Phone Number"
          name="number"
          value={values.number}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>

      <div className="det-form-buttons">
        <div className="det-form-radios">
          <p>det-formbutton-submit</p>
          <input
            type="radio"
            name="check"
            value="1"
            onChange={radioCheckHandler}
          />{" "}
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            name="check"
            value="0"
            onChange={radioCheckHandler}
          />
          <label htmlFor="">No</label>
        </div>
        <div className="det-formbutton-submit">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default DetailForm;
