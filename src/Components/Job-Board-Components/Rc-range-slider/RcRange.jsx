import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./rcrange.css";
import { setSalary } from "../../../Redux/LocationAndJobTypeReducer";
import { useSearchParams } from "react-router-dom";
const RcRange = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [min, setMin] = useState(9);
  const [max, setMax] = useState(50);
  const [searchParams,setSearchParams] = useSearchParams()

  const dispatch = useDispatch();
  const handleChange = (value) => {
    setRangeValue({ value });
    console.log(rangeValue)
    setMin(value[0]);
    setMax(value[1]);
  };
  
console.log(min,max)
useEffect(()=>{
        dispatch(setSalary({ min, max }));   
},[min,max])

 const salaryMin = searchParams.get("salary-min");
 const salaryMax = searchParams.get("salary-max");

  return (
    <>
      <div className="rc-rng">
        <Slider
          range
          allowCross={false}
          defaultValue={[{salaryMin}, {salaryMax}]}
          min={9}
          max={50}
          onChange={handleChange}
        />

        <div className="priceRangeDiv">
          <span> &pound;{salaryMin} </span> <span> &pound;{salaryMax} </span>
        </div>
      </div>
    </>

  );
};
export default RcRange;
