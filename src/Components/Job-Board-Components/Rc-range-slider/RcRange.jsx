import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./rcrange.css";
import { setSalary } from "../../../Redux/LocationAndJobTypeReducer";
const RcRange = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [min, setMin] = useState(9);
  const [max, setMax] = useState(50);

  const dispatch = useDispatch();
  const handleChange = (value) => {
    setRangeValue({ value });
    setMin(value[0]);
    setMax(value[1]);
  };
  
  function handleData(){
      if(min >=0 && max>=0){
        dispatch(setSalary({ min, max }));
      }

    }

  return (
    <>
      <div className="rc-rng">
        <Slider
          range
          allowCross={false}
          defaultValue={[9, 50]}
          min={1}
          max={50}
          onChange={handleChange}
          onFocus={handleData}
        />

        <div className="priceRangeDiv">
          <span> &pound;{min} </span> <span> &pound;{max} </span>
        </div>
      </div>
    </>

  );
};
export default RcRange;
