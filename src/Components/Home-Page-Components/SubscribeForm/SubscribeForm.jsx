import React from 'react'
import "./SubscribeForm.css"
import { useFormik } from 'formik';
import axios from 'axios';
import { subscriberSchema } from '../../../Schemas/SubscribeFormYup';
import MsgTostify from '../../Custom-Components/Tostify/MsgTostify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SubscribeForm() {
     
    const subscriberEmailApi = "https://uat.get-licensed.co.uk/subscriber/register";
     
    const initialValues = {
      name:'',
      email:'',
    }

    const {values,handleBlur,handleChange,errors,handleSubmit,touched} = useFormik({
        initialValues,
          validationSchema:subscriberSchema,
          onSubmit: (values,action) =>{  
          userSubscribe(values);
            action.resetForm();  
       
        },


         
      
  });

    const userSubscribe = async (values)=>{
    const formData = JSON.stringify({subscriberEmail : values.email});
    const request = await axios.post(subscriberEmailApi, formData);

   
    
}

 const subscribeFormHandle = ()=>{
  let message = 'subscribed';
  console.log("toast",initialValues)

   toast(message)

 }

  return (
   <form onSubmit={handleSubmit}>
      <div className='mainSubscriberFormContainer'>
      <div >
     <input className='subscribeFormInput' name='name' type='text' placeholder='Your Name'
     value={values.name}
     onChange = {handleChange}
     onBlur = {handleBlur}
     ></input>
     
      {
        errors.name && touched.name? <p style={{color:'red'}}> {errors.name} </p> : null
      }

     </div>
     
      <div className='field'>
     <input className='subscribeFormInput' name='email' type='email' placeholder='Your Email'
      value={values.email}
      onChange = {handleChange}
      onBlur = {handleBlur}
      ></input>
      <div>

      {
        errors.email && touched.email? <p style={{color:'red'}}> {errors.email} </p> : null
      }
      </div>
      </div>
     <div>
     <input className='subscribeFormButton' type="submit" value="Subscribe" onClick={subscribeFormHandle} />
    </div>
  </div>

   {
     initialValues.name && initialValues.email === ""? '':<MsgTostify/>
   }
   </form>
  )
}

export default SubscribeForm;