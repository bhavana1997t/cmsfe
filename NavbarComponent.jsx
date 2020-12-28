import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.jpg';
import './Nav.css';




class NavbarComponent extends Component {
 
  render() {
    return (
      <Router>
               <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand exact href="/"><img src={logo}></img><strong>Customiszer</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            </Navbar>
      </Router>
    );
    }
  }

export default NavbarComponent;