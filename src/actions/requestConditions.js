import { getReports } from './reports'

export const CHANGE_REQUEST_CONDITIONS_AUTHORS = 'CHANGE_REQUEST_CONDITIONS_AUTHORS'
export const CHANGE_REQUEST_CONDITIONS_DATE_START = 'CHANGE_REQUEST_CONDITIONS_DATE_START'
export const CHANGE_REQUEST_CONDITIONS_DATE_END = 'CHANGE_REQUEST_CONDITIONS_DATE_END'
export const CHANGE_REQUEST_CONDITIONS_PAGE = 'CHANGE_REQUEST_CONDITIONS_PAGE'
export const CHANGE_REQUEST_CONDITIONS_PAGES = 'CHANGE_REQUEST_CONDITIONS_PAGES'
export const CHANGE_REQUEST_CONDITIONS_LIMIT = 'CHANGE_REQUEST_CONDITIONS_LIMIT'

export const changeRequestConditionsDateStart = (date) => {
  return async (dispatch, getState) => {
    dispatch({ type: CHANGE_REQUEST_CONDITIONS_DATE_START, payload: date })
    getReports(dispatch, getState().requestConditions)
  }
}

export const changeRequestConditionsDateEnd = (date) => {
  return async (dispatch, getState) => {
    dispatch({ type: CHANGE_REQUEST_CONDITIONS_DATE_END, payload: date })
    getReports(dispatch, getState().requestConditions)
  }
}

export const changeRequestConditionsAuthors = (authors) => {
  return async (dispatch, getState) => {
    dispatch({ type: CHANGE_REQUEST_CONDITIONS_AUTHORS, payload: authors })
    getReports(dispatch, getState().requestConditions)
  }
}
