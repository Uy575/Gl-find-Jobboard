import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
// import '../../assets/index.less';
import { setMiles } from "../../../Redux/LocationAndJobTypeReducer";
import { useDispatch } from "react-redux";

const RangeSlider = () => {
  const [milesRange, setMilesRange] = useState(30);
  const dispatch = useDispatch()

  const handleChnage = (e) => {
    setMilesRange(e);
  };

  useEffect(()=>{
    dispatch(setMiles(milesRange))
  },[milesRange])


  return (
    <>
      <div className="mileRangeHeading">
        <span>Jobs within </span> <span>{milesRange} miles away</span>{" "}
      </div>
      <div  style={{alignSelf:"center"}}>
        <Slider min={1} max={250} defaultValue='30' onChange={handleChnage}/>
      </div>
    </>
  );
};

export default RangeSlider;
