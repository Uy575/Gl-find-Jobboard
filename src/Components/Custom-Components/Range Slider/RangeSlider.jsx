import React, { useState } from "react";
import Slider from "rc-slider";
// import '../../assets/index.less';

const RangeSlider = () => {
  const [milesRange, setMilesRange] = useState(1);

  const handleChnage = (e) => {
    setMilesRange(e);
  };

  console.log(milesRange);

  return (
    <>
      <div className="mileRangeHeading">
        <span>Jobs within </span> <span>{milesRange} miles away</span>{" "}
      </div>
      <div  style={{alignSelf:"center"}}>
        <Slider min={1} max={2000} defaultValue={3} onChange={handleChnage} />
      </div>
    </>
  );
};

export default RangeSlider;
