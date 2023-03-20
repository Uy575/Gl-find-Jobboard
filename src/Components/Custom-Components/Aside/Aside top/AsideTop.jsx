import { useFormik } from "formik";
import flag from "../../../../Assets/Job-Board-Assets/Images/uk-flag.svg";
import arrow from "../../../../Assets/Icons/arrow-right.svg";
import apple from "../../../../Assets/Job-Board-Assets/Logos/android-logo.webp";
import google from "../../../../Assets/Job-Board-Assets/Logos/google-play-logo.webp";
import './asidetop.css'
import axios from "axios";
import { sentJobLinkSchema } from "../../../../Schemas/SentJobLinkYup";
import { Link } from "react-router-dom";


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
    validationSchema: sentJobLinkSchema,
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
          Apply on the go with <br/> the GuardPass App
        </h4>
        <p>
          Download the app to start <br/> applying for security jobs <br/> in your area and <br/>
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
            {btntext === "Send link" ? "Send link" : <img src={arrow} alt="" height="16px" /> }
          </button>
        </form>
          {errors.phonenumber && touched.phonenumber? (
          <p style={{ color: "red",fontSize:'1rem',width:'16rem',paddingLeft:'20px',position:"absolute"}}> {errors.phonenumber} </p>
        ) : null}
      </div>
      <h6 className={downloadh}>Download From </h6>

      <div className="google">
        <Link target="_blank" to='https://play.google.com/store/apps/details?id=com.getlicensed.protect.released&hl=en_GB&gl=US&pli=1'>
        <img src='https://www.get-licensed.co.uk/jobs/_next/image?url=%2Fjobs%2Fimages%2Fseek-png-com-google-play-logo-png-349265%402x.png&w=256&q=75' width="160px" alt="" />
        </Link>
      </div>

      <div className="apple">
      <Link target='_blank' to="https://apps.apple.com/pk/app/protect-by-get-licensed/id1562863073#?platform=iphone" >
        <img src='https://www.get-licensed.co.uk/jobs/_next/image?url=%2Fjobs%2Fimages%2Fseek-png-com-appstore%402x.png&w=256&q=75' alt="" width="160px" />
        </Link>
      </div>
    </div>
  );
};

export default AsideTop;
