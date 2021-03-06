import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { PULL_REPORTS_FROM_DB } from './reports'


export const PULL_DISCORD_USERS_FROM_DB = 'PULL_DISCORD_USERS_FROM_DB'
export const PULL_DISCORD_USERS_FROM_DB_SUCCESS = 'PULL_DISCORD_USERS_FROM_DB_SUCCESS'

export const getDiscordUsers = (dispatch, conditions) => new Promise(async resolve => {
  const reports = await axios.get('/api/get-discord-users-secure', conditions)
  dispatch({ type: PULL_DISCORD_USERS_FROM_DB, payload: reports.data })
  resolve()
})
