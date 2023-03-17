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
      <div className="sectionEightContent">
        <h1 className="sectionEightHeading">Stay in the Know</h1>
        <span>Get the latest offers, tips and tricks!</span>
        <SubscribeForm/>
      </div>

      <div>
         <p className="sectionEightPera">Don’t get left out. Join the conversation.</p>
    
        <div className="sectionEightLi">
          <a href="https://twitter.com/get_licensed" target='_blank'><img src={twittericon} alt='twitter'/> </a>
          <a href="https://www.facebook.com/getlicensed" target='_blank'><img src={facebook} alt='facebook'/></a> 
          <a href="https://www.youtube.com/c/getlicensed" target='_blank'><img src={youtube} alt='youtube'/></a>
          <a href="https://www.instagram.com/getlicensed/?fbclid=IwAR0PBUkG9zUoZB30vVUVAcpse-Y6AYdNnuUd-J7VeWbgQlsQqa71XfYrDAg" target='_blank'><img src={instagram} alt='instagram'/></a>
        </div>
    
      </div>
    </div>
    </div>
    </section>

  );
}

export default SectionEight;
