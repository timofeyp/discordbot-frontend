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
    console.log(e)
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/login', { username, password })
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
        <FormControl type="text" placeholder="Имя" onChange={e => this.onChange(e)} />
      </FormGroup>{' '}
      <FormGroup>
        <FormControl type="text" placeholder="Пароль" onChange={e => this.onChange(e)}/>
      </FormGroup>{' '}
      <Button onClick={e => this.onSubmit(e)}>Логин</Button>
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