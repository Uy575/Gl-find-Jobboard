import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import CardJobBoard from '../../Card-Job-Board/CardJobBoard'
import Pagination from '../../Paginate/Pagination'
import './joblist.css'
const JobList = () => {
  const JobsState = useSelector((state) => state.JobReducer)
const {Jobs , paginated} =JobsState

return (
<>
<div className="joblist" style={{display:"flex" , flexDirection:'column'}}>

{
  
paginated.map((job)=>{
  return (
      <CardJobBoard buttonTitle="View Job Details" classname="card-body" showform='false' key={job.id} jobdata={job} paginated={paginated} only="jobpage" /> 

)

})
}
<Pagination />
</div>
</>
  )
}

export default JobList
