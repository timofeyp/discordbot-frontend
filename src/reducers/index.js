import { LOGIN_TO_SYSTEM , EXIT_FROM_SYSTEM } from '../actions'

const reducer = (state = [123], action) => {
  switch (action.type) {
    case LOGIN_TO_SYSTEM:
      return { ...state, a: action.payload }
      break
    case EXIT_FROM_SYSTEM:
      break
    default:
      break
  }
  return state
}

export default reducer
