

import Form from "../../Components/Home-Page-Components/Find-Job-Form/Form";
import Header from "../../Components/Home-Page-Components/Header/Header";
import FilterJob from "../../Components/Job-Board-Components/Filter-Job/FilterJob";
import AsideJobBoard from "../../Components/Job-Board-Components/Aside-Job-Board/AsideJobBoard";
import BackHome from "../../Components/Job-Board-Components/Back-To-Home/BackHome";
import JobBoardJobs from "../../Components/Job-Board-Components/Job-Boad-Jobs/JobBoardJobs";
import "./Jobs.css";
import Pagination from "../../Components/Job-Board-Components/Paginate/Pagination";



function Jobs() {
  return (
    <>
      <Header /> 
      {/* sending css classes as props in find job form  */}
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

        <FilterJob />
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

    </>
)
}

export default Jobs;
