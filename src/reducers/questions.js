import { GET_QUESTIONS_FROM_DB } from 'actions/questions'

const initialState = {
  data: []
}

const questions = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_FROM_DB:
      return { ...initialState, data: action.payload }
      break
    default:
      break
  }
  return state
}

export default questions
