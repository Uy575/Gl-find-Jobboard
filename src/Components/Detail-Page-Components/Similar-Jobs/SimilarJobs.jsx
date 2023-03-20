import React from "react";
import SimilarJobList from "./Similar-Job-List/SimilarJobList";
import "./similarjob.css";
import { Link } from "react-router-dom";
const SimilarJobs = ({similarJob,id}) => {
  return (
    <section >
      <div className="sj-text">
        <h4>Similar Jobs</h4>
        <Link to='/jobs?title=&city=&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng`'> View all </Link>
      </div>
      <SimilarJobList similarJob={similarJob} id={id}  />
      
          </section>
  );
};

export default SimilarJobs;
