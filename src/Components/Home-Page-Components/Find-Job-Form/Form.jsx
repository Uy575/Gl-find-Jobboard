import React, { useState } from "react";
import "./Form.css";
import "../../Job-Board-Components/Find-Job-Form/FindJobBoardForm.css";
import arrow from "../../../Assets/Icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import TitleSuggestion from "../Title-Suggestion/TitleSuggestion";
import ReactPlace from "../../Custom-Components/ReactPlace/ReactPlace";
import { useSelector } from "react-redux";


// import PlacesAutocomplete,{
//     geocodebyAddress,
//     getLating
// } from "react-places-autocomplete"

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
  const {jobType,location ,Retail ,Corporate ,Event ,Bar ,Mobile} = useSelector((state)=> state.LocationAndJobTypeReducer)
  const handleSelect = (value) => {};

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/jobs/title=${jobType}&city=${location}&venue=${Retail}&sia-licence=&lat=&lng`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={formFields}>
        <div className={formCard}>
          <div className={jobTitleInputField}>
            <TitleSuggestion formInputs={formInputs} />
          </div>
          <div className={locationInputField}>
            <h4>Enter Location</h4>
            <ReactPlace />
            {/* <input
              className={formInputs}
              placeholder="e.g London"
              type="text"
              name="name"
            /> */}
          </div>
        </div>
        <div>
          <input className={findJobButton} type="submit" value="Find Jobs" />{" "}
          <img className={findJobArrow} src={arrow} alt="arrow" />
        </div>
      </div>
    </form>
  );
}

export default Form;
