import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap'
import '../styles/ReportList.css'
import Login from './Login'
import { connect } from 'react-redux'
import { getReports } from '../actions/reports'
import Report from './Report'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'


class ReportList extends Component {
  constructor (props) {
    super(props)

    this.state = { skip: 0 }
  }

  componentWillMount () {
    window.onscroll = () => {
      console.log(this.state)
      const scrolled = window.pageYOffset || document.documentElement.scrollTop
      console.log(scrolled)
      if (scrolled > 500) {
        let i = this.state.skip
        this.setState({ ...this.state.skip, skip: ++i })
        console.log(this.state)
        this.props.onGetReports({ limit: 2, skip: this.state.skip })
        window.scrollTo(0, 0)
      }
    }
  }

  render () {
    if (this.props.auth) {
      return (
        <div className={'listGroup'}>
          <Slider >
            {this.props.reports.map(report => <Report className={ListGroup} key={report._id} report={report} />)}
          </Slider>
        </div>
      )
    } else {
      return (
        <Alert bsStyle='danger' ref={'list'}>
          <strong>Необходимо выполнить вход для доступа к данным!</strong>
        </Alert>
      )
    }
  }
}

export default connect(
  state => ({
    auth: state.auth.loggedIn,
    reports: state.reports
  }),
  dispatch => ({
    onGetReports: (conditions) => getReports(dispatch, conditions)
  })
)(ReportList)
