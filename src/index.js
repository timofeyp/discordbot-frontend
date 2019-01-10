import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReportList from './components/ReportsCarousel'
import Navibar from './components/Navbar'
import SelectMenu from './components/SelectMenu'

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
      <div className={'report-list'}>
        <ReportList />
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
)

