import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Jumbotron } from 'react-bootstrap'

class Calendar extends Component {

  render () {
    return (
      <DayPicker />
    )
  }
}

export default Calendar