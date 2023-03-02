import React from "react";
import Header from "../../Components/Home-Page-Components/Header/Header";
import FindJob from "../../Components/Home-Page-Components/Find-Job-section/FindJob";
import ThirdSection from "../../Components/Home-Page-Components/Third-Section/ThirdSection";
import SeventhSection from "../../Components/Home-Page-Components/Seventh-Section/SeventhSection";
import SectionEight from "../../Components/Home-Page-Components/Section-Eight/SectionEight";
import SectionNine from "../../Components/Home-Page-Components/Section-Nine/SectionNine";
import DesiredVenue from "../../Components/Home-Page-Components/desired_venue/DesiredVenue";
import LatestSecurity from "../../Components/Home-Page-Components/latest_security/LatestSecurity";
import Location from "../../Components/Home-Page-Components/locations/Location";
import Footer from "../../Components/Home-Page-Components/footer/Footer";
function HomePage() {
  return (
    <>
      <Header/>
    <FindJob/>
    <ThirdSection/>
    <LatestSecurity/>
    <DesiredVenue/>
    <Location/>
    <SeventhSection/>
    <SectionEight/>
    <SectionNine/>
    <Footer/>
    </>
  );
}

export default HomePage;
