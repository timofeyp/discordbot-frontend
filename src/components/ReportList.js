import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import '../styles/ReportList.css'
import Login from './Login'
import { connect } from 'react-redux'

class ReportList extends Component {

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
    testStore: state
  }),
  dispatch => ({
    // onAddTrack: (trackName) => {
    //   dispatch({ type: 'ADD_TRACK', payload: trackName });
    // }
  })
)(ReportList);