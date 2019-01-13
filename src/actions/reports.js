import axios from 'axios'

export const PULL_REPORTS_FROM_DB = 'PULL_REPORTS_FROM_DB'
export const ADD_NEXT_PAGE_REPORTS_FROM_DB = 'ADD_NEXT_PAGE_REPORTS_FROM_DB'
export const ADD_PREV_PAGE_REPORTS_FROM_DB = 'ADD_PREV_PAGE_REPORTS_FROM_DB'
export const FILTER_REPORTS_BY_NAME = 'FILTER_REPORTS_BY_NAME'
import { CHANGE_REQUEST_CONDITIONS_PAGE } from '../actions/requestConditions'
import { CHANGE_PAGINATION } from './pagination'


export const getReports = (dispatch, conditions) => new Promise(async resolve => {
  const reports = await axios.post('/api/get-reports-secure', conditions)
  const paginationObj = { ...reports.data }
  if (paginationObj.docs) {
    delete paginationObj.docs
  }
  dispatch({ type: CHANGE_PAGINATION, payload: paginationObj })
  dispatch({ type: PULL_REPORTS_FROM_DB, payload: reports.data.docs })
  resolve()
})

export const getNextPageReports = () => {

  return async (dispatch, getState) => {
    if (getState().pagination.hasNextPage){
      dispatch({ type: CHANGE_REQUEST_CONDITIONS_PAGE, payload: (getState().requestConditions.page + 1) })
      const reports = await axios.post('/api/get-reports-secure', { ...getState().requestConditions, page: getState().requestConditions.page })
      const paginationObj = { ...reports.data }
      if (paginationObj.docs) {
        delete paginationObj.docs
      }
      dispatch({ type: CHANGE_PAGINATION, payload: paginationObj })
      dispatch({ type: ADD_NEXT_PAGE_REPORTS_FROM_DB, payload: reports.data.docs })
      return Promise.resolve('1')
    }
  }
}

export const getFilteredReports = () => {
  return async (dispatch, getState) => {
    const reports = await axios.post('/api/get-reports-secure', { ...getState().requestConditions })
    const paginationObj = { ...reports.data }
    if (paginationObj.docs) {
      delete paginationObj.docs
    }
    dispatch({ type: CHANGE_PAGINATION, payload: paginationObj })
    return Promise.resolve('1')
  }
}


