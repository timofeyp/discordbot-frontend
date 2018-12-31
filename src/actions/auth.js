import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { getReports } from './'

export const LOGIN_TO_SYSTEM = 'LOGIN_TO_SYSTEM'
export const EXIT_FROM_SYSTEM = 'EXIT_FROM_SYSTEM'
export const LOGIN_TO_SYSTEM_SUCCESS = 'LOGIN_TO_SYSTEM_SUCCESS'

export function loginToSystem (e, auth) {
  e.preventDefault()
  return dispatch => {
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
        getReports(dispatch) // ВЫЗЫВАЕМ ФУНКЦИЮ С ЗАГРУЗКОЙ ДАННЫХ?
      })
  }
}
