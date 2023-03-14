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
       <section className='sectionNine'>
         <div className='container'>
      <div className='sectionNineLogoContainer'>
            <div className='item'><img src={firstgroup} alt='group1'/></div>
            <div className='item'><img src={secondgroup} alt='group2'/></div>
            <div className='item'><img src={thirdgroup} alt='group3'/></div>
            <div className='item'><img src={fourthgroup} alt='group4'/></div>
            <div className='item'><img src={fifthgroup} alt='group5'/></div>
            <div className='item lastItem'><img src={sixthgroup} alt='group6'/></div>
        
    </div>
    </div>
    </section>
  )
}

export default SectionNine;