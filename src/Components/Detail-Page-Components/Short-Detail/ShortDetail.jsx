import React from "react";

function ShortDetail({ heading, Image, title, emptype, benefits }) {
  
       

return (
    <div>
      {heading === "Job type" ? (
        <div>
          <h3>{heading}</h3>
          <img src={Image} alt="title" height="30px" /> <span>{emptype}</span>{" "}
        </div>
      ) : heading === "Benefits" ? (
       
        
        <div>
          <h3> {heading} </h3>
          <img src={Image} alt="title" height="30px" /> <span>{title}</span>{" "}
        </div>
      ) : (
              
       <div>
          <h3> {heading} </h3>
          <img src={Image} alt="title" height="30px" /> <span>{title}</span>{" "}
        </div>
      )}
    </div>
  );
}

export default ShortDetail;
