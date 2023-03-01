import React, { useState } from "react";
import "./FilterJobForm.css";
import Retail from "../../../Assets/Icons/icon-retail.svg";
import Corporate from "../../../Assets/Icons/icon-corporate.svg";
import barClub from "../../../Assets/Icons/icon-barclub.svg";
import Event from "../../../Assets/Icons/icon-event.svg";
import Mobile from "../../../Assets/Icons/icon-mobile.svg";
function FilterJobForm() {
  const [checkedValue, setCheckedValue] = useState(true);
  const [milesRange, setMilesRange] = useState(1);
  const [payRange, setPayRange] = useState(9);

  const resettingForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="filterForm">
      <h5>FILTER YOUR SEARCH</h5>
      <div className="mileRangeHeading">
        <span>Jobs within </span> <span>{milesRange} miles away</span>{" "}
      </div>
      <input
        type="range"
        min="1"
        max="250"
        defaultValue="1"
        onChange={(e) => {
          setMilesRange(e.target.value);
        }}
      />{" "}
      <br />
      <hr />
      <span className="payRangeHeading">Pay range</span>
      <br />
      <input
        type="range"
        min="9"
        max="50"
        defaultValue="9"
        onChange={(e) => {
          setPayRange(e.target.value);
        }}
      />{" "}
      <br />
      <div className="priceRangeDiv">
        {" "}
        <span> &pound;{payRange}.00 </span> <span> &pound;50.00 </span>
      </div>
      <hr />
      <div className="venue">
        <span>Venue</span>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              setCheckedValue(!checkedValue);
              console.log(checkedValue);
            }}
          />{" "}
          <img src={Retail} alt="Retail" height="20px" /> <span> Retail </span>
        </div>
        <div>
          <input type="checkbox" />{" "}
          <img src={Corporate} alt="Corporate" height="20px" />{" "}
          <span> Corporate </span>
        </div>
        <div>
          <input type="checkbox" />{" "}
          <img src={barClub} alt="Bar/Club" height="20px" />{" "}
          <span> Bar/club </span>
        </div>
        <div>
          <input type="checkbox" />{" "}
          <img src={Event} alt="Event" height="20px" /> <span> Event </span>
        </div>
        <div>
          <input type="checkbox" />{" "}
          <img src={Mobile} alt="Mobile" height="20px" /> <span> Mobile </span>
        </div>
      </div>
      <hr />
      <div className="buttonDiv">
        <input
          className="resetFilter"
          type="submit"
          value="Reset Filter"
          onClick={resettingForm}
        />
        <input className="applyFilter" type="submit" value="Apply Filter" />
      </div>
    </form>
  );
}

export default FilterJobForm;
