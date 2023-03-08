import React from 'react'
import "./SubscribeForm.css"
import { useFormik } from 'formik';
import axios from 'axios';
import { subscriberSchema } from '../../../Schemas/SubscribeFormYup';
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
           action.resetForm();  
          userSubscribe();
       
        },


         
      
  });

    const userSubscribe = async ()=>{
    const formData = JSON.stringify({subscriberEmail : values.email});
    const request = await axios.post(subscriberEmailApi,{ 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Accept': "application/json"

      }
        ,
      formData});
console.log(values.email)
   console.log(request)
    
        const formData = JSON.stringify({"subscriberEmail" : values.email});
    const response = await axios.post(subscriberEmailApi,formData, {headers: {
      'Accept-Type' : 'application/json', 
      'Content-Type': 'application/json'}
  });

    console.log(formData)
    console.log(response.data);
    toast.success(response.data);
  } catch (err) {
    message = err.response.data.message;
    toast.error(message);
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
        errors.name && touched.name? <p className='subscribeFormErrors' style={{color:'red'}}> {errors.name} </p> : null
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
        errors.email && touched.email? <p className='subscribeFormErrors' style={{color:'red'}}> {errors.email} </p> : null
      }
      </div>
      </div>
     <div>
     <input className='subscribeFormButton' type="submit" value="Subscribe"  />
    </div>
  </div>
    <ToastContainer/>
   </form>
  )
}

export default SubscribeForm;