import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Navigation = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">CountDown</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">

                <Nav.Link href="#">Counter</Nav.Link>        
                <Nav.Link href="#">Get the Vaccine</Nav.Link>
                <Nav.Link href="#">Covid Tracker</Nav.Link>
                <Nav.Link href="#">Covid Theories</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>  
        </>
    )
}


export default Navigation