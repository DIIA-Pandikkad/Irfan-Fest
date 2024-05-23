import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Status.css'

function StatusComp() {
    const speed = 10000;

    useEffect(() => {
        const counters = document.querySelectorAll('.value');
        const sec = document.querySelector('#status');

        if (sec) {
            window.onload = () => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 600;
                let height = sec.offsetHeight;

                if (top >= offset && top <= offset + height) {
                    startCount();
                }
                else {
                    window.addEventListener('scroll', () => {
                        let top = window.scrollY;
                        let offset = sec.offsetTop - 400;
                        let height = sec.offsetHeight;

                        if (top >= offset && top <= offset + height) {
                            startCount();
                        }
                    });
                }
            }
        }

        const startCount = () => {

            counters.forEach(counter => {
                const animate = () => {
                    const value = +counter.getAttribute('akhi');
                    const data = +counter.innerText;

                    const time = value / speed;
                    if (data < value) {
                        counter.innerText = Math.ceil(data + time);
                        setTimeout(animate, 1);
                    } else {
                        counter.innerText = value;
                    }

                }

                animate();
            });
        }
    }, []);



    return (
        <div id="status" class="pt-5 pb-5 sec-3">
            <Container>
                <Row>
                    <Col md={3} className="text-center status-item">
                        <div class="d-flex justify-content-center">
                            <h2 class="value" akhi="4">0</h2>
                        </div>

                        <span></span>
                        <p>Teams</p>
                    </Col>
                    <Col md={3} className="text-center status-item">
                        <div class="d-flex justify-content-center">
                            <h2 class="value" akhi="300">0</h2>
                            <h2> +</h2>
                        </div>

                        <span></span>
                        <p>Candidates</p>
                    </Col>
                    <Col md={3} className="text-center status-item">
                        <div class="d-flex justify-content-center">
                            <h2 class="value" akhi="4">0</h2>
                        </div>

                        <span></span>
                        <p>Sections</p>
                    </Col>
                    <Col md={3} className="text-center status-item">
                        <div class="d-flex justify-content-center">
                            <h2 class="value" akhi="600">0</h2>
                            <h2> +</h2>
                        </div>

                        <span></span>
                        <p>Programmes</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StatusComp