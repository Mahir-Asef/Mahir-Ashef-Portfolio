import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg"  style={{backgroundColor:'#3C65BE'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Mahir Ashef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white fs-5">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className="text-white fs-5" >About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#skills" className="text-white fs-5">My Skills</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#project" className="text-white fs-5">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className="text-white fs-5">Contact With Me</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;