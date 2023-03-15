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
    <section className="section-bg">
    <div className="lct-container container">
      <h1 className="lct-heading">Security Jobs in Over 85 UK Locations</h1>
      <div className="lct-col">
        <div className="lct-row ">
          {/* box1 */}
          <div className="col-12 col-md-4 col">
          <a href="/jobs/security-jobs-in-london">
            <div className="img-box1 ibox">
              <img src={london} alt="" className="london-img img-fluid" />
              <div className="img-box1-headings ibh">
                <h1>LONDON</h1>
                <h3>Find security jobs in London</h3>
              </div>
            </div>
          </a>
          </div>
          {/* box2 */}
          <div className="col-12 col-md-4 col">
          <a href="/jobs/security-jobs-in-machester">
            <div className="img-box2 ibox">
              <img src={machester} alt="" className="machester-img img-fluid" />
              <div className="img-box2-headings ibh">
                <h1>MACHESTER</h1>
                <h3>Find security jobs in Machester</h3>
              </div>
            </div>
          </a>
          </div>
          {/* box3 */}
          <div className="col-12 col-md-4 col">
          <a href="/jobs/security-jobs-in-birmingham">
            <div className="img-box3 ibox">
              <img src={birmingham} alt="" className="birmingham-img img-fluid" />
              <div className="img-box3-headings ibh">
                <h1>BIRMINGHAM</h1>
                <h3>Find security jobs in Birmingham</h3>
              </div>
            </div>
          </a>
          </div>
          {/* box4 */}
          <div className="col-12 col-md-4 col">
          <a href="/jobs/security-jobs-in-leeds">
            <div className="img-box4 ibox">
              <img src={leeds} alt="" className="leeds-img img-fluid" />
              <div className="img-box4-headings ibh">
                <h1>LEEDS</h1>
                <h3>Find security jobs in Leeds</h3>
              </div>
            </div>
          </a>
          </div>
          {/* box5 */}
          <div className="col-12 col-md-4 col">

          <a href="/jobs/security-jobs-in-bristol">
            <div className="img-box5 ibox">
              <img src={bristol} alt="" className="bristol-img img-fluid" />
              <div className="img-box5-headings ibh">
                <h1>BRISTOL</h1>
                <h3>Find security jobs in Bristol</h3>
              </div>
            </div>
          </a>
</div>
          {/* box6 */}
          <div className="col-12 col-md-4 col">

          <a href="/jobs/security-jobs-in-cardif">
            <div className="img-box6 ibox">
              <img src={cardiff} alt=""  className="cardiff-img img-fluid" />
              <div className="img-box6-headings ibh">
                <h1>CARDIFF</h1>
                <h3>Find security jobs in Cardiff</h3>
              </div>
            </div>
          </a>
</div>
        </div>
      </div>
    </div>
</section>
  );
};

export default Location;
