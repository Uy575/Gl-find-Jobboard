import React from "react";
import cardIcon1 from "../../../Assets/Logo/event-security.webp";
import "./latest_sec.css";

const LatestSecurity = () => {
  return (
    <div className="ls_container">
      <h1 className="main-heading">Latest Security Vacancies</h1>

      <div className="col">
        <div className="row">
          <div className="card">
            <div className="card-li1">
              <div className="card-li1-headings">
                <h3>Event Security PCSSL03</h3>
                <h6>PRIDE CLASS SECURITY SOLUTIONS LTD</h6>
                <span>London, UK</span>
              </div>
              <div className="card-li1-icon">
                <img src={cardIcon1} alt="" />
              </div>
            </div>

            <hr />
            {/* card li 2 */}

            <div className="card-li2">
              <span className="card-li2-h">
                <sup> Paid Fortnightly </sup>
                <span>&#163;12</span>
                <sub> /Per Hour</sub>
              </span>
            </div>

            <hr />

            {/* card li 3 */}

            <div className="card-li3">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
      <button className="ls_button">Explore More Jobs</button>
    </div>
  );
};

export default LatestSecurity;
