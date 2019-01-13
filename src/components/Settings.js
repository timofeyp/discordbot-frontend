import React, { Component } from 'react'
import axios from 'axios'
import { FormGroup, HelpBlock, ControlLabel, FormControl, Checkbox, Col, Row, ButtonGroup, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap'
import connect from 'react-redux/es/connect/connect'
import '../styles/Settings.css'
import { setSettings } from '../actions/settings'

class Settings extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
    this.handleClickHoursUp = this.handleClickHoursUp.bind(this)
    this.handleClickHoursDown = this.handleClickHoursDown.bind(this)
    this.handleClickMinutesUp = this.handleClickMinutesUp.bind(this)
    this.handleClickMinutesDown = this.handleClickMinutesDown.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)

    this.state = {
      value: '',
      checkbox: [],
      onlineStatus: false,
      token: ''
    }
  }

  componentDidMount () {
    this.checkStatus()
    setInterval(() => {
      this.checkStatus()
    }, 30000)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.settings.pollDaysOfWeek === ' ') {
      return { ...prevState, checkbox: [], token: nextProps.settings.token }
    } else if (nextProps.settings.pollDaysOfWeek.length) {
      return { ...prevState, checkbox: nextProps.settings.pollDaysOfWeek.trim().split(',').map(i => parseInt(i)), token: nextProps.settings.token  }
    } else {
      return prevState
    }
  }


  checkStatus = async () => {
    const status = await axios.get('/api/get-status-secure')
    this.setState({ onlineStatus: status.data.onlineStatus })
  }

  getValidationState () {
    const length = this.state.value.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
    // this.props.settings.token
    this.props.onSettingsChange({ ...this.props.settings, token: e.target.value })

  }

  handleCheckbox (e) {
    let newPollDaysOfWeek = []
    if (this.state.checkbox.includes(e)) {
      newPollDaysOfWeek = [ ...this.state.checkbox.filter(item => item !== e) ]
      console.log(newPollDaysOfWeek)
      if (newPollDaysOfWeek.length) {
        this.props.onSettingsChange({ ...this.props.settings, pollDaysOfWeek: newPollDaysOfWeek.toString().replace(/ /g, '') })
      } else {
        this.props.onSettingsChange({ ...this.props.settings, pollDaysOfWeek: ' ' })
      }
    } else {
      newPollDaysOfWeek = [ ...this.state.checkbox.concat(e) ]
      console.log(newPollDaysOfWeek)
      console.log(newPollDaysOfWeek.toString().replace(/ /g, ''))
      this.props.onSettingsChange({ ...this.props.settings, pollDaysOfWeek: newPollDaysOfWeek.toString().replace(/ /g, '') })
    }
  }

  handleClickHoursUp (e) {
    e.preventDefault()
    this.props.onSettingsChange({ ...this.props.settings, pollHours: ((this.props.settings.pollHours < 23) ? ++this.props.settings.pollHours : 0) })
  }

  handleClickHoursDown (e) {
    e.preventDefault()
    this.props.onSettingsChange({ ...this.props.settings, pollHours: ((this.props.settings.pollHours > 0) ? --this.props.settings.pollHours : 23) })
  }

  handleClickMinutesUp (e) {
    e.preventDefault()
    this.props.onSettingsChange({ ...this.props.settings, pollMinutes: ((this.props.settings.pollMinutes < 59) ? ++this.props.settings.pollMinutes : 0) })
  }

  handleClickMinutesDown (e) {
    e.preventDefault()
    this.props.onSettingsChange({ ...this.props.settings, pollMinutes: ((this.props.settings.pollMinutes > 0) ? --this.props.settings.pollMinutes : 59) })
  }

  render () {
    return (
      <form >
        <FormGroup
          controlId='formBasicText'
          validationState={this.getValidationState()}
        >
          <ControlLabel>Token <Glyphicon glyph='off' style={{ color: this.state.onlineStatus ? 'green' : 'red' }} /></ControlLabel>
          <FormControl
            type='text'
            value={this.state.token}
            placeholder='Необходимо ввести token бота'
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup >
          <Checkbox inline onChange={() => this.handleCheckbox(1)} checked={this.state.checkbox.includes(1)}>Пн</Checkbox>
          <Checkbox inline onChange={() => this.handleCheckbox(2)} checked={this.state.checkbox.includes(2)}>Вт</Checkbox>
          <Checkbox inline onChange={() => this.handleCheckbox(3)} checked={this.state.checkbox.includes(3)}>Ср</Checkbox>
          <Checkbox inline onChange={() => this.handleCheckbox(4)} checked={this.state.checkbox.includes(4)}>Чт</Checkbox>
          <Checkbox inline onChange={() => this.handleCheckbox(5)} checked={this.state.checkbox.includes(5)}>Пт</Checkbox>
          <Checkbox inline onChange={() => this.handleCheckbox(6)} checked={this.state.checkbox.includes(6)}>Сб</Checkbox>
          <Checkbox inline onChange={() => this.handleCheckbox(7)} checked={this.state.checkbox.includes(7)}>Вс</Checkbox>
          <div className={'time-change'} >
            <ButtonToolbar>
              <ButtonGroup bsSize='small'>
                <Button onClick={(e) => this.handleClickHoursDown(e)}>-</Button>
                <Button disabled>{this.props.settings.pollHours}</Button>
                <Button onClick={(e) => this.handleClickHoursUp(e)}>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
            &nbsp;
            &nbsp;
            &nbsp;
            <ButtonToolbar>
              <ButtonGroup bsSize='small'>
                <Button onClick={(e) => this.handleClickMinutesDown(e)}>-</Button>
                <Button disabled>{this.props.settings.pollMinutes}</Button>
                <Button onClick={(e) => this.handleClickMinutesUp(e)}>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </FormGroup>

      </form>
    )
  }
}

export default connect(
  state => ({
    settings: state.settings
  }),
  dispatch => ({
    onSettingsChange: (settings) => dispatch(setSettings(settings))
  })
)(Settings)
