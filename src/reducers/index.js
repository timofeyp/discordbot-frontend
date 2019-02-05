import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import reports from './reports'
import discordUsers from './discordUsers'
import requestConditions from './requestConditions'
import pagination from './pagination'
import settings from './settings'
import questions from './questions'

export default combineReducers({
  form: formReducer,
  auth,
  reports,
  discordUsers,
  requestConditions,
  pagination,
  settings,
  questions
})
