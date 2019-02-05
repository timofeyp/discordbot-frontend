import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { LOGIN_TO_SYSTEM, LOGIN_TO_SYSTEM_SUCCESS } from './auth'

export const GET_SETTINGS_FROM_DB = 'GET_SETTINGS_FROM_DB'
export const SET_SETTINGS = 'SET_SETTINGS'

export const getSettings = (dispatch) => {
  return async (dispatch, getState) => {
    const settings = await axios.get('/api/get-settings-secure')
    if (!settings.data) {
      await axios.post('/api/set-settings-secure', getState().settings)
    } else {
      dispatch({ type: GET_SETTINGS_FROM_DB, payload: settings.data })
    }
    Promise.resolve()
  }
}

export const setSettings = (settings) =>  {
  return async (dispatch, getState) => {
    console.log(getState())
    dispatch({ type: SET_SETTINGS, payload: settings })
    await axios.post('/api/set-settings-secure', settings)
    Promise.resolve()
    dispatch(getSettings())
  }
}