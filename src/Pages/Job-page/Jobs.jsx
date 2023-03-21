

import Form from "../../Components/Home-Page-Components/Find-Job-Form/Form";
import Header from "../../Components/Home-Page-Components/Header/Header";
import FilterJob from "../../Components/Job-Board-Components/Filter-Job/FilterJob";
import AsideJobBoard from "../../Components/Job-Board-Components/Aside-Job-Board/AsideJobBoard";
import JobBoardJobs from "../../Components/Job-Board-Components/Job-Boad-Jobs/JobBoardJobs";
import "./Jobs.css";
import FilterButton from "../../Components/Job-Board-Components/Filter-Button/FilterButton";
import { useEffect, useState } from "react";
import '../../Components/Job-Board-Components/Find-Job-Form/JobBoardHeader.css'


function Jobs() {
const [browserWidth , setBrowserWidth] = useState(window.outerWidth)

console.log(window.outerWidth)
  useEffect(()=>{
  setBrowserWidth(browserWidth)
  },[window.outerWidth])
 
  
  return (
    <>
      <Header    /> 
       {/* sending css classes as props in find job form   */}
       <section>
<div className="container">
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

       {browserWidth <= `${767}` ? <FilterButton fjob={<FilterJob />} />: browserWidth >=770 ? <FilterJob show="true" /> :''}
      
        <JobBoardJobs />
        {/* <CardJobBoard buttonTitle="View Job Details" classname="card-body" showform='false' /> */}
        <AsideJobBoard
          classname="jb-aside-top-section"
          btnid="jb-aside-top-btn"
          asidetext="jb-aside-top-text"
          formsec="jb-form-sec"
          downloadh="jb-aside-download-h"
        />
      </div>
</div>
</section>
    </>
)
}

export default Jobs;
