import React from "react";
import TopJobList from "./TopJobList";
import { addingTopProducts } from "../../../Redux/TopJobReduer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
function TopJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addingTopProducts(
        "https://staging.get-licensed.co.uk/guardpass/api/public/top/jobs"
      )
    );
  }, []);

  return(
     <>
     <div className="ls_container">
     <h1 className="main-heading">Latest Security Vacancies</h1>
     </div>
     
     <div style={{display:'flex'}} >
     <TopJobList />
     </div>
     <div className="ls_container">
     <button className="ls_button">Explore More Jobs</button>
     </div>
     </>
  )
}

export default TopJobs;
