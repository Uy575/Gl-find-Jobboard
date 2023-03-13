import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from "react";
import "./detailform.css";
import axios from "axios";
import GetSiaLicense from "../Get-Sia-License/GetSiaLicense";
import { applyForJobSchema } from "../../../Schemas/ApplyForJobFormYup";

const POST_API = `https://staging.get-licensed.co.uk/guardpass/api/public/sms/job/link`;
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  check:"",
};

let message;

const DetailForm = () => {

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
    validationSchema: applyForJobSchema,
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
        has_licence: values.check,
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
        {errors.firstName && touched.firstName ? (
          <p style={{ color: "red" }}> {errors.firstName} </p>
        ) : null}
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.lastName && touched.lastName ? (
          <p style={{ color: "red" }}> {errors.lastName} </p>
        ) : null}
        <Form.Control
          type="text"
          placeholder="Email Address"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email ? (
          <p style={{ color: "red" }}> {errors.email} </p>
        ) : null}
        <Form.Control
          type="number"
          placeholder="Phone Number"
          name="number"
          value={values.number}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.number && touched.number ? (
          <p style={{ color: "red" }}> {errors.number} </p>
        ) : null}
      </div>

      <div className="det-form-buttons">
        <div className="det-form-radios">
          <p style={{paddingLeft:'0.5rem'}}>Do you have an sia license?</p>
          <input
            type="radio"
            name="check"
            value="1"
            onBlur={handleBlur}
            onChange = {handleChange}
          />{" "}
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            name="check"
            value="0"
            onBlur={handleBlur}
            onChange = {handleChange}
          />
          <label htmlFor="">No</label> <br/>
        </div>
     
        <div className={values.check==="0"?"det-formbutton-disabled":"det-formbutton-submit"}>
          <button type="button" onClick={ values.check === "1"?handleSubmit:''}>
            Submit
          </button>
        </div> 
      </div>
        {errors.check && touched.check? (
          <p style={{ color: "red" , marginLeft:'1rem' }}> {errors.check} </p>
        ) : null}
      {values.check === "0" ? <GetSiaLicense /> : ""}

      <ToastContainer />
    </section>
  );
};

export default DetailForm;
