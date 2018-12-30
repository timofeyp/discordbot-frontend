import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReportList from './components/ReportList'
import Navibar from './components/Navbar'
import './styles/index.css'
import combineReducers from './reducers'


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store


ReactDOM.render(
  <Provider store={store}>
    <Navibar />
    <ReportList />
  </Provider>,
  document.getElementById('root')
)

