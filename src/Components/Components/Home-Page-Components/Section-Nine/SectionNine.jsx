import React from 'react'
import "./SectionNine.css"
import firstgroup from "../../../Assets/Logo/group-1.svg";
import secondgroup from "../../../Assets/Logo/pbsa.svg";
import thirdgroup from "../../../Assets/Logo/group-3.svg";
import fourthgroup from "../../../Assets/Logo/group-4.svg";
import fifthgroup from "../../../Assets/Logo/group-5.svg";
import sixthgroup from "../../../Assets/Logo/group-6.svg";


function SectionNine() {
  return (
    <div className='sectionNineLogoContainer'>
        
            <img src={firstgroup} alt='group1'/>
            <img src={secondgroup} alt='group2'/>
            <img src={thirdgroup} alt='group3'/>
            <img src={fourthgroup} alt='group4'/>
            <img src={fifthgroup} alt='group5'/>
            <img src={sixthgroup} alt='group6'/>
     

   
    </div>
  )
}

export default SectionNine;