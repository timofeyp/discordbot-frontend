import React, { Component }                                     from 'react'
import ReactDOM                                                 from 'react-dom'
import axios                                                    from 'axios'
import { Link }                                                 from 'react-router-dom'
import jwt_decode                                               from 'jwt-decode'
import '../styles/Login.css'
import { Navbar, FormControl, FormGroup, Button, NavItem, Glyphicon } from 'react-bootstrap'
import { connect }                                              from 'react-redux'
import { LOGIN_TO_SYSTEM, EXIT_FROM_SYSTEM, getReports } from '../actions'
import { loginToSystem } from '../actions/auth'

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state);
  }

  // componentDidMount() {
  //   if (localStorage.getItem('jwtToken')) {
  //     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
  //     console.log(jwt_decode(localStorage.getItem('jwtToken')).username)
  //     //this.props.onLogin(jwt_decode(localStorage.getItem('jwtToken')).username)
  //   }
  // }


  onSubmit = (e) => {
    console.log(loginToSystem)
    // e.preventDefault();
    // const { username, password } = this.state
    // axios.post('/api/login',  { username, password })
    //   .then((result) => {
    //     localStorage.setItem('jwtToken', result.data.token)
    //     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
    //     this.props.onLogin(jwt_decode(result.data.token).username)
    //     this.props.history.push('/')
    //   })
    //   .catch((error) => {
    //     if(error.response.status === 401) {
    //       this.setState({ message: 'Login failed. Username or password not match' })
    //     }
    //   });
  }

  onUnlogin = (e) => {
    const emptyState = { ...this.state, username: '', password: '' }
    this.setState(emptyState)
    e.preventDefault();
    this.props.onExit()
    localStorage.removeItem('jwtToken')
  }

    render() {
      if (!this.props.authStore.auth.loggedIn) {
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
            {this.props.authStore.auth.login}
            {' '}
          <Button bsSize='xsmall' onClick={e => this.onUnlogin(e)}>
            <Glyphicon glyph="log-out" /> Выход
          </Button>
          </NavItem>
        )
      }
  }
}

export default connect(
  state => {
    return {authStore: state}
  },
  dispatch => ({
    // onLogin: (login) => {
    //   dispatch({ type: LOGIN_TO_SYSTEM, payload: login })
    // },
    onExit: () => {
      dispatch({ type: EXIT_FROM_SYSTEM })
    },
    onLogin: (e, authData) => dispatch(loginToSystem(e, authData))
  })
)(Login);