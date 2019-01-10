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
import Carousel from 'react-slick'
import 'react-animated-slider/build/horizontal.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class ReportsCarousel extends Component {
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log(nextState)
    return true
  }

  constructor (props) {
    super(props)

    this.state = {
      skip: 0,
      slideIndex: 0,
      settings: {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => {
          this.setState({ slideIndex: (index + 1)} )
          console.log(this.state)
        }
      }
    }
  }

  componentWillMount () {
  }

  render () {
    if (this.props.auth) {
      return (
        <div className={'listGroup'}>
          <Carousel {...this.state.settings}>
            {this.props.reports.map(report => <Report className={ListGroup} key={report._id} report={report} />)}
          </Carousel>
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
    reports: state.reports,
    pages: state.requestConditions.pages
  }),
  dispatch => ({
    onGetReports: (conditions) => getReports(dispatch, conditions)
  })
)(ReportsCarousel)