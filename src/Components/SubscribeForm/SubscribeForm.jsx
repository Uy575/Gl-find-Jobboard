import React from 'react'
import "./SubscribeForm.css"
function SubscribeForm() {
  return (
   <form >
    
     <input className='subscribeFormInput' type='text' placeholder='Your Name'></input>
      
     <input className='subscribeFormInput' type='email' placeholder='Your Email'></input>
     <input className='subscribeFormButton' type="submit" value="Subscribe" />
    

   </form>
  )
}

export default SubscribeForm;