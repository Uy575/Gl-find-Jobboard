import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Retail from "../../../Assets/Icons/icon-retail.svg";
import Corporate from "../../../Assets/Icons/icon-corporate.svg";
import barClub from "../../../Assets/Icons/icon-barclub.svg";
import Event from "../../../Assets/Icons/icon-event.svg";
import MobileIco from "../../../Assets/Icons/icon-mobile.svg";
import { setMobile } from "../../../Redux/LocationAndJobTypeReducer";
import LocationAndJobTypeReducer from "../../../Redux/LocationAndJobTypeReducer";
import RangeSlider from "../../Custom-Components/Range Slider/RangeSlider";
import RcRange from "../Rc-range-slider/RcRange";
import {
  setJobFilter,
  setSearchStatus,
} from "../../../Redux/LocationAndJobTypeReducer";
import "./FilterJobForm.css";

function FilterJobForm() {
  const POST = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs`;

  // const [milesRange, setMilesRange] = useState(1);
  const [retails, setRetails] = useState("");
  const [corporate, setCorporates] = useState("");
  const [bar, setBars] = useState("");
  const [events, setEvents] = useState("");
  const [mobiles, setMobiles] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { salary, geoLocation, searchStatus, miles } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );

  let title = searchParams.get("title");
  let city = searchParams.get("city");
  let venue = searchParams.get("venue");
  let smin = Number(searchParams.get("salary-min"));
  let smax = Number(searchParams.get("salary-max"));
  let distance = Number(searchParams.get("distance"));
  let { lat, lng } = geoLocation;
  let venue_type = [retails, corporate, bar, events, mobiles];
  let min = Number(salary.min);
  let max = Number(salary.max);

  let checkedRetail = venue === "Retail" ? true : false;
  let checkedCorporate = venue === "Corporate" ? true : false;
  let checkedBar = venue === "Bar/Clubs" ? true : false;
  let checkedEvent = venue === "Event" ? true : false;
  let checkedMobile = venue === "Mobile" ? true : false;

  

  const resettingForm = (e) => {
    e.preventDefault();
    setSearchFlag(false);
    dispatch(setSearchStatus(searchFlag));
    navigate(
      `/jobs?title=&city=&venue=&sia-licence=&distance=${30}&salary-min=${min}&salary-max=${max}&lat=&lng`
    );
  };

  const applyFilter = async (e) => {
    e.preventDefault();
    setSearchFlag(true);
    navigate(
      `/jobs?title=${title}&city=${city}&venue=${venue_type}&sia-licence=&distance=${miles}&salary-min=${min}&salary-max=${max}&lat=${lat}&lng=${lng}`
    );
    console.log(venue_type)
    const request = await axios.post(POST, {
      title: `${title}`,
      location: `${city}`,
      distance: distance,
      // salary_range: [min, max],
      venue_type: venue_type,
      latitude: lat,
      langitude: lng,
    });
    const response = request.data.data.data;
    console.log("usamajustnow",response);

    dispatch(setSearchStatus(searchFlag));
    dispatch(setJobFilter(response));
  };

  return (
    <form className="filterForm">
      <h5>FILTER YOUR SEARCH</h5>
      <RangeSlider />
      <br />
      <hr className="hr" />
      <span className="payRangeHeading">Pay range</span>
      <br />
      <RcRange />

      <br />

      <hr className="hr" />
      <div className="venue">
        <span>Venue</span>
        <div>
          <input
            value="Retail"
            type="checkbox"
            defaultChecked={checkedRetail}
            onChange={(e) => {
              console.log(e);
              if (e.target.checked || venue === "Retail") {
                setRetails(e.target.value);
              } else {
                setRetails("");
              }
            }}
          />{" "}
          <img src={Retail} alt="Retail" height="20px" /> <span> Retail </span>
        </div>
        <div>
          <input
            defaultChecked={checkedCorporate}
            type="checkbox"
            value="Corporate"
            onChange={(e) => {
              if (e.target.checked || venue === "Corporate") {
                setCorporates(e.target.value);
              } else {
                setCorporates("");
              }
            }}
          />{" "}
          <img src={Corporate} alt="Corporate" height="20px" />{" "}
          <span> Corporate </span>
        </div>
        <div>
          <input
            defaultChecked={checkedBar}
            type="checkbox"
            value="Bar/Club"
            onChange={(e) => {
              if (e.target.checked || venue === "Bar/Club") {
                setBars(e.target.value);
              } else {
                setBars("");
              }
            }}
          />{" "}
          <img src={barClub} alt="Bar/Club" height="20px" />{" "}
          <span> Bar/club </span>
        </div>
        <div>
          <input
            defaultChecked={checkedEvent}
            type="checkbox"
            value="Event"
            onChange={(e) => {
              if (e.target.checked) {
                setEvents(e.target.value);
              } else {
                setEvents("");
              }
            }}
          />{" "}
          <img src={Event} alt="Event" height="20px" /> <span> Event </span>
        </div>
        <div>
          <input
            defaultChecked={checkedMobile}
            type="checkbox"
            value="Mobile"
            onChange={(e) => {
              if (e.target.checked) {
                setMobiles(e.target.value);
              } else {
                setMobiles("");
              }
            }}
          />{" "}
          <img src={MobileIco} alt="Mobile" height="20px" />{" "}
          <span> Mobile </span>
        </div>
      </div>
      <hr className="hr" />
      <div className="buttonDiv">
        <input
          className="resetFilter"
          type="submit"
          value="Reset Filter"
          onClick={resettingForm}
        />
        <input
          className="applyFilter"
          type="button"
          value="Apply Filter"
          onClick={applyFilter}
        />
      </div>
    </form>
  );
}

export default FilterJobForm;
