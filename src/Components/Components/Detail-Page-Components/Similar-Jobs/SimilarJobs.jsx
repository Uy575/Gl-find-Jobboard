import React from "react";
import coporate from "../../../Assets/Icons/icon-corporate.svg";
import toward from "../../../Assets/Detail-Page-Assets/Icons/ctrl-right.svg";
import "./similarjob.css";
const SimilarJobs = () => {
  return (
    <section className="sj-container">
      <div className="sj-text">
        <h4>Similar Jobs</h4>
        <a href="">View all</a>
      </div>

      <div className="sj-card">
        <h3>Test</h3>

        <div className="sj-location">
          <div className="sj-logo">
            <img src={coporate} alt="" />
          </div>

          <div className="sj-loc-text">
            <h4>HAHA LTD</h4>
            <p>London , Uk</p>
          </div>

          <span className="sj-toward">
            <img src={toward} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SimilarJobs;
