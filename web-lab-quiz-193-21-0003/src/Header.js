import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from './assets/images/brand.png';

export const Header = ()=>{
    return(
        <>
             <Navbar expand="lg" className="bg-body-tertiary mb-5">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={brand}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Product</Nav.Link>
                        <Nav.Link href="#action2">USe cases</Nav.Link>
                        <Nav.Link href="#action1">Pricing</Nav.Link>
                        <Nav.Link href="#action1">Customers</Nav.Link>
                        <Nav.Link href="#action1">Resources</Nav.Link>
                     </Nav>
                    <Button variant="outline-secondary" className="ms-2">Sign in</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
  );
      
}