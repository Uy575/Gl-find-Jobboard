import React from "react";
import retail from "../../assets/icons/icon-retail.svg";
import coporate from "../../assets/icons/icon-corporate.svg";
import bar from "../../assets/icons/icon-barclub.svg";
import event from "../../assets/icons/icon-event.svg";
import mobile from "../../assets/icons/icon-mobile.svg";
import "./desired_venue.css";

const Desired_venue = () => {
  return (
    <div className="dv-container">
      <div className="dv-col">
        <div className="row">
          <h1 className="dv-heading">
            Work at Your <br />
            Desired Venues
          </h1>

          <div className="retail-box">
            <img src={retail} alt="" />
            <h2>Retail</h2>
          </div>

          <div className="corporate-box">
            <img src={coporate} alt="" />
            <h2>Corporate</h2>
          </div>

          <div className="bar-box">
            <img src={bar} alt="" />
            <h2>Bar/Club</h2>
          </div>

          <div className="event-box">
            <img src={event} alt="" />
            <h2>Event</h2>
          </div>

          <div className="mobile-box">
            <img src={mobile} alt="" />
            <h2>Mobile</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desired_venue;
