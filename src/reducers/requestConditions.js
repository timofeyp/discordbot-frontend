import { CHANGE_REQUEST_CONDITIONS_AUTHORS, CHANGE_REQUEST_CONDITIONS_DATE_START, CHANGE_REQUEST_CONDITIONS_DATE_END, CHANGE_REQUEST_CONDITIONS_LIMIT, CHANGE_REQUEST_CONDITIONS_PAGE, CHANGE_REQUEST_CONDITIONS_PAGES } from 'actions/requestConditions'
import moment from 'moment'

const initialState = {
  startDate: moment().subtract(1, 'weeks').utcOffset(3, true).toDate(),
  endDate: moment().utcOffset(0, true).hour(23).minute(59).toDate(),
  page: 1,
  limit: 10
}

const requestConditions = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REQUEST_CONDITIONS_AUTHORS:
      if (action.payload.length) {
        return { ...state, authors: action.payload }
      } else {
        const newObj = { ...state }
        if (newObj.authors) {
          delete newObj.authors
        } else {
          break
        }
        return { ...newObj }
      }
      break
    case CHANGE_REQUEST_CONDITIONS_DATE_START:
      return { ...state, startDate: action.payload }
      break
    case CHANGE_REQUEST_CONDITIONS_DATE_END:
      return { ...state, endDate: action.payload }
      break
    case CHANGE_REQUEST_CONDITIONS_LIMIT:
      return { ...state, limit: action.payload }
      break
    case CHANGE_REQUEST_CONDITIONS_PAGE:
      return { ...state, page: action.payload }
      break
    case CHANGE_REQUEST_CONDITIONS_PAGES:
      return { ...state, pages: action.payload }
      break
    default:
      break
  }
  return state
}

export default requestConditions
