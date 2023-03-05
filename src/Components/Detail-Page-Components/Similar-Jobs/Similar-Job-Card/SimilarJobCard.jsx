import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { JobDetail , SimilarJob} from "../../../../Redux/JobReducer";
import coporate from "../../../../Assets/Icons/icon-corporate.svg";
import toward from "../../../../Assets/Detail-Page-Assets/Icons/ctrl-right.svg";
import './similarjobcard.css'


const SimilarJobCard = ({similar,id }) => {

    const JobsState = useSelector((state) => state.JobReducer);
    const DETAIL_API = `https://staging.get-licensed.co.uk/guardpass/api/public/${id}/detail`;
    
    const disptach = useDispatch();
    const SIMILAR_API =`  https://staging.get-licensed.co.uk/guardpass/api/public/jobs/${id}/similar
    `
    const {similarJob , jobDetail} = JobsState
    
    useEffect(() => {
      disptach(JobDetail(DETAIL_API));
    },[jobDetail.id]);

// as

useEffect(()=>{
    disptach(SimilarJob(SIMILAR_API))
  },[id])
  

  console.log(similar.id,jobDetail.id)

  return (
    
      <section className="sj-container">
        <NavLink to={`/jobs/detail/${similar.id}`}>

      <div className="sj-card">
        <h3>Test</h3>

        <div className="sj-location">
          <div className="sj-logo">
            <img src={coporate} alt="" />
          </div>

          <div className="sj-loc-text">
            <h4>{similar.company_name}</h4>
            <p>{similar.city}</p>
          </div>

          <span className="sj-toward">
            <img src={toward} alt="" />
          </span>
        </div>
      </div>
    </NavLink>
    </section>
  )
}

export default SimilarJobCard
