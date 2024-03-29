import React from "react";
import logo from "../../../Assets/Logo/get-licensed-logo-white.png";
import darklogo from "../../../Assets/Logo/getworking-dark-logo.svg";
import protectedlogo from "../../../Assets/Logo/protected-graphic-logo.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft-container container">
        <div className="ft-row">
          <div className="ft-col1">
            <ul className="ft-ul ul-a">
              <li>
                <img src={logo} alt="" className="ft-logo" />
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/about">About Us</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/licence/get-sia-licence">SIA Licence</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/trainee/search/courses">Make a Booking</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/careers">Careers</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/faq">FAQs</a>
              </li>
              <li>
                <a href="https://getlicensed.freshdesk.com/support/home">Support</a>
              </li>
            </ul>
          </div>

          <div className="ft-col2">
            <ul className="ft-ul ul-a">
              <li>
                <strong>Security Guard Jobs</strong>
              </li>
              <li>
                <a href="jobs?title=Security&city=London&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng=">Security Guard Jobs in London</a>
              </li>
              <li>
                <a href="jobs?title=Security&city=Birmingham&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng=">Security Guard Jobs in Birmingham</a>
              </li>
              <li>
                <a href="jobs?title=Security&city=Manchester&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng=">Security Guard Jobs in Manchester</a>
              </li>
              <li>
                <a href="jobs?title=Security&city=Leeds&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng=">Security Guard Jobs in Leeds</a>
              </li>
              <li>
                <a href="jobs?title=Security&city=Cardiff&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng=">Security Guard Jobs in Cardiff</a>
              </li>
              <li>
                <a href="jobs?title=Security&city=Bristol&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng=">Security Guard Jobs in Bristol</a>
              </li>
            </ul>
          </div>

          <div className="ft-col3">
            <ul className="ft-ul ul-a">
              <li>
                <strong>SIA Licence Jobs</strong>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=&distance=30&sia-licence=CCTV&salary-min=9&salary-max=50&lat=&lng=&page=1">CCTV Jobs</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=&distance=30&sia-licence=Door%20Supervisor&salary-min=9&salary-max=50&lat=&lng=&page=1">Door Supervisor Jobs</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=&distance=30&sia-licence=Security%20Guard&salary-min=9&salary-max=50&lat=&lng=&page=1">Security Guard Jobs</a>
              </li>
            </ul>
          </div>

          <div className="ft-col4">
            <ul className="ft-ul ul-a">
              <li>
                <strong>By Job Type</strong>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=Event&distance=30&sia-licence=&salary-min=9&salary-max=50&lat=&lng=&page=1">Event Security Jobs</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=Corporate&distance=30&sia-licence=&salary-min=9&salary-max=50&lat=&lng=&page=1">Corporate Security Officer Jobs</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=Retail&distance=30&sia-licence=&salary-min=9&salary-max=50&lat=&lng=&page=1">Retail Security Guard Jobs</a>
              </li>
              <li>
                <a href="https://www.get-licensed.co.uk/jobs/search?title=&city=&venue=Bar/Club&distance=30&sia-licence=&salary-min=9&salary-max=50&lat=&lng=&page=1">Nightclub Security Jobs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerHr">
          <hr />
        </div>
        <div className="ft-logo-row">
          <img src={protectedlogo} alt="" />
          <img src={darklogo} alt="" />
        </div>
      </div>
      <div className="end-ft-container">
        <div className="end-ft-row container">
          <p>Copyright 2022 | Get Licensed Limited | Company No. 07154333</p>
          <p> Terms of service | Privacy Policy | Quality Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
