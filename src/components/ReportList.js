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
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log(nextProps.auth)
    console.log(this.props.auth)
    if (nextProps.auth && !this.props.auth) {
      this.props.onGetReports()
    }
  }

  render () {
    console.log(this.props.reports)
    return (
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    )
  }
}

export default connect(
  state => ({
    auth: state.auth.loggedIn,
    reports: state.reports
  }),
  dispatch => {
    return {
      onGetReports: () => dispatch(getReports())
    }
  }
)(ReportList)
