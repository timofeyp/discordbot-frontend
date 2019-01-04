import { combineReducers } from 'redux'

import auth from './auth'
import reports from './reports'
import discordUsers from './discordUsers'

export default combineReducers({
  auth,
  reports,
  discordUsers
})