import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { getReports } from './reports'
import { getDiscordUsers } from './discordUsers'
import { getSettings } from './settings'

export const LOGIN_TO_SYSTEM = 'LOGIN_TO_SYSTEM'
export const EXIT_FROM_SYSTEM = 'EXIT_FROM_SYSTEM'
export const LOGIN_TO_SYSTEM_SUCCESS = 'LOGIN_TO_SYSTEM_SUCCESS'
export const DATA_HAS_LOADED_AFTER_LOGIN = 'DATA_HAS_LOADED_AFTER_LOGIN'

export const loginToSystem = (e, auth, store) => {
  if (auth.jwt) {
    return async (dispatch, getState) => {
      dispatch({
        type: LOGIN_TO_SYSTEM // ДИСПАТЧИМ СОСТОЯНИЕ НАЧАЛА ПРОЦЕССА ЛОГИНА
      })
      const result = await axios.post('/api/login-by-jwt', auth.jwt)
      localStorage.setItem('jwtToken', result.data.token)
      axios.defaults.headers.common['Authorization'] = result.data.token
      dispatch({
        type: LOGIN_TO_SYSTEM_SUCCESS,
        payload: jwt_decode(result.data.token).username // ДИСПАТЧИМ ЛОГИН
      })
      await afterLogin(dispatch, getState().requestConditions)
      return Promise.resolve('1')
    }
  } else {
    e.preventDefault()
    return (dispatch, getState) => {
      dispatch({
        type: LOGIN_TO_SYSTEM // ДИСПАТЧИМ СОСТОЯНИЕ НАЧАЛА ПРОЦЕССА ЛОГИНА
      })
      axios.post('/api/login', auth)
        .then((result) => {
          localStorage.setItem('jwtToken', result.data.token)
          axios.defaults.headers.common['Authorization'] = result.data.token
          dispatch({
            type: LOGIN_TO_SYSTEM_SUCCESS,
            payload: jwt_decode(result.data.token).username // ДИСПАТЧИМ ЛОГИН
          })
          afterLogin(dispatch, getState().requestConditions)
        })
    }
  }
}

const afterLogin = (dispatch, requestConditions) => new Promise(async resolve => {
  await getReports(dispatch, requestConditions)
  await getDiscordUsers(dispatch)
  await dispatch(getSettings())
  dispatch({ type: DATA_HAS_LOADED_AFTER_LOGIN })
  resolve()
})
