import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  Row,
  Col,
}                           from 'react-bootstrap'
import { connect }          from 'react-redux'
import { compose }          from 'redux';
import { reduxForm, Field } from 'redux-form';
import 'styles/Questions.css'
import OutsideClickHandler  from 'react-outside-click-handler'
import axios                from 'axios'
import { setSettings }      from 'src/actions/settings'

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
                <Field
                  name="question0"
                  component="input"
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

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  onSettingsChange: (settings) => dispatch(setSettings(settings))
})

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);

export default compose(
  reduxForm({
    form: 'questions',
    initialValues: {
      question0() {
        setTimeout(()=> 2, 2000)
      }
    }
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Connected);