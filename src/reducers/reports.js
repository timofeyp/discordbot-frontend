import { PULL_REPORTS_FROM_DB, FILTER_REPORTS_BY_NAME } from '../actions/reports'

const initialState = []
const filterState = (state, filter) => {
  const newState = state
  return newState.filter(i => filter.includes(i.author))
}

const reports = (state = initialState, action) => {
  switch (action.type) {
    case PULL_REPORTS_FROM_DB:
      return action.payload
      break
    case FILTER_REPORTS_BY_NAME:
      if (action.payload.length) {
        const filteredArr = filterState(state, action.payload)
        return filteredArr
      } else {
        return state
      }
      break
    default:
      break
  }
  return state
}

export default reports
