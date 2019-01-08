import axios from 'axios'

export const PULL_REPORTS_FROM_DB = 'PULL_REPORTS_FROM_DB'
export const FILTER_REPORTS_BY_NAME = 'FILTER_REPORTS_BY_NAME'

export const getReports = async (dispatch, conditions) => {
  console.log(conditions)
  const reports = await axios.post('/api/get-reports-secure', conditions)
  console.log(reports)
  // reports.data.sort((a, b) => {
  //   return new Date(b.created) - new Date(a.created)
  // })
  dispatch({ type: PULL_REPORTS_FROM_DB, payload: reports.data.docs })
}
