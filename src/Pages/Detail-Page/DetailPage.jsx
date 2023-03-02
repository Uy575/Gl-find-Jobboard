import React from 'react'
import './DetailPage.css'
import ShortDetail from '../../Components/Detail-Page-Components/Short-Detail/ShortDetail'
import CardJobBoard from '../../Components/Job-Board-Components/Card-Job-Board/CardJobBoard'
import requirementIcon from '../../Assets/Detail-Page-Assets/Icons/licence-img.svg'
import jobTypeIcon from '../../Assets/Detail-Page-Assets/Icons/employment-img.svg'
import storeDiscountsIcon from '../../Assets/Detail-Page-Assets/Icons/storediscounts.svg'
import DetailDescription from '../../Components/Detail-Page-Components/Detail-Description/DetailDescription'

function DetailPage() {
  return (
   <>
   <div className='detailCard'>
   <CardJobBoard/>
   <div className='detailContent'>
   {/* <hr/> */}
   <ShortDetail heading='Requirement' Image = {requirementIcon}  title= 'Door Supervisor Licence required'/>
   <hr/>
   <ShortDetail heading='Job type' Image={jobTypeIcon} title= 'Part time employment'/>
   <hr/>
   <ShortDetail heading='Benefits' Image={storeDiscountsIcon} title= 'Store discounts'/>
   <hr/>
   <DetailDescription/>
   </div>
   </div>
   </>
  )
}

export default DetailPage;
