import React from "react";
import flag from "../../../Assets/Job-Board-Assets/Images/uk-flag.svg";
import arrow from "../../../Assets/Icons/arrow-right.svg";
import apple from "../../../Assets/Job-Board-Assets/Logos/android-logo.webp";
import google from "../../../Assets/Job-Board-Assets/Logos/google-play-logo.webp";
import "./asidejobboard.css";

const AsideJobBoard = () => {
  return (
    <aside className="jb-aside">
      <div className="jb-aside-top-section">
        <div className="jb-aside-top-text">
          <h4>
            Apply on the go <br /> with the GuardPass App
          </h4>
          <p>
            Download the app to start applying for security jobs in your area
            and get working!
          </p>
        </div>

        <div className="jb-aside-top-end">
          <form action="#">
            <div className="form-sec">
              <span id="flag">
                <img src={flag} alt="" />
              </span>
              <input type="text" placeholder="Enter phone #" />
            </div>
            <button id="jb-aside-top-btn">
              <img src={arrow} alt="" height="16px" />
            </button>
          </form>
        </div>
        <h6 className="jb-aside-download-h">Download From </h6>

        <div className="google">
          <img src={apple} alt="" />
        </div>

        <div className="apple">
          <img src={google} alt="" />
        </div>
      </div>

      <div className="jb-aside-bottom-section">
        <div className="bottom-text">
          <h4>Looking to hire?</h4>
          <p>
            See how we deliver better outcomes than traditional staffing
            agencies.
          </p>
        </div>

        <div className="jb-bottom-btn">
          <button>Post Job</button>
        </div>
      </div>
    </aside>
  );
};

export default AsideJobBoard;
