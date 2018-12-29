import { combineReducers } from 'redux'

import auth from './auth'
import reports from './reports'

export default combineReducers({
  auth,
  reports
})