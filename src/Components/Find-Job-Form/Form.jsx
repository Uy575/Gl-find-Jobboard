import React from 'react'
import "./Form.css"
import arrow from "../../Assets/Icons/arrow-right.svg"


function Form() {
  
  return (
    
    <form>
       <div className='formFields'>
      <div className='formCard'>  
      <div className='jobTitleInputField'>
      <h4>Job Title</h4> 
      <input className='FormInputs' placeholder='e.g Security supervisor' type="text"   name="name" />
      </div>
      <div className='locationInputField'>
      <h4>Enter Location</h4>
      <input className='FormInputs' placeholder='e.g London' type="text" name="name" />
      </div>
      </div>
      <div>
      <input className='findJobButton' type="submit" value="Find Jobs"/> <img className='findJobArrow' src={arrow} alt='arrow'/>
      </div>
      </div>
    </form>
    
    
  )
}

export default Form;