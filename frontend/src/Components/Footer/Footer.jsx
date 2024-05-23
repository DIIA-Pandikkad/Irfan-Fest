import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import Logo from '../../Assets/Images/fest logo black.jpg'

function FooterComp() {
  return (
    <div id='footer' className='pt-5 pb-5'>
      <Container className=''>
        <Row>
          <Col md={6} >
            <h1 class="text-left">Irfan art Fest <br /> Kalathalam 2K23 <br /> Creating blasts</h1>

            <div className="about-us pt-5">
              <p className='title'>About Us</p>
              <br />
              <p className='content'>Kalathalam 2023 filled up Darul Irfan Art's Fest. Stage, Non-Stage, and Sports programmes made up
                the program's structure. According to their classes, students are divided into Sub Junior,
                Junior, Senior, and Super Senior categories. The teams of Kalathalam were filled with Haqana,
                Murukkam, Thongal, and Pukainar the epics of Mappila pattu. This curriculum emphasises the
                hidden talents and diversity of the pupils to bring out their potential. The programme, which
                lasts for one month, concentrates the students' strengths as a group.
              </p>
            </div>
          </Col>
          <Col md={6} className=''>
            <img className='footer-logo p-1' src={Logo} alt='footer-logo' />
            <div className='contact-us'>
              <p className='title me-auto'>Contact Us</p>
              <br />
              <p className='content'>Darul Irfan Arts & Science College, <br />
                Darul Irfan Campus, Chemmad, <br />
                Malappuram, Kerala, India, 676306 <br />
                Email:darulirfanpandikkad@gmail.com
                <a href="mailto:darulirfanpandikkad@gmail.com" />
              </p>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/irfanfest" target="_blank" rel="noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/irfanfest/" target="_blank" rel="noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCI2UZ1g7aJN4nVJzH5r2h8Q" target="_blank" rel="noreferrer">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComp