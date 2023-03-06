import React from 'react'
import './description.css'
function DetailDescription({description}) {
  console.log(description)
  return (
    <div className='description-div' >
     <div dangerouslySetInnerHTML={{__html:description}}/> </div>
  )
}

export default DetailDescription