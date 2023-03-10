import React, { useState } from "react";
import remove from "../../../Assets/Detail-Page-Assets/Icons/icon-remove.svg";
import thunder from "../../../Assets/Job-Board-Assets/Icons/thunder-icon.svg";
import orgLogo from "../../../Assets/Job-Board-Assets/Logos/gent-security.webp";
import retailImg from "../../../Assets/Icons/icon-retail.svg";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import ReactShare from "../../Custom-Components/React Share/ReactShare";
import MsgTostify from '../../Custom-Components/Tostify/MsgTostify'
import "./cardjobboard.css";

const CardJobBoard = ({
  classname,
  buttonTitle,
  detailForm,
  showform,
  jobdata,
  only,
  jobdetail,
}) => {
  const [copyText , setCopyText] = useState('https://staging.get-licensed.co.uk/jobs/detail/2940?title=CCTV%203454&city=London,%20UK&venue=Corporate&company_name=PARAGON%20HART%20LTD&sia-license=')
  let [showForm, setShowForm] = useState(false);
  let [showShare , setShowShare] = useState(false)
  const navigate = useNavigate();
  const share = `https://www.get-licensed.co.uk/jobs/_next/image?url=%2Fjobs%2Fimages%2Ficon-share.svg&w=96&q=75`;
  console.log(showShare)
  console.log(copyText)
  return (
    <section>
      <div className={classname}>
        <div className="jb-card">
          <div className="jb-row">
            <div className="time-span-badge">
              <span id="time">9 hours ago</span>
              {only === "jobpage" && jobdata.is_immediate === 1 ? (
                <span id="badge">
                  <img src={thunder} alt="" />
                  <span id="bdg-text">IMMEDIATE START</span>
                </span>
              ) : only === "detailpage" && jobdetail.is_immediate === 1 ? (
                <span id="badge">
                  <img src={thunder} alt="" />
                  <span id="bdg-text">IMMEDIATE START</span>
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="share">
              <img src={share} alt="as"  onClick={()=>setShowShare(!showShare)} />          
        </div>
              </div>
              {showShare ? 
                  <CopyToClipboard text={copyText}  onCopy={()=>{
                    toast.success("Copied");
                    
                  }}>
              <span className="dropdown">???? Copy Link  </span>
          </CopyToClipboard>
              :''}    

          {/* org text  */}
          <div className="org-col">
            <h4 id="post">
              {only === "jobpage"
                ? jobdata.title
                : only === "detailpage"
                ? jobdetail.title
                : ""}
            </h4>
            <div className="org-row">
              {/* org-right-split */}
              <div className="org-right">
                <img
                  src={
                    only === "jobpage"
                      ? jobdata.logo_url
                      : only === "detailpage"
                      ? jobdetail.logo_url
                      : orgLogo
                  }
                  style={{ height: "3rem" }}
                  alt=""
/>

                <div className="org-text">
                  <h5 id="org">
                    {only === "jobpage"
                      ? jobdata.name
                      : only === "detailpage"
                      ? jobdetail.company_name
                      : "GENT SECURITY LTD"}
                  </h5>
                  <span id="location">
                    {only === "jobpage"
                      ? jobdata.city
                      : only === "detailpage"
                      ? jobdetail.city
                      : "EDINBERK, UK"}
                  </span>
                </div>
              </div>
              {/* org-left-split */}
              <div className="org-left">
                {showForm ? (
                  <>
                    <div
                      className="cancel"
                      onClick={() => {
                        setShowForm(false);
                      }}
                    >
                      <img src={remove} alt="" />
                      <p> cancel</p>
                    </div>
                  </>
                ) : only === "detailpage" ? (
                  <button
                    id={!showForm ? "jb-button" : "rm-button"}
                    onClick={() => {
                      setShowForm(showform);
                    }}
                  >
                    {buttonTitle}
                  </button>
                ) : only === "jobpage" ? (
                  <button
                    id={!showForm ? "jb-button" : "rm-button"}
                    onClick={() => {
                      navigate(`/jobs/detail/${jobdata.id}`);
                      setShowForm(showform);
                    }}
                  >
                    {buttonTitle}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* detail form component using props get if needed*/}
            {showForm && <div className="det-form">{detailForm}</div>}
          </div>
        </div>
        <hr className="divider" />
        <div className="card-footer">
          {/* right-split */}
          <div className="card-ft-right">
            <sup>
              <span>Paid Weekly</span>
            </sup>
            <span>
              <strong>
                &#163;
                {only === "jobpage"
                  ? jobdata.salary_type === "Fixed Rate"? jobdata.salary : jobdata.salary_max
                  : only === "detailpage"
                  ? jobdetail.salary
                  : 11}
              </strong>
              <span>/Per Hour</span>
            </span>{" "}
          </div>

          <div className="card-ft-left">
            <span>Venue type</span>
            <img src={retailImg} alt="" className="jb-retailimg" />
            <span>
              {only === "jobpage"
                ? jobdata.venue_type
                : only === "detailpage"
                ? jobdetail.venue_type
                : "not"}
            </span>
          </div>
        </div>
      </div>
      <ToastContainer/>

    </section>
  );
};

export default CardJobBoard;
