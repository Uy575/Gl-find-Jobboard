import React from 'react'
import './SeventhSection.css'
import mobilemockup from "../../Assets/Images/smartphone-mockup.webp"
import appleicon from "../../Assets/Icons/apple-icn.svg";
import androidicon from "../../Assets/Icons/android-icn.svg";
function SeventhSection() {
  return (
    <div className='SeventhSectionMainContainer'>
         
     <div className='imageDiv'>
       <img src={mobilemockup} alt='Mobile Mockup'/>
     </div>

     <div className='contentDiv'>
       <h1>Let the Jobs Find You</h1>
       <p>Apply for jobs, track your applications, and get job alert notifications all from the GuardPass app.</p>
       <span>Download</span>
       <div className='downloadAppButtons'>
       <button className='seventhSectionAppleButton'><img src={appleicon} alt='apple'/></button>
       <button className='seventhSectionAndriodButton seventhSectionAndriodButtonText'><img src={androidicon} alt='andriod'/></button>
       </div>
     </div>
 

    </div>
  )
}

export default SeventhSection;