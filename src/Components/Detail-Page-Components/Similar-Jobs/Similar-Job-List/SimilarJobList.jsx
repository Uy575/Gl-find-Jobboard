import React from 'react'
import SimilarJobCard from '../Similar-Job-Card/SimilarJobCard'
const SimilarJobList = ({similarJob,id}) => {
  return (
    <div>
      
{
    similarJob.map((similar)=>{
        return <SimilarJobCard similar={similar} id={id} />
    })
}

    </div>
  )
}

export default SimilarJobList
