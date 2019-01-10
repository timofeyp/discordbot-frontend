import React, { Component }                                     from 'react'
import ReactDOM                                                 from 'react-dom'
import axios                                                    from 'axios'
import { Link }                                                 from 'react-router-dom'
import jwt_decode                                               from 'jwt-decode'
import '../styles/Login.css'
import { Navbar, FormControl, FormGroup, Button, NavItem, Glyphicon } from 'react-bootstrap'
import { connect }                                              from 'react-redux'
import { LOGIN_TO_SYSTEM, EXIT_FROM_SYSTEM, getReports } from '../actions/auth'
import { loginToSystem } from '../actions/auth'

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

  componentDidMount() {
    if (localStorage.getItem('jwtToken')) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      this.props.onLogin(null,{jwt: localStorage.getItem('jwtToken')}, this.props.store)
    }
  }


  onUnlogin = (e) => {
    const emptyState = { ...this.state, username: '', password: '' }
    this.setState(emptyState)
    e.preventDefault();
    this.props.onExit()
    localStorage.removeItem('jwtToken')
  }

    render() {
      if (!this.props.store.auth.loggedIn) {
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
            {this.props.store.auth.login}
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
  state => {
    return {store: state}
  },
  dispatch => ({
    // onLogin: (login) => {
    //   dispatch({ type: LOGIN_TO_SYSTEM, payload: login })
    // },
    onExit: () => {
      dispatch({ type: EXIT_FROM_SYSTEM })
    },
    onLogin: (event, authData, store) => dispatch(loginToSystem(event, authData, store))
  })
)(Login);