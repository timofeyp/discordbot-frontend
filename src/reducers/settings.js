import { GET_SETTINGS_FROM_DB } from '../actions/settings'

const initialState = {
  pollDaysOfWeek: ' ',
  pollHours: 0,
  pollMinutes: 0,
  token: ' '
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case GET_SETTINGS_FROM_DB:
      return { ...initialState, ...action.payload }
      break
    default:
      break
  }
  return state
}

export default settings