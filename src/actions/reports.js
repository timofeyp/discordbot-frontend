import axios from 'axios'

export const getReports = (conditions) => async dispatch => {
  const reports = await axios.get('/api/get-reports-secure', conditions)
  dispatch({ type: 'PULL_REPORTS_FROM_DB', payload: reports })
}
