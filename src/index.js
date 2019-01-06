import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReportList from './components/ReportList'
import Navibar from './components/Navbar'
import SelectMenu from './components/SelectMenu'
import './styles/index.css'
import combineReducers from './reducers'
import { Grid, Row, Col } from 'react-bootstrap'


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store


ReactDOM.render(
  <Provider  store={store}>
    <div>
      <Navibar className={'navibar'} />
    </div>
    <div className={'root'} >
      <div className={'select-menu'}>
        <div className={'select-menu-position'}>
          <SelectMenu />
        </div>
      </div>
      <div className={'report-list'}>
        <ReportList />
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
)

