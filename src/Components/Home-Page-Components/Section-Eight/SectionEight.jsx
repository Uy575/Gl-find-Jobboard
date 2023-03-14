import React from "react";
import "./SectionEight.css"
import SubscribeForm from "../../Home-Page-Components/SubscribeForm/SubscribeForm";
import twittericon from "../../../Assets/Icons/twitter-img.svg"
import facebook from "../../../Assets/Icons/logo-fb-simple.svg";
import youtube from "../../../Assets/Icons/yt-img.svg";
import instagram from "../../../Assets/Icons/ig-img.svg";

function SectionEight() {

  return (
     
     <section className="sectionEight">
     <div className="container">
    <div className="mainContainer sectionEightBackground">
      <div>
        <h1 className="sectionEightHeading">Stay in the Know</h1>
        <span>Get the latest offers, tips and tricks!</span>
        <SubscribeForm/>
      </div>

      <div>
         <p className="sectionEightPera">Don’t get left out. Join the conversation.</p>
    
        <div className="sectionEightLi">
            <img src={twittericon} alt='twitter'/>
            <img src={facebook} alt='facebook'/>
            <img src={youtube} alt='youtube'/>
            <img src={instagram} alt='instagram'/>
        </div>
    
      </div>
    </div>
    </div>
    </section>

  );
}

export default SectionEight;
