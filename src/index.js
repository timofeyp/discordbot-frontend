import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Root from './components/Root'
import { BrowserRouter } from 'react-router-dom'
import './styles/root.css'
import combineReducers from './reducers'



const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });


const store = createStore(combineReducers,  composeEnhancers(
  applyMiddleware( thunk)
))
//const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
