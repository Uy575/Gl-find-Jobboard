import React from 'react'
import './description.css'
function DetailDescription({description}) {
  return (
    <div className='description-div' >
      <h3 style={{fontFamily:"Roboto,san-serif" , fontSize:"22px" , fontWeight:'700' , margin:"1rem 0"}}>Description</h3>
     <div dangerouslySetInnerHTML={{__html:description}}/> </div>
  )
}

export default DetailDescription