import React from 'react'
import './LandingPage.css'
import NavbarComp from '../../Components/Navbar/Navbar'
import HomeComp from '../../Components/Home/Home'
import AboutComp from '../../Components/About/About'
import FooterComp from '../../Components/Footer/Footer'
import StatusComp from '../../Components/Status/Status'
import GalleryComp from '../../Components/Gallery/Gallery'
import ScheduleComp from '../../Components/Schedule/Schedule'

function LandingPage() {
    return (
        <div>
            <NavbarComp />
            <HomeComp />
            <div style={{
                backgroundColor: '#e9da26',
            }}>
                <StatusComp />
                <hr style={{
                    border: '1px solid #7b5aff',
                    width: '80%',
                    margin: 'auto',
                    opacity: '1'

                }} />
                <GalleryComp />
            </div>
            <ScheduleComp />
            <FooterComp />
        </div>
    )
}

export default LandingPage