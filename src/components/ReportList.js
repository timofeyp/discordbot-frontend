import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import '../styles/ReportList.css'
import Login from './Login'
import { connect } from 'react-redux'
import { getReports } from '../actions/'

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
    console.log(this.props.reports)
    return (
      <ListGroup>
        {this.props.reports.map(report => <ListGroupItem key={report._id}>report.author</ListGroupItem>)}
      </ListGroup>
    )
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
