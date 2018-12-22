import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import Navibar from './components/Navbar'
import './styles/index.css'
import combineReducers from './reducers'

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Navibar />
  </Provider>,
  document.getElementById('root')
)
