import React from 'react'
import './Jobs.css'
import Form from '../../Components/Find-Job-Form/Form'
import Header from '../../Components/Header/Header'
import FilterJob from '../../Components/Job-Board-Components/Filter-Job/FilterJob'
import CardJobBoard from '../../Components/Job-Board-Components/Card-Job-Board/CardJobBoard'
function Jobs() {
  return (
    <>
   <Header/>
   <Form/>
   <div className='jobBoardPageMainContainer'>
   <FilterJob/>
   <CardJobBoard/>
   </div>
    
    </>

  )
}

export default Jobs