import React from "react";
import { addingTopProducts } from "../../../Redux/TopJobReduer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCarousals from "../../Custom-Components/React Carousal/ReactCarousals";
import "./latest_sec.css";
import LatestSecurity from "./LatestSecurity";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <section className="topJobsSection">
        <div className="container">
          <div className="ls_container">
            <h1 className="main-heading">Latest Security Vacancies</h1>
          </div>

          <div className="row">
            <div className="col-md-12">
              {/* <LatestSecurity/> */}
              <ReactCarousals />
            </div>
          </div>
          <div className="ls_container" style={{ padding: "4rem" }}>
            <Link
              to="/jobs?title=&city=&venue=Mobile&sia-licence=&salary-min=&salary-max=&lat=&lng="
              className="ls_button"
              id="explore-btn"
            >
              Explore More Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopJobs;
