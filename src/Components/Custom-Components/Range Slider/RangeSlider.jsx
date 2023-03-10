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

   const city = searchParams.get("city");

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
        <span>Jobs within </span> <span>{milesRange} miles away</span>{" "}
      </div>
      <div  style={{alignSelf:"center"}}>
        <Slider min={9} max={250} defaultValue={distance} onChange={handleChnage} disabled={city === "" ?true:false}/>
      </div>
    </>
  );
};

export default RangeSlider;
