import React, { useEffect, useState } from "react";
import Retail from "../../../Assets/Icons/icon-retail.svg";
import Corporate from "../../../Assets/Icons/icon-corporate.svg";
import barClub from "../../../Assets/Icons/icon-barclub.svg";
import Event from "../../../Assets/Icons/icon-event.svg";
import { setMobile } from "../../../Redux/LocationAndJobTypeReducer";
import { useSearchParams } from "react-router-dom";
import LocationAndJobTypeReducer from "../../../Redux/LocationAndJobTypeReducer";
import MobileIco from "../../../Assets/Icons/icon-mobile.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import RcRange from "../Rc-range-slider/RcRange";
import "./FilterJobForm.css";
import RangeSlider from "../../Custom-Components/Range Slider/RangeSlider";
import axios from "axios";



function FilterJobForm() {
  const [milesRange, setMilesRange] = useState(1);
  const [retails, setRetails] = useState("");
  const [corporate, setCorporates] = useState(" ");
  const [bar, setBars] = useState("");
  const [events, setEvents] = useState("");
  const [mobiles, setMobiles] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { salary , geoLocation} = useSelector((state) => state.LocationAndJobTypeReducer);

  let title = searchParams.get("title");
  let city = searchParams.get("location");
  let venue = searchParams.get("venue");

  let { lat, lng } = geoLocation;
  console.log(lat, lng);

  lat = parseFloat(lat)

  const POST = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs
  `
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  



  const resettingForm = (e) => {
    e.preventDefault();
    window.location.reload(true);
  };

  
  const applyFilter = async (e) => {
    e.preventDefault();
    dispatch(setMobile({ retails, bar, corporate, events, mobiles }));
    navigate(
      `/jobs?title=${title}&city=${city}&venue=${`${retails},${corporate},${bar},${events},${mobiles}`}&sia-licence=&salary-min=${
        salary.min
      }&salary-max=${salary.max}&lat=&lng`
      );
  const request =await axios.post(POST,[{
    title: `${title}`,
location: `${city}`,
distance: 34,
salary_range: [salary.min, salary.max],
venue_type: `${venue}`,
latitude: `${lat}` ,
longitude: `${lng}`,
  }])  
  console.log(request)
  
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
            onChange={(e) => {
              if (e.target.checked) {
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
            type="checkbox"
            value="Corporate"
            onChange={(e) => {
              if (e.target.checked) {
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
            type="checkbox"
            value="Bar/Clubs"
            onChange={(e) => {
              if (e.target.checked) {
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
