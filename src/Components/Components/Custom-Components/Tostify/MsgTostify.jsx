import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MsgTostify({message}) {
   toast(message);
   console.log(message)
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default MsgTostify





 

 

