import React from 'react'
import './Jobs.css'
import Form from '../../Components/Home-Page-Components/Find-Job-Form/Form'
import Header from '../../Components/Home-Page-Components/Header/Header'
import FilterJob from '../../Components/Job-Board-Components/Filter-Job/FilterJob'
import CardJobBoard from '../../Components/Job-Board-Components/Card-Job-Board/CardJobBoard'
import AsideJobBoard from '../../Components/Job-Board-Components/Aside-Job-Board/AsideJobBoard'
import './Jobs.css'
import BackHome from '../../Components/Job-Board-Components/Back-To-Home/BackHome'
function Jobs() {
  return (
    <>
   <Header/>
   <Form
   
       formFields = "jobBoardFormFields"
       formCard = "jobBoardFormCard" 
       jobTitleInputField = "jobBoardJobTitleInputField" 
       formInputs =  "jobBoardFormInputs"
       locationInputField = "jobBoardLocationInputField"
       findJobButton =  "jobBoardFindJobButton"
       findJobArrow = "jobBoardFindJobArrow" 
   
   
   />
   <BackHome backArrowDescription= 'Home'/>
   <div className='jobBoardPageMainContainer'>
   <FilterJob/>
   <CardJobBoard buttonTitle="View Job Details"/>
   <AsideJobBoard />
   </div>
    
    </>

  )
}

export default Jobs