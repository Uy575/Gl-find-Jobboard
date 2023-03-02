import React from "react";
import Form from "../Find-Job-Form/Form";
import play from "../../../Assets/Icons/play.svg";
import "./FindJob.css";
import joblander from "../../../Assets/Images/lander-career.png";
function FindJob() {
  return (
    <div className="mainContainer">
      <div className="content">
        <span className="second-section-heading">
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
        <h3>The UK’s #1 Security Job Board</h3>
        <p>
          Over 2,000 businesses come here to hire qualified security talent!
        </p>
      </div>
      <div className="imagesDiv">
        <img className="playImage" src={play} alt="play video" />
        <img src={joblander} alt="job lander" />
      </div>
    </div>
  );
}

export default FindJob;
