import * as Yup from "yup";

export const applyForJobSchema = Yup.object({
 
   firstName: Yup.string().max(25).required("please enter your first name"),
   lastName:  Yup.string().min(2).max(25).required("please enter your last name"),
   email: Yup.string().email().required("please enter your email"),
   number : Yup.string().min(11).max(11).required("please enter your mobile number"),
   check : Yup.string().required("please tell us about license")

})