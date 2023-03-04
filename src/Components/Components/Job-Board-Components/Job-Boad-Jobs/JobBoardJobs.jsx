import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import JobList from "./Jobs-List/JobList";
import { FetchJobs } from "../../../Redux/JobReducer";
import "./jobboardjob.css";

const JobBoardJobs = () => {
  const FETCH_JOBS_API = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchJobs(FETCH_JOBS_API));
  }, []);

  return (
    <>
      <JobList />
    </>
  );
};

export default JobBoardJobs;
