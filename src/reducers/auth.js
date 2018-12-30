import { LOGIN_TO_SYSTEM, LOGIN_TO_SYSTEM_SUCCESS ,EXIT_FROM_SYSTEM } from '../actions/auth'

const initialState = {
  isLogging: false,
  loggedIn: false,
  login: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TO_SYSTEM:
      return { ...state, isLogging: true }
      break
    case LOGIN_TO_SYSTEM_SUCCESS:
      return { ...state, login: action.payload, isLogging: false, loggedIn: true }
      break
    case EXIT_FROM_SYSTEM:
      return { ...state, loggedIn: false, login: '' }
      break
    default:
      break
  }
  return state
}

export default auth
