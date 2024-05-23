import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Navbar.css'

function NavbarComp() {
    return (
        <Navbar className='pt-3 pb-3 sticky-top' direction="horizontal" expand='lg'>
            <Container>
                <div>
                    <i className="fa-icon fa-solid fa-bars"></i>
                </div>
                <div className='ms-auto'>
                    <i className="fa-icon fa-solid fa-bell"></i>
                </div>
            </Container>
        </Navbar>
        
    )
}

export default NavbarComp