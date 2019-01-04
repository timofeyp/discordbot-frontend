import { PULL_REPORTS_FROM_DB } from '../actions/reports'

const initialState = []

const reports = (state = initialState, action) => {
  switch (action.type) {
    case PULL_REPORTS_FROM_DB:
      return [ ...initialState, ...action.payload ]
      break
    default:
      break
  }
  return state
}

export default reports
