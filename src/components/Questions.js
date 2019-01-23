import React, { Component } from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col,
  Grid,
  ButtonToolbar,
  ButtonGroup,
  Button,
  Glyphicon,
  HelpBlock
} from 'react-bootstrap'
import { connect } from 'react-redux'
import '../styles/Questions.css'
import OutsideClickHandler from 'react-outside-click-handler'

class Questions extends Component {
  state = {
    questionsCache: [
      {
        current: '',
        prev: '',
      },
      {
        current: '',
        prev: '',
      },
    ]
  }


  handleChangeQuestionOne = (e, n) => {
    this.setState((prevState) => {
      let { questionsCache } = prevState
      questionsCache[n].current = e.target.value
      return questionsCache
    })
  }

  handleClickOutsideQuestionOne = (n) => {
    if (this.state.questionsCache[n].prev !== this.state.questionsCache[n].current) {
      this.setState((prevState) => {
        let { questionsCache } = prevState
        questionsCache[n].prev = questionsCache[n].current
        return questionsCache
      })
    }
  }


  render () {
    return (
      <FormGroup>
        <Row>
          <Col  xs={12} md={8}>
              <OutsideClickHandler  onOutsideClick={ () => this.handleClickOutsideQuestionOne(0) } >
                <FormControl
                  type="text"
                  placeholder="Enter text"
                  onChange={e => this.handleChangeQuestionOne(e)}
                />
              </OutsideClickHandler>
          </Col>
          <Col  xs={4} md={3}>
            <HelpBlock>Вопрос 1</HelpBlock>
          </Col>
        </Row>
        <Row>
          <Col  xs={12} md={8}>
            <FormControl
              type="text"

              placeholder="Enter text"

            />
          </Col>
          <Col  xs={4} md={3}>
            <HelpBlock>Вопрос 2</HelpBlock>
          </Col>
        </Row>
        <Row>
          <Col  xs={12} md={8}>
            <FormControl
              type="text"

              placeholder="Enter text"

            />
          </Col>
          <Col  xs={4} md={3}>
            <HelpBlock>Вопрос 3</HelpBlock>
          </Col>
        </Row>
      </FormGroup>
    )
  }
}

export default Questions