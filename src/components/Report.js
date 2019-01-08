import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListGroup, ListGroupItem, Alert, Jumbotron, Button } from 'react-bootstrap'
import '../styles/ReportList.css'
import Login from './Login'
import { connect } from 'react-redux'
import { getReports } from '../actions/reports'

class Report extends Component {

  render () {
    return (
      <Jumbotron bsClass='jumbo' >
        <b>{this.props.report.author.name}</b>
        <br/>
        <b>{this.props.report.created}</b>
        <br/>
        {this.props.report.reports.map(report => <p key={report._id}> <b>{report.reportNum}. </b> {report.text}</p>)}
        <br/>
        <br/>
      </Jumbotron >
    )
  }
}

export default Report