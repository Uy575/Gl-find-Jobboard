import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageNotFound from "../../../Custom-Components/Page not Found/PageNotFound";
import CardJobBoard from "../../Card-Job-Board/CardJobBoard";
import Pagination from "../../Paginate/Pagination";
import "./joblist.css";
const JobList = () => {
  const JobsState = useSelector((state) => state.JobReducer);
  const { jobFilter, geoLocation, filterJobs, searchStatus } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );
  const {Jobs , paginated} =JobsState
// console.log(Jobs.length)
return (
<>

<div className="joblist" style={{display:"flex" , flexDirection:'column'}}>
  <span style={{position:"absolute" , top:"1rem" , fontWeight:"bold"}} > Jobs {Jobs.length}</span>
{
paginated.length > 0 ?
paginated.map((job)=>{
  return (
      <CardJobBoard buttonTitle="View Job Details" classname="card-body" showform='false' key={job.id} jobdata={job} paginated={paginated} only="jobpage" cardfooter='jb-card-footer' orgcol='jb-org-col' orgright='jb-org-right'/> 

)

})
:
<PageNotFound />


}
<Pagination />
</div>
</>
  )
}

export default JobList;
