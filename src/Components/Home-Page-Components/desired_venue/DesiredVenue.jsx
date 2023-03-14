import React from "react";
import retail from "../../../Assets/Icons/icon-retail.svg";
import coporate from "../../../Assets/Icons/icon-corporate.svg";
import bar from "../../../Assets/Icons/icon-barclub.svg";
import event from "../../../Assets/Icons/icon-event.svg";
import mobile from "../../../Assets/Icons/icon-mobile.svg";
import "./desired_venue.css";

const DesiredVenue = () => {
  return (
    <section className="dv-container">
      <div className="dv-col container">
        <div className="dv-row">
          <div className="dv-heading">
            <h1 className="dv-heading">
              Work at Your <br />
              Desired Venues
            </h1>
          </div>

          <div className="dv-li">
            <ul>
              <li>
                <a href="/jobs?title=&city=&venue=Retail&sia-licence=&salary-min=&salary-max=&lat=&lng=">
                  <div className="retail-box">
                    <img src={retail} alt="" />
                    <h4>Retail</h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="/jobs?title=&city=&venue=Coporate&sia-licence=&salary-min=&salary-max=&lat=&lng=">
                  <div className="corporate-box">
                    <img src={coporate} alt="" />
                    <h2>Corporate</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="/jobs?title=&city=&venue=Bar/Clubs&sia-licence=&salary-min=&salary-max=&lat=&lng=">
                  <div className="bar-box">
                    <img src={bar} alt="" />
                    <h2>Bar/Club</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="/jobs?title=&city=&venue=Event&sia-licence=&salary-min=&salary-max=&lat=&lng=">
                  <div className="event-box">
                    <img src={event} alt="" />
                    <h2>Event</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="/jobs?title=&city=&venue=Mobile&sia-licence=&salary-min=&salary-max=&lat=&lng=">
                  <div className="mobile-box">
                    <img src={mobile} alt="" />
                    <h2>Mobile</h2>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesiredVenue;
