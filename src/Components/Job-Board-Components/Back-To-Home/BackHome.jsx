import React from 'react'
import './BackHome.css'
import backArrow from '../../../Assets/Icons/chevron-left.svg'
import { useNavigate } from 'react-router'
function BackHome({backArrowDescription}) {
    const navigate = useNavigate();
  return (
     <>
     <figure onClick={()=>{
        navigate('/')
     }}>
     <img src={backArrow} alt='back to home'  /> 
     <span>{backArrowDescription}</span>
     </figure>
     </>
  )
}

export default BackHome