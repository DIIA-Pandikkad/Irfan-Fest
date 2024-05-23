import React from 'react'
import './About.css'
import FestLogo from '../../Assets/Images/LOGO P.png'
import { Col, Container, Row } from 'react-bootstrap'

function AboutComp() {
  return (
    <div id="about" class="d-none d-sm-none d-md-block">
      <Container>
        <Row>
          <Col md={4}>
            <div class="imgRound">
              <img class="about-logo p-1" src={FestLogo} alt="LOGO-P" border="0" />
            </div>
          </Col>
          <Col md={8} className='about-text position-relative'>
            <div className="position-absolute top-50 start-0 translate-middle-y">
              <h2>About KALATHALAM 2k23</h2>
              <p>Kalathalam 2023 filled up Darul Irfan Art's Fest. Stage, Non-Stage, and Sports programmes made up
                the program's structure. According to their classes, students are divided into Sub Junior,
                Junior, Senior, and Super Senior categories. The teams of Kalathalam were filled with Haqana,
                Murukkam, Thongal, and Pukainar the epics of Mappila pattu. This curriculum emphasises the
                hidden talents and diversity of the pupils to bring out their potential. The programme, which
                lasts for one month, concentrates the students' strengths as a group.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutComp