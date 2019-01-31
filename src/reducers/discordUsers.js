import { PULL_DISCORD_USERS_FROM_DB } from 'actions/discordUsers'

const initialState = []

const discordUsers = (state = initialState, action) => {
  switch (action.type) {
    case PULL_DISCORD_USERS_FROM_DB:
      return [ ...initialState, ...action.payload ]
      break
    default:
      break
  }
  return state
}

export default discordUsers
