import axios from 'axios'

export const PULL_REPORTS_FROM_DB = 'PULL_REPORTS_FROM_DB'

export const getReports = async (dispatch, conditions) => {
  const reports = await axios.get('/api/get-reports-secure', conditions)
  dispatch({ type: PULL_REPORTS_FROM_DB, payload: reports.data })
}
