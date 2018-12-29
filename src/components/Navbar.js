import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import '../styles/Navbar.css'
import Login from './Login'
import { connect } from 'react-redux'

class Navibar extends Component {

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <Navbar>
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
  }
}


export default connect(
  state =>
    {
    return {testStore: state}

  },
  dispatch => ({
    // onAddTrack: (trackName) => {
    //   dispatch({ type: 'ADD_TRACK', payload: trackName });
    // }
  })
)(Navibar);
