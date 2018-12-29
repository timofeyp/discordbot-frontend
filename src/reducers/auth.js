import { LOGIN_TO_SYSTEM, EXIT_FROM_SYSTEM } from '../actions'

const initialState = {
  loggedIn : false,
  login: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TO_SYSTEM:
      return { ...state, login: action.payload, loggedIn: true }
      break
    case EXIT_FROM_SYSTEM:
      console.log(state)
      return initialState
      break
    default:
      break
  }
  return state
}

export default auth
