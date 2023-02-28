import React from "react";
import cardIcon1 from "../../assets/logos/event-security.webp";
import "./latest_sec.css";

const Latest_security = () => {
  return (
    <div className="ls_container">
      <h1 className="main-heading">Latest Security Vacancies</h1>

      <div className="col">
        <div className="row">
          <div className="card">
            <div className="card-li1">
              <div className="card-li1-headings">
                <h2>Event Security PCSSL03</h2>
                <h4>PRIDE CLASS SECURITY SOLUTIONS LTD</h4>
                <h3>London, UK</h3>
              </div>
              <div className="card-li1-icon">
                <img src={cardIcon1} alt="" />
              </div>
            </div>

            <hr />
            {/* card li 2 */}

            <div className="card-li2">
              <h2 className="card-li2-h">
                Paid Fortnightly <span>&#163;12</span> /Per Hour
              </h2>
            </div>

            <hr />

            {/* card li 3 */}

            <div className="card-li3">
              <a href="">Read more</a>
            </div>
          </div>
        </div>
      </div>
      <button className="ls_button">Explore More Jobs</button>
    </div>
  );
};

export default Latest_security;
