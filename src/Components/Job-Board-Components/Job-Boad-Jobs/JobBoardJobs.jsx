import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import JobList from "./Jobs-List/JobList";
import loader from "../../Custom-Components/Loader/loader.svg";
import { FetchJobs, setStatuses } from "../../../Redux/JobReducer";
import { useSearchParams } from "react-router-dom";
import "./jobboardjob.css";

const JobBoardJobs = ({ api }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let title = searchParams.get("title");
  let venue = searchParams.get("venue");
  let city = searchParams.get("location");
  let salarymin = searchParams.get("salary-min");
  let salarymax = searchParams.get("salary-max");
  console.log(city);
  const statusState = useSelector((state) => state.JobReducer);
  const { jobFilter, geoLocation } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );
  const { retails, corporate } = jobFilter;
  const { lat, lng } = geoLocation;

  const FETCH_JOBS_API = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs?title=${title}&city=${city}&venue=${venue}&sia-licence=&salary-min=&salary-max=&latitude=${lat}&lng=${lng}`;

  const c = api ? api : FETCH_JOBS_API;

  console.log(city);
  const { STATUSES } = statusState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchJobs(c));
  }, [venue, salarymax, salarymin, city]);

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
