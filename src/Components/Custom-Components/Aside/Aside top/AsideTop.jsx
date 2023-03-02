import React from "react";
import flag from "../../../../Assets/Job-Board-Assets/Images/uk-flag.svg";
import arrow from "../../../../Assets/Icons/arrow-right.svg";
import apple from "../../../../Assets/Job-Board-Assets/Logos/android-logo.webp";
import google from "../../../../Assets/Job-Board-Assets/Logos/google-play-logo.webp";
import './asidetop.css'
const AsideTop = ({classname , btnid , asidetext,btntext , formsec ,downloadh}) => {
  return (
    <div className={classname}>
      <div className={asidetext}>
        <h4>
          Apply on the go <br /> with the GuardPass App
        </h4>
        <p>
          Download the app to start applying for security jobs in your area and
          get working!
        </p>
      </div>

      <div className="jb-aside-top-end">
        <form action="#" className="jb-aside-form">
          <div className={formsec}>
            <span id="flag">
              <img src={flag} alt="" />
            </span>
            <input type="text" placeholder="Enter phone #" />
          </div>
          <button id={btnid}>
            {btntext === "Send link" ? <h4>Send link</h4> : <img src={arrow} alt="" height="16px" /> }
           
          </button>
        </form>
      </div>
      <h6 className={downloadh}>Download From </h6>

      <div className="google">
        <img src={apple} alt="" />
      </div>

      <div className="apple">
        <img src={google} alt="" />
      </div>
    </div>
  );
};

export default AsideTop;
