import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReportList from './components/ReportList'
import Navibar from './components/Navbar'
import SelectMenu from './components/SelectMenu'
import NextButton from './Components/NextButton'
import PreviousButton from './Components/PreviousButton'
import './styles/index.css'
import combineReducers from './reducers'
import { Grid, Row, Col } from 'react-bootstrap'


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store


ReactDOM.render(
  <Provider  store={store}>
    <div >
      <Navibar  />
    </div>
    <br/>
    <br/>
    <div className={'root'} >
      <div className={'prev-button'}>
        <div className={'prev-button-position'}>
          <PreviousButton />
        </div>
      </div>
      <div className={'report-list'}>
        <ReportList />
      </div>
      <div className={'next-button'}>
        <div className={'next-button-position'}>
          <NextButton />
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
)

