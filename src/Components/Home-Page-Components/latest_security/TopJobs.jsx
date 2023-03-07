import React from "react";
import TopJobList from "./TopJobList";
import { addingTopProducts } from "../../../Redux/TopJobReduer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.

    }
  };
  return(
     <>
     <div className="ls_container">
     <h1 className="main-heading">Latest Security Vacancies</h1>
     </div>
     
  <ReactCarousals topList = {<TopJobList />} />
     
  
     <div className="ls_container">
     <button className="ls_button">Explore More Jobs</button>
     </div>
     </>
  )
}

export default TopJobs;
