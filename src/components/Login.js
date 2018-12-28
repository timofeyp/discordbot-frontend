import React, { Component }                                     from 'react'
import ReactDOM                                                 from 'react-dom'
import axios                                                    from 'axios'
import { Link }                                                 from 'react-router-dom'
import jwt_decode                                               from 'jwt-decode'
import '../styles/Login.css'
import { Navbar, FormControl, FormGroup, Button, NavItem, Glyphicon } from 'react-bootstrap'
import { connect }                                              from 'react-redux'
import { LOGIN_TO_SYSTEM }                                      from '../actions'

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

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
    this.props.onLogin(jwt_decode(localStorage.getItem('jwtToken')).username)
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state
    axios.post('/api/login',  { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        this.props.onLogin(jwt_decode(result.data.token).username)
        console.log(jwt_decode(result.data.token).username)
        // this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' })
        }
      });
  }

    render() {
    console.log(this.props.authStore)
      if (!this.props.authStore.auth.loggedIn) {
        return (
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Имя" onChange={e => this.onChange(e)} name='username'/>
            </FormGroup>{' '}
            <FormGroup>
              <FormControl type="text" placeholder="Пароль" onChange={e => this.onChange(e)} name='password'/>
            </FormGroup>{' '}
            <Button onClick={e => this.onSubmit(e)}>Логин</Button>
          </Navbar.Form>
        )
      } else  {
        return (
          <NavItem eventKey={3} href='#'>
            Hello, {this.props.authStore.auth.login}
            {' '}
          <Button bsSize="xsmall">
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
    onLogin: (login) => {
      dispatch({ type: LOGIN_TO_SYSTEM, payload: login })
    }
  })
)(Login);