import React from "react";
import SimilarJobList from "./Similar-Job-List/SimilarJobList";
import "./similarjob.css";
const SimilarJobs = ({similarJob,id}) => {
  return (
    <section >
      <div className="sj-text">
        <h4>Similar Jobs</h4>
        <a href="">View all</a>
      </div>
      <SimilarJobList similarJob={similarJob} id={id}  />
      
          </section>
  );
};

export default SimilarJobs;
