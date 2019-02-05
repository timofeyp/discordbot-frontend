import axios from 'axios'

export const GET_QUESTIONS_FROM_DB = 'GET_QUESTIONS_FROM_DB'
export const SET_QUESTIONS = 'SET_QUESTIONS'

export const getQuestions = (dispatch) => {
  return async (dispatch, getState) => {
    const settings = await axios.get('/api/get-questions-secure')
    dispatch({ type: GET_QUESTIONS_FROM_DB, payload: settings.data })
    Promise.resolve()
  }
}

export const setQuetion = (num, text) => {
  return async (dispatch, getState) => {
    await axios.post('/api/set-questions-secure', { num: (num + 1), text })
    Promise.resolve()
    dispatch(getQuestions())
  }
}
