import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import cardIcon1 from "../../../Assets/Logo/event-security.webp";
import "./latest_sec.css";

const LatestSecurity = ({topProduct}) => {
  console.log("usama",topProduct)

  return (
          <div className="card w-100">
            <div className="card-li1">
              <div className="card-li1-headings">
                <h3>{`${topProduct.title.length}` > 17 ? `${topProduct.title.slice(0,13)}....` :`${topProduct.title}`}</h3>
                <h6>{`${topProduct.name.length}` > 13 ? `${topProduct.name.slice(0,13)}....` :`${topProduct.name}`}</h6>
                <span>{topProduct.city}</span>
              </div>
              <div className="card-li1-icon">
                <img src={topProduct.logo_url} height="44px" alt="" />
              </div>
            </div>

            <hr />
            {/* card li 2 */}

            <div className="card-li2">
              <span className="card-li2-h">
                <sup> Paid Fortnightly </sup>
               {topProduct.salary_type  === 'Fixed Rate'? <span> &#163;{topProduct.salary}</span> : <span> &#163;{topProduct.salary_min}-&#163;{topProduct.salary_max}</span>
                }
                <sub> /Per Hour</sub>
              </span>
            </div>

            <hr />

            {/* card li 3 */}

            <div className="card-li3">
              <Link to={`/jobs/detail/${topProduct.id}`}>Read more</Link>
            </div>
          </div>
     
  );
};

export default LatestSecurity;
