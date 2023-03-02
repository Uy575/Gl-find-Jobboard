import React from "react";
import logo from "../../../Assets/Logo/get-licensed-logo-white.png";
import darklogo from "../../../Assets/Logo/getworking-dark-logo.svg";
import protectedlogo from "../../../Assets/Logo/protected-graphic-logo.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft-container">
        <div className="ft-row">
          <div className="ft-col1">
            <ul className="ft-ul">
              <li>
                <img src={logo} alt="" className="ft-logo" />
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">SIA Licence</a>
              </li>
              <li>
                <a href="">Make a Booking</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </div>

          <div className="ft-col2">
            <ul className="ft-ul">
              <li>
                <strong>Security Guard Jobs</strong>
              </li>
              <li>
                <a href="">Security Guard Jobs in London</a>
              </li>
              <li>
                <a href="">Security Guard Jobs in Birmingham</a>
              </li>
              <li>
                <a href="">Security Guard Jobs in Manchester</a>
              </li>
              <li>
                <a href="">Security Guard Jobs in Leeds</a>
              </li>
              <li>
                <a href="">Security Guard Jobs in Cardiff</a>
              </li>
              <li>
                <a href="">Security Guard Jobs in Bristol</a>
              </li>
            </ul>
          </div>

          <div className="ft-col3">
            <ul className="ft-ul">
              <li>
                <strong>SIA Licence Jobs</strong>
              </li>
              <li>
                <a href="">CCTV Jobs</a>
              </li>
              <li>
                <a href="">Door Supervisor Jobs</a>
              </li>
              <li>
                <a href="">Security Guard Jobs</a>
              </li>
            </ul>
          </div>

          <div className="ft-col4">
            <ul className="ft-ul">
              <li>
                <strong>By Job Type</strong>
              </li>
              <li>
                <a href="">Event Security Jobs</a>
              </li>
              <li>
                <a href="">Corporate Security Officer Jobs</a>
              </li>
              <li>
                <a href="">Retail Security Guard Jobs</a>
              </li>
              <li>
                <a href="">Nightclub Security Jobs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hr">
          <hr />
        </div>
        <div className="ft-logo-row">
          <img src={protectedlogo} alt="" />
          <img src={darklogo} alt="" />
        </div>
      </div>
      <div className="end-ft-container">
        <div className="end-ft-row">
          <p>Copyright 2022 | Get Licensed Limited | Company No. 07154333</p>
          <p> Terms of service | Privacy Policy | Quality Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
