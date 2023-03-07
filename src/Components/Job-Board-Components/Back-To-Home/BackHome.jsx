import React from 'react'
import './BackHome.css'
import backArrow from '../../../Assets/Icons/chevron-left.svg'
import { useNavigate } from 'react-router'
function BackHome({backArrowDescription,navigating},show) {
    const navigate = useNavigate();
  return (
     <>

     <figure onClick={()=>{
        navigate(navigating)
      }}
      >
      
    
      <div className='backopt' >
     <img src={backArrow} alt='back to home'  /> 
     <span>{backArrowDescription}</span>
      </div>
     </figure>
     </>
  )
}

export default BackHome