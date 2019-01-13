import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import '../styles/root.css'
import { connect } from 'react-redux'
import ReportList from './ReportsCarousel'
import Navibar from './Navbar'
import { loginToSystem } from '../actions/auth'

class Root extends Component {

  async componentDidMount () {
    if (localStorage.getItem('jwtToken')) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      await this.props.onLogin(null, { jwt: localStorage.getItem('jwtToken') })
      this.setState({ dataHasGot: true })
    }
  }

  render () {
    if (!this.props.auth.dataHasLoaded && this.props.auth.isLoading) {
      return <div className={'loading'}>LOADING</div>
    } else {
      return (
        <div className={'root'}>
          <Navibar />
          <div className={'report-list'}>
            <ReportList  />
          </div>
        </div>
      )
    }
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  dispatch => ({
    onLogin: (event, authData) => dispatch(loginToSystem(event, authData))
  })
)(Root)
