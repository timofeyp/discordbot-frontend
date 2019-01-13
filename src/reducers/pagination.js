import { CHANGE_PAGINATION} from '../actions/pagination'

const initialState = {}

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGINATION:
      return { ...state, ...action.payload }
      break
    default:
      break
  }
  return state
}

export default pagination
