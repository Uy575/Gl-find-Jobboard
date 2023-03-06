import React from "react";
import cardIcon1 from "../../../Assets/Logo/event-security.webp";

import "./latest_sec.css";

const LatestSecurity = ({topProduct}) => {
  return (

    <div className="ls_container">
      <div className="col">
        <div className="row">
          <div className="card">
            <div className="card-li1">
              <div className="card-li1-headings">
                <h3>{topProduct.title}</h3>
                <h6>{topProduct.name}</h6>
                <span>{topProduct.city}</span>
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
                <span>&#163;{topProduct.salary}</span>
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
     
    </div>
  );
};

export default LatestSecurity;
