import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import '../styles/ReportList.css'
import Login from './Login'
import { connect } from 'react-redux'
import { getReports } from '../actions/reports'

class ReportList extends Component {
  componentDidUpdate(prevProps) {
    this.props.onGetReports
  }


  render () {
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
    auth: state.auth.loggedIn
  }),
  dispatch => ({
    // onAddTrack: (trackName) => {
    //   dispatch({ type: 'ADD_TRACK', payload: trackName })
    // }
    onGetReports: () => {
      //dispatch(getReports())
    }
  })
)(ReportList)