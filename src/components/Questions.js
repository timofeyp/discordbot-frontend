import React, { Component } from 'react'
import {
  FormGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import 'styles/Questions.css'
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
      {
        current: '',
        prev: '',
      },
    ]
  }


  handleChangeQuestion = (e, n) => {
    e.persist()
    this.setState((prevState) => {
      let { questionsCache } = prevState
      questionsCache[n].current = e.target.value
    })
  }

  handleClickOutsideQuestion = (n) => {
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
          <Col  xs={12} md={12}>
              <OutsideClickHandler  onOutsideClick={ () => this.handleClickOutsideQuestion(0) } >
                <FormControl
                  type="text"
                  placeholder="Вопрос 1"
                  onChange={e => this.handleChangeQuestion(e, 0)}
                />
              </OutsideClickHandler>
          </Col>
        </Row>
        <Row>
          <Col  xs={12} md={12}>
            <OutsideClickHandler  onOutsideClick={ () => this.handleClickOutsideQuestion(1) } >
              <FormControl
                type="text"
                placeholder="Вопрос 2"
                onChange={e => this.handleChangeQuestion(e, 1)}
              />
            </OutsideClickHandler>
          </Col>
        </Row>
        <Row>
          <Col  xs={12} md={12}>
            <OutsideClickHandler  onOutsideClick={ () => this.handleClickOutsideQuestion(2) } >
              <FormControl
                type="text"
                placeholder="Вопрос 3"
                onChange={e => this.handleChangeQuestion(e, 2)}
              />
            </OutsideClickHandler>
          </Col>
        </Row>
      </FormGroup>
    )
  }
}

export default Questions