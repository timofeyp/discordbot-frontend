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
import Report  from './Report'

class ReportList extends Component {
  componentDidMount () {
    console.log(this.props.auth)
  }

  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   if (nextProps.auth && !this.props.auth) {
  //    console.log(nextState)
  //   }
  // }

  render () {
    if (this.props.auth) {
      return (
        <div className={'listGroup'}>
          <ListGroup >
            {this.props.reports.map(report => <Report className={ListGroup} key={report._id} report={report} />)}
          </ListGroup>
        </div>
      )
    } else {
      return (
        <Alert bsStyle='danger'>
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
    onGetReports: () => dispatch(getReports())
  })
)(ReportList)
