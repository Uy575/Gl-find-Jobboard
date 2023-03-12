import React from 'react'
import './PageNotFound.css'
import cactusImg  from '../../../Assets/Job-Board-Assets/Images/cactus-img.svg'
function PageNotFound() {
  return (
    <div className='pageNotFound'>
        <img src={cactusImg} alt='page not found' />
        <h1>Sorry, your search did not return any results.</h1>
        <p>Try adjusting your search by changing your dates, removing filters. You can also search and apply for jobs using the <strong>GuardPass app</strong></p>
    </div>
  )
}

export default PageNotFound