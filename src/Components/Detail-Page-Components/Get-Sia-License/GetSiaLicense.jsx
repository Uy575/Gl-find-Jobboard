import React from 'react'
import GetSiaLicenseImage from '../../../Assets/Detail-Page-Assets/Images/getLicensedImage.webp'
import './GetSiaLicense.css'
import { Link } from 'react-router-dom'
function GetSiaLicense() {
  return (
    <div className='getLicensedMainContainer'>
        <p style={{color:'red'}}>A valid SIA licence is a legal requirement for this job.</p>
        <p>Learn how to get an SIA licence and get working.</p>
    
    <div className='getLicensedCard'>
      <div className='getLicensedContent'>
            <h4 style={{color:'rgb(59,213,90)',fontWeight:'bolder'}}>How to get an SIA Licence</h4>
            <p>It is a legal requirement to get an SIA licence to work in the private security industry. Learn how you can apply for your licence and work legally as a Door Supervisor, CCTV Operator, Security Guard or Close Protection Officer.</p>
            <Link to='https://www.get-licensed.co.uk/licence/get-sia-licence' target='_blank'>
            <button className='getLicensedButton'>Learn more...</button>
            </Link>
      </div>
      <div className='getLicensedImage'>
        <img style={{paddingTop: '1rem'}} src={GetSiaLicenseImage}></img>
      </div>
    </div>
    </div>
  )
}

export default GetSiaLicense