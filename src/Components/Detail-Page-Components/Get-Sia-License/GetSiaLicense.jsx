import React from 'react'
import GetSiaLicenseImage from '../../../Assets/Detail-Page-Assets/Images/getLicensedImage.webp'
import './GetSiaLicense.css'
function GetSiaLicense() {
  return (
    <div className='getLicensedMainContainer'>
        <p style={{color:'red'}}>A valid SIA licence is a legal requirement for this job.</p>
        <p>Learn how to get an SIA licence and get working.</p>
    
    <div className='getLicensedCard'>
      <div className='getLicensedContent'>
            <h2>How to get an SIA Licence</h2>
            <p>It is a legal requirement to get an SIA licence to work in the private security industry. Learn how you can apply for your licence and work legally as a Door Supervisor, CCTV Operator, Security Guard or Close Protection Officer.</p>
            <button><a href='#'>Learn more...</a></button>
      </div>
      <div className='getLicensedImage'>
        <img src={GetSiaLicenseImage}></img>
      </div>
    </div>
    </div>
  )
}

export default GetSiaLicense