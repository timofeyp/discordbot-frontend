import React, { Component } from 'react'
import {
  FormGroup,
  Row,
  Col,
}                           from 'react-bootstrap'
import { connect }          from 'react-redux'
import { compose }          from 'redux';
import { reduxForm, Field } from 'redux-form';
import 'styles/Questions.css'
import OutsideClickHandler  from 'react-outside-click-handler'
import { setQuetion }      from 'src/actions/questions'

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

  componentDidMount() {
    this.props.questions.data.forEach((question) => {
      this.props.array.push(('q' + question.num), question.text)
    })
  }

  handleChangeQuestion = (e, n) => {
    this.setState((prevState) => {
      let questionsCache = [ ...prevState.questionsCache ]
      questionsCache[n].current = e.target.value
      return questionsCache
    })
  }

  handleClickOutsideQuestion = (n) => {
    console.log(n)
    if (this.state.questionsCache[n].prev !== this.state.questionsCache[n].current) {
      this.props.onQuestionChange(n, this.state.questionsCache[n].current)
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
                    key={1}
                    className='text-input-form'
                    name="q1"
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
                  <Field
                    key={2}
                    className='text-input-form'
                    name="q2"
                    component="input"
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
                  <Field
                    key={3}
                    className='text-input-form'
                    name="q3"
                    component="input"
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
  questions: state.questions,
});

const mapDispatchToProps = dispatch => ({
  onQuestionChange: (num, text) => dispatch(setQuetion(num, text))
})

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);

export default compose(
  reduxForm({
    form: 'questions',
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Connected);