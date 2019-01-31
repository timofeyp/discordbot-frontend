import React, { Component }                                     from 'react'
import '../styles/Login.css'
import { Navbar, FormControl, FormGroup, Button, NavItem, Glyphicon } from 'react-bootstrap'
import { connect }                                              from 'react-redux'
import { EXIT_FROM_SYSTEM, getReports } from 'actions/auth'
import { loginToSystem } from 'actions/auth'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      hasAuthorized: false
    }
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state);
  }

  onUnlogin = (e) => {
    const emptyState = { ...this.state, username: '', password: '' }
    this.setState(emptyState)
    e.preventDefault();
    this.props.onExit()
    localStorage.removeItem('jwtToken')
  }

    render() {
      if (!this.props.loggedIn) {
        return (
          <Navbar.Form pullRight>
            <FormGroup bsSize='small'>
              <FormControl  type='text' placeholder='Имя' onChange={e => this.onChange(e)} name='username'/>
            </FormGroup>{' '}
            <FormGroup bsSize='small'>
              <FormControl type='text' placeholder='Пароль' onChange={e => this.onChange(e)} name='password'/>
            </FormGroup>{' '}
            <Button bsSize='xsmall' onClick={e => this.props.onLogin(e, this.state)}>Вход</Button>
          </Navbar.Form>
        )
      } else  {
        return (
          <NavItem eventKey={3} href='#'>
            {this.props.loggedIn}
            {' '}
          <Button bsSize='xsmall' onClick={event => this.onUnlogin(event)}>
            <Glyphicon glyph="log-out" /> Выход
          </Button>
          </NavItem>
        )
      }
  }
}

export default connect(
  state => ({
    loggedIn: state.auth.loggedIn
  }),
  dispatch => ({
    onExit: () => {
      dispatch({ type: EXIT_FROM_SYSTEM })
    },
    onLogin: (event, authData) => dispatch(loginToSystem(event, authData))
  })
)(Login);