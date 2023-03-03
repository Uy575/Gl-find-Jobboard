import React, { useState } from "react";
import remove from "../../../Assets/Detail-Page-Assets/Icons/icon-remove.svg";
import thunder from "../../../Assets/Job-Board-Assets/Icons/thunder-icon.svg";
import orgLogo from "../../../Assets/Job-Board-Assets/Logos/gent-security.webp";
import retailImg from "../../../Assets/Icons/icon-retail.svg";
import "./cardjobboard.css";
import { useNavigate } from "react-router-dom";

const CardJobBoard = ({ classname, buttonTitle, detailForm, showform }) => {
  let [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const share = `https://www.get-licensed.co.uk/jobs/_next/image?url=%2Fjobs%2Fimages%2Ficon-share.svg&w=96&q=75`;
  return (
    <section>
      <div className={classname}>
        <div className="jb-card">
          <div className="jb-row">
            <div className="time-span-badge">
              <span id="time">9 hours ago</span>
              <span id="badge">
                <img src={thunder} alt="" />
                <span id="bdg-text">IMMEDIATE START</span>
              </span>
            </div>

            <div className="share">
              <img src={share} alt="as" />
            </div>
          </div>

          {/* org text  */}
          <div className="org-col">
            <h4 id="post">Luxery Retail Officer</h4>
            <div className="org-row">
              {/* org-right-split */}
              <div className="org-right">
                <img src={orgLogo} alt="" />
                <div className="org-text">
                  <h5 id="org">GENT SECURITY LTD</h5>
                  <span id="location">Edinburgh, UK</span>
                </div>
              </div>
              {/* org-left-split */}
              <div className="org-left">
                
                  {showForm ? (
                    <>
                  <div className="cancel"  onClick={()=>{
                  console.log("as")
                  setShowForm(false)
                  }}>
                    <img src={remove} alt="" />
                    <p> cancel</p>
                  </div>
              
                    </>
                  ) : (
                    <button
                    id={!showForm ? "jb-button":"rm-button"}
                    onClick={() => {
                      navigate("/jobs/detail");
                      setShowForm(showform);
                      console.log(showform);
                    }}
                  >{buttonTitle}</button>     
                    
                    
                  )}
                <>
                    </>
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
              <strong>&#163;11</strong>
              <span>/Per Hour</span>
            </span>{" "}
          </div>

          <div className="card-ft-left">
            <span>Venue type</span>
            <img src={retailImg} alt="" className="jb-retailimg" />
            <span>Retail</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardJobBoard;
