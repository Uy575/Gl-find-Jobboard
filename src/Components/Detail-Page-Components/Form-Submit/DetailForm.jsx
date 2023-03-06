import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from "react";
import "./detailform.css";
import axios from "axios";
import { applyForJobSchema } from "../../../Schemas/ApplyForJobFormYup";

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
    onSubmit: (values, action) => {
      onSubmitHandle();
      action.resetForm();
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
      toast.success(message);
    } catch (err) {
      message = err.response.data.message;
      toast.error(message);
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
        {errors.firstName && touched.firstName? <p style={{color:'red'}}> {errors.firstName} </p>:null}
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
            {errors.lastName && touched.lastName? <p style={{color:'red'}}> {errors.lastName} </p>:null}
        <Form.Control
          type="text"
          placeholder="Email Address"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
           {errors.email && touched.email? <p style={{color:'red'}}> {errors.email} </p>:null}
        <Form.Control
          type="number"
          placeholder="Phone Number"
          name="number"
          value={values.number}
          onBlur={handleBlur}
          onChange={handleChange}
        />
           {errors.number && touched.number? <p style={{color:'red'}}> {errors.number} </p>:null}
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
