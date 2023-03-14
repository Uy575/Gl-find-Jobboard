import React from 'react'
import './SeventhSection.css'
import mobilemockup from "../../../Assets/Images/smartphone-mockup.webp"
import appleicon from "../../../Assets/Icons/apple-icn.svg";
import androidicon from "../../../Assets/Icons/android-icn.svg";
function SeventhSection() {
  return (
    <section>
    <div className='container'>
 
    <div className='SeventhSectionMainContainer'>
     <div className='imageDiv'>
       <img src={mobilemockup} alt='Mobile Mockup'/>
     </div>

     <div className='contentDiv'>
       <h1>Let the Jobs Find You</h1>
       <p>Apply for jobs, track your applications, and get job alert notifications all from the GuardPass app.</p>
       <span>Download</span>
       <div className='downloadAppButtons'>
       <a target='_blank' href='https://apps.apple.com/pk/app/protect-by-get-licensed/id1562863073#?platform=iphone' ><button className='seventhSectionAppleButton'><img src={appleicon} alt='apple'/></button>
       </a>
       <a target='_blank' href="https://play.google.com/store/apps/details?id=com.getlicensed.protect.released&hl=en_GB&gl=US" ><button className='seventhSectionAndriodButton seventhSectionAndriodButtonText'><img src={androidicon} alt='andriod'/></button>
       </a>
       </div>
     </div>
 

    </div>
    </div>
    </section>
  )
}

export default SeventhSection;