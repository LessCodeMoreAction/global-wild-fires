import Head from 'next/head';

import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => (


    
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "black"}}>
    <Navbar.Brand href="#" className="d-inline">
        <img 
            src="/images/world.svg"
            width="30"
            height="30"
            className="d-inline-block  align-top mr-md-1"
            alt="World Logo"
          />
         
        <h5 className="text-white d-inline align-top">
        
            #Savetheplanet
         
        </h5> 
     


        </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="w-100 justify-content-center">
        <Navbar.Brand href="#home" style={{ fontWeight: "", color: "white"}}>GLOBAL WILD FIRES</Navbar.Brand>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>

);

export default Header;