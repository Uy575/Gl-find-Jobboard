import React, { useState } from "react";
import remove from "../../../Assets/Detail-Page-Assets/Icons/icon-remove.svg";
import thunder from "../../../Assets/Job-Board-Assets/Icons/thunder-icon.svg";
import orgLogo from "../../../Assets/Job-Board-Assets/Logos/gent-security.webp";
import retailImg from "../../../Assets/Icons/icon-retail.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import retailIcon from "../../../Assets/Icons/icon-retail.svg";
import mobileIcon from "../../../Assets/Icons/icon-mobile.svg";
import eventIcon from "../../../Assets/Icons/icon-event.svg";
import corporateIcon from "../../../Assets/Icons/icon-corporate.svg";
import barIcon from "../../../Assets/Icons/icon-barclub.svg";
import ReactShare from "../../Custom-Components/React Share/ReactShare";
import MsgTostify from "../../Custom-Components/Tostify/MsgTostify";
import "./cardjobboard.css";

const CardJobBoard = ({
  classname,
  buttonTitle,
  detailForm,
  showform,
  jobdata,
  only,
  jobdetail,
  cardfooter,
  orgcol,
  orgright
}) => {
  const [copyText, setCopyText] = useState(
    "https://staging.get-licensed.co.uk/jobs/detail/2940?title=CCTV%203454&city=London,%20UK&venue=Corporate&company_name=PARAGON%20HART%20LTD&sia-license="
  );
  let [showForm, setShowForm] = useState(false);
  let [showShare, setShowShare] = useState(false);
  const navigate = useNavigate();
  const share = `https://www.get-licensed.co.uk/jobs/_next/image?url=%2Fjobs%2Fimages%2Ficon-share.svg&w=96&q=75`;
  return (
    <>
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
              <img
                src={share}
                alt="as"
                onClick={() => setShowShare(!showShare)}
              />
            </div>
          </div>
          {showShare ? (
            <CopyToClipboard
              text={copyText}
              onCopy={() => {
                setShowShare(!showShare)
                toast.success("Copied");
              }}
            >
              <span className="dropdown">🔗 Copy Link </span>
            </CopyToClipboard>
          ) : (
            ""
          )}

          {/* org text  */}
          <div className={orgcol}>
            <h4 id="post">
              {only === "jobpage"
                ? jobdata.title
                : only === "detailpage"
                ? jobdetail.title
                : ""}
            </h4>
            <div className="org-row">
              {/* org-right-split */}
              <div className={orgright}>
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
                      <img src={remove} alt="" style={{paddingBottom:'1rem'}}/>
                      <p><strong> Cancel </strong></p>
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
        <div className={cardfooter}>
          {/* right-split */}
          <div className="card-ft-right">
              <span>Paid Weekly</span>
            <span>
              <strong>                
                {only === "jobpage"
                  ? jobdata.salary_type === "Fixed Rate"
                  ? jobdata.salary
                  :<h6 className="salary">&#163;{Math.round(jobdata.salary_min)} - &#163;{Math.round(jobdata.salary_max)}</h6>
                  : only === "detailpage"
                  ? jobdetail.salary_type === "Fixed Rate"
                  ? jobdetail.salary
                  :   <>
                <h6 className="salary">&#163;{Math.round(jobdetail.salary_min)} - &#163;{Math.round(jobdetail.salary_max)}</h6>
                </>
                  : 11}
              </strong>
              <span>/Per Hour</span>
            </span>{" "}
                  {/* <hr className="divider" /> */}
          </div>
          <hr className="seprator" />

          <div className="card-ft-left">
            <span>Venue type</span>
            {only === "jobpage" ? (
              <img
                src={
                  jobdata.venue_type === "Retail"
                    ? retailIcon
                    : jobdata.venue_type === "Corporate"
                    ? corporateIcon
                    : jobdata.venue_type === "Event"
                    ? eventIcon
                    : jobdata.venue_type === "Bar/Club"
                    ? barIcon
                    : ""
                }
                alt=""
                className="jb-retailimg"
              />
            ) : only === "detailpage" ? (
              <img
                src={
                  jobdetail.venue_type === "Retail"
                    ? retailIcon
                    : jobdetail.venue_type === "Corporate"
                    ? corporateIcon
                    : jobdetail.venue_type === "Event"
                    ? eventIcon
                    : jobdetail.venue_type === "Bar/Club"
                    ? barIcon
                    : ""
                }
                alt=""
                className="jb-retailimg"
              />
            ) : (
              ""
            )}

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
      <ToastContainer />
    </>
  );
};

export default CardJobBoard;
