import React, { useState } from "react";
import Slider from "rc-slider";
// import '../../assets/index.less';
import { setMiles } from "../../../Redux/LocationAndJobTypeReducer";
import { useDispatch } from "react-redux";

const RangeSlider = () => {
  const [milesRange, setMilesRange] = useState(1);
  const dispatch = useDispatch()

  const handleChnage = (e) => {
    setMilesRange(e);
  };

function  handleData(){
  if(milesRange > 0){
    dispatch(setMiles(milesRange))
}
}
  
  return (
    <>
      <div className="mileRangeHeading">
        <span>Jobs within </span> <span>{milesRange} miles away</span>{" "}
      </div>
      <div  style={{alignSelf:"center"}}>
        <Slider min={1} max={2000} defaultValue={3} onChange={handleChnage} onFocus={handleData}  />
      </div>
    </>
  );
};

export default RangeSlider;
