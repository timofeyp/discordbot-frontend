import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, FieldGroup, FormControl, FormGroup, Button } from 'react-bootstrap'
import '../styles/Navbar.css';
import Login  from './Login';


class Navibar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">DISCORD BOT MENU</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight={true} className='form'>
             <NavItem eventKey={1} href="#">
              Link
             </NavItem>
             <NavItem eventKey={2} href="#">
                Link
             </NavItem>
        <Login/>
        </Nav>

      </Navbar>
    )
  }
}

export default Navibar