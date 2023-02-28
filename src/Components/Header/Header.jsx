import React from 'react'
import './Header.css'
import headerlogo from '../../Assets/Logo/gl-logo.png';
import briefcase from '../../Assets/Icons/briefcase.svg'
function Header() {
  return (
   <div className='header bottom'>
    <span className='header-logo'><img src={headerlogo} alt='Logo'/></span>
    <div className='header-post-job'><img src={briefcase} alt = 'briefcase'/> <br/>
    <span className='header-post-job-text'> Post Job </span></div>
   </div>
  )
}

export default Header;