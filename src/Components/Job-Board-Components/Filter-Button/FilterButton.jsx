import React, { useState } from "react";
import FilterJob from "../Filter-Job/FilterJob";
import "./filterbutton.css";

const FilterButton = ({ fjob }) => {
  const [filterToggle, setFilterToggle] = useState(false);
  return (
    <>
      <button
        className="filter-button"
        onClick={() => setFilterToggle(!filterToggle)}
      >
        Filter jobs
      </button>
      {filterToggle ? 
      <div className="fj-toggle"><FilterJob/></div>
    :''}
      </>
  );
};

export default FilterButton;
