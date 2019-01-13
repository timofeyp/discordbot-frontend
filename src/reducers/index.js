import { combineReducers } from 'redux'

import auth from './auth'
import reports from './reports'
import discordUsers from './discordUsers'
import requestConditions from './requestConditions'
import pagination from './pagination'
import settings from './settings'

export default combineReducers({
  auth,
  reports,
  discordUsers,
  requestConditions,
  pagination,
  settings
})