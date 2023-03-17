import React, { useState } from "react";
import "./Form.css";
import "../../Job-Board-Components/Find-Job-Form/FindJobBoardForm.css";
import arrow from "../../../Assets/Icons/arrow-right.svg";
import TitleSuggestion from "../Title-Suggestion/TitleSuggestion";
import ReactPlace from "../../Custom-Components/ReactPlace/ReactPlace";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import locationIcon from "../../../Assets/Icons/LocationIcon.svg"

function Form({
  formFields,
  formCard,
  jobTitleInputField,
  formInputs,
  locationInputField,
  findJobButton,
  findJobArrow,
}) {
  const [address, setAddress] = useState("");
  const { salary , jobType, location, jobFilter ,miles } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );

  let {min ,max} = salary;
min = min === "undefined" ? 9 : 9;
max = max === "undefined" ? 50 : 50

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();    
    navigate(
      `/jobs?title=${jobType}&city=${location}&venue=&sia-licence=&distance=${miles}&salary-min=${Number(min)}&salary-max=${max}&lat=&lng=`
      );
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className={formFields}>
        <div className={formCard}>
          <div className={jobTitleInputField}>
            <TitleSuggestion formInputs={formInputs} />
          </div>
          <div className={locationInputField}>
            <span className="locationFieldIcon"> <img src={locationIcon} alt ='location icon'></img> </span>
            <h4>Enter Location</h4>
            <ReactPlace />
          </div>
        <div className="find-button">
          <button className={findJobButton} type="submit" value="Find Jobs" >Find Jobs  <img className={findJobArrow} src={arrow} alt="arrow" /></button>
        </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
