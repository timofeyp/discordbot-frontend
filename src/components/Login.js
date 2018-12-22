import React, { Component }                                        from 'react';
import ReactDOM                                                    from 'react-dom';
import axios                                                       from 'axios';
import { Link }                                                    from 'react-router-dom';
import '../styles/Login.css';
import { Navbar, FormControl, FormGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  sendAuthData() {
    this.props.onLogin(this.loginInput.value)
    console.log(this.props.testStore)
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Имя" inputRef={(input) => {this.loginInput = input}}/>
      </FormGroup>{' '}
      <FormGroup>
        <FormControl type="text" placeholder="Пароль" inputRef={(input) => {this.passInput = input}}/>
      </FormGroup>{' '}
      <Button onClick={this.sendAuthData.bind(this)}>Логин</Button>
    </Navbar.Form>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onLogin: (login) => {
      dispatch({ type: 'LOGIN_TO_SYSTEM', payload: login });
    }
  })
)(Login);