import { LOGIN_TO_SYSTEM, LOGIN_TO_SYSTEM_SUCCESS, EXIT_FROM_SYSTEM, DATA_HAS_LOADED_AFTER_LOGIN } from '../actions/auth'

const initialState = {
  isLoading: false,
  isLogging: false,
  loggedIn: false,
  dataHasLoaded: false,
  login: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TO_SYSTEM:
      return { ...state, isLogging: true, isLoading: true }
      break
    case LOGIN_TO_SYSTEM_SUCCESS:
      return { ...state, login: action.payload, isLogging: false, loggedIn: true }
      break
    case EXIT_FROM_SYSTEM:
      return { ...state, loggedIn: false, login: '' }
      break
    case DATA_HAS_LOADED_AFTER_LOGIN:
      return { ...state, dataHasLoaded: true, isLoading: false }
      break
    default:
     break
  }
  return state
}

export default auth
