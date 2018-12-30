import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const LOGIN_TO_SYSTEM = 'LOGIN_TO_SYSTEM'
export const EXIT_FROM_SYSTEM = 'EXIT_FROM_SYSTEM'
export const LOGIN_TO_SYSTEM_SUCCESS = 'LOGIN_TO_SYSTEM_SUCCESS'

export function loginToSystem (e, auth) {
  e.preventDefault()
  return dispatch => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: LOGIN_TO_SYSTEM
    })
    axios.post('/api/login', auth)
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token)
        axios.defaults.headers.common['Authorization'] = result.data.token
        dispatch({
          type: LOGIN_TO_SYSTEM_SUCCESS,
          payload: jwt_decode(result.data.token).username
        })
        //this.props.history.push('/')
      })
    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
  }
}
