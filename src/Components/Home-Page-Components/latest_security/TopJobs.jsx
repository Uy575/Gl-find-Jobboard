import React from "react";
import { addingTopProducts } from "../../../Redux/TopJobReduer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCarousals from "../../Custom-Components/React Carousal/ReactCarousals";

function TopJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addingTopProducts(
        "https://staging.get-licensed.co.uk/guardpass/api/public/top/jobs"
      )
    );
  }, []);

  return (
    <>
      <div className="ls_container">
        <h1 className="main-heading">Latest Security Vacancies</h1>
      </div>

      <ReactCarousals />

      <div className="ls_container" style={{padding:'4rem'}}>
        <a href="/jobs" className="ls_button"  >Explore More Jobs</a>
      </div>
    </>
  );
}

export default TopJobs;
