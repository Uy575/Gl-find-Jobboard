import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import CardJobBoard from '../../Card-Job-Board/CardJobBoard'
import './joblist.css'
const JobList = () => {
  const JobsState = useSelector((state) => state.JobReducer)
const {Jobs} =JobsState

return (
<>
<div className="joblist" style={{display:"flex" , flexDirection:'column'}}>

{
  
Jobs.map((job)=>{
  return (
      <CardJobBoard buttonTitle="View Job Details" classname="card-body" showform='false' key={job.id} jobdata={job} only="jobpage" /> 

)

})
}
</div>
</>
  )
}

export default JobList
