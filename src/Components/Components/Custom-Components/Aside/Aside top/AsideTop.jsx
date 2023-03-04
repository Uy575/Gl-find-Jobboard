import { useFormik } from "formik";
import flag from "../../../../Assets/Job-Board-Assets/Images/uk-flag.svg";
import arrow from "../../../../Assets/Icons/arrow-right.svg";
import apple from "../../../../Assets/Job-Board-Assets/Logos/android-logo.webp";
import google from "../../../../Assets/Job-Board-Assets/Logos/google-play-logo.webp";
import './asidetop.css'
import axios from "axios";


const Post_Send_Api = `https://staging.get-licensed.co.uk/guardpass/api/public/sms/app/link`;
const INITIAL_STATE={
  phonenumber:''
}

const AsideTop = ({classname , btnid , asidetext,btntext , formsec ,downloadh}) => {
  const {
    values,
    errors,
    setFieldValue,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: INITIAL_STATE,
    // validationSchema: ,
    onSubmit: (values,action) => {
      sendAppLink();
      action.resetForm()
    },
  });

const sendAppLink = async()=>{
const request = await axios.post(Post_Send_Api,{
  mobile_number :values.phonenumber
})
console.log(request)

}


  return (
    <div className={classname}>
      <div className={asidetext}>
        <h4>
          Apply on the go <br /> with the GuardPass App
        </h4>
        <p>
          Download the app to start applying for security jobs in your area and
          get working!
        </p>
      </div>

      <div className="jb-aside-top-end">
        <form action="#" className="jb-aside-form">
          <div className={formsec}>
            <span id="flag">
              <img src={flag} alt="" />
            </span>
            <input type="text" placeholder="Enter phone #" name="phonenumber" value={values.phonenumber} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          <button id={btnid} type="button" onClick={handleSubmit}>
            {btntext === "Send link" ? <h4>Send link</h4> : <img src={arrow} alt="" height="16px" /> }
          </button>
        </form>
      </div>
      <h6 className={downloadh}>Download From </h6>

      <div className="google">
        <img src={apple} alt="" />
      </div>

      <div className="apple">
        <img src={google} alt="" />
      </div>
    </div>
  );
};

export default AsideTop;
