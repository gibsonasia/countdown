import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

import './index.css'
const Navigation = () => {
    return (
        <>
        <div className='navigation'>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">

                <Nav.Link href="#about">About</Nav.Link>        
                <Nav.Link href="#highlights">Highlights</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>  
        </div>
        </>
    )
}


export default Navigation