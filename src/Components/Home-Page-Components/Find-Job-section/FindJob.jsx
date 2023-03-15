import React, { useState } from "react";
import Form from "../Find-Job-Form/Form";
import play from "../../../Assets/Icons/play.svg";
import "./FindJob.css";
import joblander from "../../../Assets/Images/lander-career.png";

import ReactPlayerModal from "../React-Player/ReactPlayerModal";
function FindJob() {

  return (
    <section>
    <div className="main-container container d-flex">
      <div className="content">
        <span className="second-section-heading mb-2">
          Find a security job <strong>you love</strong>
        </span>
        <Form
          formFields="homeFormFields"
          formCard="homeFormCard"
          jobTitleInputField="homeJobTitleInputField"
          formInputs="homeFormInputs"
          locationInputField="homeLocationInputField"
          findJobButton="homeFindJobButton"
          findJobArrow="homeFindJobArrow"
        />
        <h3 id="fj-h3">The UK’s #1 Security Job Board</h3>
        <p id="fj-p">
          Over 2,000 businesses come here to hire qualified security talent!
        </p>
      </div>
      <div className="imagesDiv">

        <ReactPlayerModal/>
        <img src={joblander} id='man-img' alt="job lander" />
      </div>
    </div>
</section>
  );
}

export default FindJob;
