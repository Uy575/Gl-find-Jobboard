import React, { useEffect } from "react";
import { useDispatch  ,useSelector} from "react-redux";
import JobList from "./Jobs-List/JobList";
import { FetchJobs ,setStatuses } from "../../../Redux/JobReducer";

import "./jobboardjob.css";

const JobBoardJobs = () => {
  const statusState = useSelector((state) => state.JobReducer);

  const {STATUSES} = statusState
  const FETCH_JOBS_API = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchJobs(FETCH_JOBS_API));
  }, []);

  return (
    <>
    {STATUSES === "loading" ?
  <h2>Loading..</h2>
  :   <JobList />}
   
    </>
  );
};

export default JobBoardJobs;
