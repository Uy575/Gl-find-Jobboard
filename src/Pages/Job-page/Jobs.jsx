import React from 'react'
import './Jobs.css'
import Form from '../../Components/Home-Page-Components/Find-Job-Form/Form'
import Header from '../../Components/Home-Page-Components/Header/Header'
import FilterJob from '../../Components/Job-Board-Components/Filter-Job/FilterJob'
import CardJobBoard from '../../Components/Job-Board-Components/Card-Job-Board/CardJobBoard'
import AsideJobBoard from '../../Components/Job-Board-Components/Aside-Job-Board/AsideJobBoard'
import './Jobs.css'
function Jobs() {
  return (
    <>
   <Header/>
   <Form/>
   <div className='jobBoardPageMainContainer'>
   <FilterJob/>
   <CardJobBoard buttonTitle="View Job Details"/>
   <AsideJobBoard />
   </div>
    
    </>

  )
}

export default Jobs