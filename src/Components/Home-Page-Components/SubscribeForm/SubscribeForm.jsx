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
            // action.resetForm();  
          userSubscribe();
       
        },


         
      
  });

    const userSubscribe = async ()=>{

      try{
        const formData = JSON.stringify({"subscriberEmail" : values.email});
    const response = await axios.post(subscriberEmailApi,formData, {headers: {
      'Accept-Type' : 'application/json', 
      'Content-Type': 'application/json'}
  });

    console.log(formData)
    console.log(response.data);
    toast.success(response.data);
  } catch (err) {
    toast.error(err);
  }
        
    
// }

// var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   subscriberEmail : values.email
// });


// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
//  const userSubscribe = async ()=>{
// fetch("https://uat.get-licensed.co.uk/subscriber/register", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
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
     <input className='subscribeFormButton' type="submit" value="Subscribe"  />
    </div>
  </div>

   </form>
  )
}

export default SubscribeForm;