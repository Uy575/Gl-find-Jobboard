import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
// import '../../assets/index.less';
import { setMiles } from "../../../Redux/LocationAndJobTypeReducer";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const RangeSlider = () => {

  
  const [milesRange, setMilesRange] = useState(30);
  const dispatch = useDispatch()

   const [searchParams,setSearchParams] = useSearchParams();

  const handleChnage = (e) => {
    setMilesRange(e);
  };

  useEffect(()=>{
    dispatch(setMiles(milesRange))
  },[milesRange])

  let distance = searchParams.get("distance");
  return (
    <>
      <div className="mileRangeHeading">
        <span>Jobs within </span> <span>{distance} miles away</span>{" "}
      </div>
      <div  style={{alignSelf:"center"}}>
        <Slider min={1} max={250} defaultValue={distance} onChange={handleChnage}/>
      </div>
    </>
  );
};

export default RangeSlider;
