import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import moment from 'moment'
import 'styles/ReportCarousel.css'

class Report extends Component {
  render () {
    return (
      <Jumbotron bsClass='jumbo' >
        <b>{this.props.report.author.name}</b>
        <br />
        <b>{moment(this.props.report.created).utcOffset(0).format('DD.MM.YYYY - kk:mm') }</b>
        <br />
        {this.props.report.reports.map(report => <p key={report._id}> <b>{report.reportNum}. </b> {report.text}</p>)}
        <br />
        <br />
      </Jumbotron >
    )
  }
}

export default Report
