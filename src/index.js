import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReportList from './components/ReportsCarousel'
import Root from './components/Root'
import SelectMenu from './components/SelectMenu'

import './styles/root.css'
import combineReducers from './reducers'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'


const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });


const store = createStore(combineReducers,  composeEnhancers(
  applyMiddleware( thunk)
))
//const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store

ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('root')
)
