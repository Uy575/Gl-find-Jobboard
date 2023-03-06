import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cardIcon1 from "../../../Assets/Logo/event-security.webp";
import "./latest_sec.css";

const LatestSecurity = ({topProduct}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
<div className="c">
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
    </div>
  );
};

export default LatestSecurity;
