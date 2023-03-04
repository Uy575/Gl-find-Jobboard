import React from "react";
import london from "../../../Assets/Images/london-img.jpg";
import machester from "../../../Assets/Images/machester-img.jpg";
import birmingham from "../../../Assets/Images/birmingham-img.jpg";
import leeds from "../../../Assets/Images/leeds-img.jpg";
import bristol from "../../../Assets/Images/bristol-img.jpg";
import cardiff from "../../../Assets/Images/cardiff-img.jpg";
import "./location.css";



const Location = () => {
  return (
    <div className="lct-container">
      <h1 className="lct-heading">Security Jobs in Over 85 UK Locations</h1>
      <div className="lct-col">
        <div className="lct-row">
          {/* box1 */}
          <div className="img-box1">
            <img src={london} alt="" className="london-img" />
            <div className="img-box1-headings">
              <h1>LONDON</h1>
              <h3>Find security jobs in London</h3>
            </div>
          </div>

          {/* box2 */}

          <div className="img-box2">
            <img src={machester} alt="" className="machester-img" />
            <div className="img-box2-headings">
              <h1>MACHESTER</h1>
              <h3>Find security jobs in Machester</h3>
            </div>
          </div>

          {/* box3 */}
          <div className="img-box3">
            <img src={birmingham} alt="" className="birmingham-img" />
            <div className="img-box3-headings">
              <h1>BIRMINGHAM</h1>
              <h3>Find security jobs in Birmingham</h3>
            </div>
          </div>

          {/* box4 */}
          <div className="img-box4">
            <img src={leeds} alt="" className="leeds-img" />
            <div className="img-box4-headings">
              <h1>LEEDS</h1>
              <h3>Find security jobs in Leeds</h3>
            </div>
          </div>

          {/* box5 */}
          <div className="img-box5">
            <img src={bristol} alt="" className="bristol-img" />
            <div className="img-box5-headings">
              <h1>BRISTOL</h1>
              <h3>Find security jobs in Bristol</h3>
            </div>
          </div>

          {/* box6 */}

          <div className="img-box6">
            <img src={cardiff} alt="" className="cardiff-img" />
            <div className="img-box6-headings">
              <h1>CARDIFF</h1>
              <h3>Find security jobs in Cardiff</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
