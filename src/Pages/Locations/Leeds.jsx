import React from 'react'
import Form from "../../Components/Home-Page-Components/Find-Job-Form/Form";
import Header from "../../Components/Home-Page-Components/Header/Header";
import FilterJob from "../../Components/Job-Board-Components/Filter-Job/FilterJob";
import AsideJobBoard from "../../Components/Job-Board-Components/Aside-Job-Board/AsideJobBoard";
import JobBoardJobs from "../../Components/Job-Board-Components/Job-Boad-Jobs/JobBoardJobs";
// import "./Jobs.css";
import FilterButton from "../../Components/Job-Board-Components/Filter-Button/FilterButton";
import { useEffect, useState } from "react";

const FETCH_JOBS_API = `https://staging.get-licensed.co.uk/guardpass/api/public/search/jobs?location=leeds`;

const Leeds = () => {
  return (
    <>
    <Header /> 
     {/* sending css classes as props in find job form   */}
     <Form
      formFields="jobBoardFormFields"
      formCard="jobBoardFormCard"
      jobTitleInputField="jobBoardJobTitleInputField"
      formInputs="jobBoardFormInputs"
      locationInputField="jobBoardLocationInputField"
      findJobButton="jobBoardFindJobButton"
      findJobArrow="jobBoardFindJobArrow"
    /> 
    <div className="jobBoardPageMainContainer">

     {/* {browserWidth <= `${500}px` ? <FilterButton fjob={<FilterJob />} />:<FilterJob show="true" />} */}
    <FilterJob />
      <JobBoardJobs  api={FETCH_JOBS_API} />
      {/* <CardJobBoard buttonTitle="View Job Details" classname="card-body" showform='false' /> */}
      <AsideJobBoard
        classname="jb-aside-top-section"
        btnid="jb-aside-top-btn"
        asidetext="jb-aside-top-text"
        formsec="jb-form-sec"
        downloadh="jb-aside-download-h"
      />
    </div>
</>
  )
}

export default Leeds
