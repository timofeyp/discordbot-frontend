import axios from 'axios'


export const LOGIN_TO_SYSTEM = 'LOGIN_TO_SYSTEM'
export const EXIT_FROM_SYSTEM = 'EXIT_FROM_SYSTEM'
export const PULL_REPORTS_FROM_DB = 'PULL_REPORTS_FROM_DB'

export const getReports = conditions => async dispatch => {
  const reports = await axios.get('/api/get-reports-secure', conditions)
  return dispatch({ type: PULL_REPORTS_FROM_DB, payload: reports })
}