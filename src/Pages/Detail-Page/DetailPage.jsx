import React from "react";
import "./DetailPage.css";
import ShortDetail from "../../Components/Detail-Page-Components/Short-Detail/ShortDetail";
import CardJobBoard from "../../Components/Job-Board-Components/Card-Job-Board/CardJobBoard";
import requirementIcon from "../../Assets/Detail-Page-Assets/Icons/licence-img.svg";
import jobTypeIcon from "../../Assets/Detail-Page-Assets/Icons/employment-img.svg";
import storeDiscountsIcon from "../../Assets/Detail-Page-Assets/Icons/storediscounts.svg";
import DetailDescription from "../../Components/Detail-Page-Components/Detail-Description/DetailDescription";
import AsideTop from "../../Components/Custom-Components/Aside/Aside top/AsideTop";
import Header from "../../Components/Home-Page-Components/Header/Header";
import SimilarJobs from "../../Components/Detail-Page-Components/Similar-Jobs/SimilarJobs";
import BackHome from "../../Components/Job-Board-Components/Back-To-Home/BackHome";
function DetailPage() {
  return (
    <>
      <Header />
      <div className="detail-container">
        <BackHome backArrowDescription="back to results" navigating= "/jobs"/>
        <div className="detailCard">
          <CardJobBoard classname="det-card" buttonTitle="Apply Now" />
          <div className="detailContent">
            <hr/>
            <ShortDetail
              heading="Requirement"
              Image={requirementIcon}
              title="Door Supervisor Licence required"
            />
            <hr />
            <ShortDetail
              heading="Job type"
              Image={jobTypeIcon}
              title="Part time employment"
            />
            <hr />
            <ShortDetail
              heading="Benefits"
              Image={storeDiscountsIcon}
              title="Store discounts"
            />
            <hr />
            <DetailDescription />
          </div>
        </div>
        <div className="detail-aside">
          <AsideTop
            classname="dt-aside-top-section"
            btnid="dt-aside-top-btn"
            asidetext="dt-aside-top-text"
            btntext="Send link"
            formsec="dt-form-sec"
            downloadh="dt-aside-download-h"
          />
          <SimilarJobs />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
