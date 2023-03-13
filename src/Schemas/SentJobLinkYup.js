import * as Yup from "yup";

export const sentJobLinkSchema = Yup.object({
 

   phonenumber : Yup.string().min(11).max(11).required("please enter your mobile number"),


})