import React from 'react'
import ArtImage from '../../Assets/Images/Untitled-1.png'
import CampusImage from '../../Assets/Images/DJI_0753.JPG'
import FestLogo from '../../Assets/Images/LOGO P.png'
import './Home.css'
import Marquee from 'react-fast-marquee'
import { Button } from 'react-bootstrap'
import MarqueeAsst from '../../Assets/Marquee'


function HomeComp() {

  let marquee = {
    marqueeSmall: {
      marqueeText: 'IRFAN_FEST  #KALATHALAM 2K23 #',
      marqueeTextStyle: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
      marqueeStyle: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        textWrap: 'nowrap',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '7px 0px 2px 0px',
        border: '3px solid #000000',
        borderStyle: 'solid none',
      }
    }
  }
  return (
    <div id='home' className='position-relative' style={{
      backgroundImage: `linear-gradient(#7b5aff70, #7b5aff70), url(${CampusImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      marginTop: '-70px'
    }}>

      <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{
        height: '300px',
        width: '100%',
        backgroundColor: '#7b5aff',
      }}>
        <img className='p-1 shadow-lg fest-logo position-absolute top-0 start-50 translate-middle' src={FestLogo} alt="" />
        
        <MarqueeAsst marquee={marquee} marqueeSmall={true} />
        <div className='res'>
          <Button className='position-absolute top-50 start-50 translate-middle-x result-btn' style={{

          }}>Check Result</Button>
        </div>

      </div>
    </div>
  )
}

export default HomeComp