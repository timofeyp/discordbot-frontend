import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import '../styles/Navbar.css'
import Login from './Login'
import { connect } from 'react-redux'

class Navibar extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {

  }

  render () {
    if (this.props.auth) {
      return (
        <Navbar className={'form'}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>DISCORD BOT MENU</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className='form'>
            <NavItem eventKey={1} href='#'>
              Link
            </NavItem>
            <NavItem eventKey={2} href='#'>
              Link
            </NavItem>
            <Login />
          </Nav>
        </Navbar>
      )
    } else {
      return (
        <Navbar className={'form'}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>DISCORD BOT MENU</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className='form'>
            <Login />
          </Nav>
        </Navbar>
      )
    }
  }
}

export default connect(
  state => ({
    auth: state.auth.loggedIn
  }),
  dispatch => ({
    // onAddTrack: (trackName) => {
    //   dispatch({ type: 'ADD_TRACK', payload: trackName });
    // }
  })
)(Navibar)
