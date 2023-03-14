import React from 'react'
import './Header.css'
import headerlogo from '../../../Assets/Logo/gl-logo.png';
import briefcase from '../../../Assets/Icons/briefcase.svg'
function Header({headerLogo,headerPostJob}) {
  return (
     
    <section className='headerSection' >

     <div className='container' >
     <div className='header'>
    <div className={headerLogo} >
    <img src={headerlogo} alt='Logo'/>
    </div>  
    <div className={headerPostJob}>
      <a href = "https://www.get-licensed.co.uk/employers/login">
        <img src={briefcase} alt = 'briefcase'/></a> <br/>
     <span className='header-post-job-text'> Post Job </span>
    </div>

     </div>

   </div>

    </section>
  )
}

export default Header;