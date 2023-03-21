import React from "react";
import "./ShortDetail.css";
function ShortDetail({ heading, Image, title, emptype, benefits }) {
  const data = benefits ? benefits.job_benefits : "";
  const as = data && data.map((sa) => sa.benefit.title);

  console.log(as);

  return (
    <div>
      {heading === "Job type" ? (
        <div>
          <div className="div1">
            <h3>{heading}</h3>
            <img src={Image} alt="title" height="30px" /> <span>{emptype}</span>{" "}
          </div>
        </div>
      ) : heading === "Benefits" ? (
        <div>
          <div className="div2">
            <h3> {heading} </h3>
            <>
              {data &&
                data.map((sa) => {
                  return <li style={{fontFamily:'Roboto,sans-serif' , fontSize:'14px' , fontWeight:'700'}}>{sa.benefit.title}</li>;
                })}
            </>{" "}
          </div>
        </div>
      ) : (
        <div>
          <div className="div3">
            <h3> {heading} </h3>
            <img src={Image} alt="title" height="30px" /> <span>{title}</span>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShortDetail;
