import React, {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { JobDetail, SimilarJob } from "../../Redux/JobReducer";
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
import DetailForm from "../../Components/Detail-Page-Components/Form-Submit/DetailForm";
import "./DetailPage.css";
import AccordionComp from "../../Components/Detail-Page-Components/Accordion/Accordion";
import GetSiaLicense from "../../Components/Detail-Page-Components/Get-Sia-License/GetSiaLicense";
function DetailPage() {
  const JobsState = useSelector((state) => state.JobReducer);
  const { id } = useParams();
  const disptach = useDispatch();
  const DETAIL_API = `https://staging.get-licensed.co.uk/guardpass/api/public/${id}/detail`;

  const SIMILAR_API = `  https://staging.get-licensed.co.uk/guardpass/api/public/jobs/${id}/similar`;

  const { jobDetail, similarJob } = JobsState;

  useEffect(() => {
    disptach(JobDetail(DETAIL_API));
  }, [id]);

  useEffect(() => {
    disptach(SimilarJob(SIMILAR_API));
  }, []);

  return (
    <>
      <Header />
       <span style={{marginTop:'1rem',display:'inline-block'}}>
        <BackHome backArrowDescription="back to results" navigating="/jobs?title=&city=&venue=&sia-licence=&distance=30&salary-min=9&salary-max=50&lat=&lng" />
       </span>
      <div className="detail-container">
        <div className="detailCard">
          <CardJobBoard
            classname="det-card"
            buttonTitle="Apply Now"
            detailForm={<DetailForm />}
            showform="true"
            only="detailpage"
            jobdetail={jobDetail}
          />
          
          <div className="detailContent">
            <AccordionComp />
          </div>
          <div className="detailContent">
            <hr />
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
              emptype={jobDetail.employment_type}
            />
            <hr />

            <ShortDetail
              heading="Benefits"
              Image={storeDiscountsIcon}
              title="Store discounts"
              benefits={jobDetail.job_benefits}
            />
            <hr />
            <DetailDescription description={jobDetail.description} />
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
          <SimilarJobs similarJob={similarJob} id={id} />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
