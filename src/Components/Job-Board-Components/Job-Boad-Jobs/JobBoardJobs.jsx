import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import JobList from "./Jobs-List/JobList";
import loader from "../../Custom-Components/Loader/loader.svg";
import { FetchJobs, setStatuses } from "../../../Redux/JobReducer";
import { useSearchParams } from "react-router-dom";
import "./jobboardjob.css";

const JobBoardJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let title = searchParams.get("title");
  let venue = searchParams.get("venue");
  let city = searchParams.get("location");
  let salarymin = searchParams.get("salary-min");
  let salarmax = searchParams.get("salary-max");

  const statusState = useSelector((state) => state.JobReducer);
  const { jobFilter, geoLocation } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );
  const { retails, corporate } = jobFilter;
  const { lat, lng } = geoLocation;
  console.log(lat, lng);

  const FETCH_JOBS_API = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs?title=${title}&city=${city}&venue=${venue}&sia-licence=&salary-min=${salarymin}&salary-max=${salarmax}&latitude=${lat}&lng=${lng}`;

  const { STATUSES } = statusState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchJobs(FETCH_JOBS_API));
  }, [venue, salarmax, salarymin]);

  return (
    <>
      {STATUSES === "loading" ? (
        <div
          className="loaderDiv"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={loader} alt="" />
        </div>
      ) : (
        <JobList />
      )}
    </>
  );
};

export default JobBoardJobs;
