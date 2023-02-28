import React from 'react'
import Header from '../../Components/Header/Header';
import FindJob from '../../Components/Find-Job-section/FindJob';
import ThirdSection from '../../Components/Third-Section/ThirdSection';
import SeventhSection from '../../Components/Seventh-Section/SeventhSection';
import SectionEight from '../../Components/Section-Eight/SectionEight';
import SectionNine from '../../Components/Section-Nine/SectionNine';
import DesiredVenue from '../../Components/desired_venue/DesiredVenue'
import LatestSecurity from '../../Components/latest_security/LatestSecurity'
import Location from '../../Components/locations/Location'
import Footer from '../../Components/footer/Footer'
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
  )
}

export default HomePage;