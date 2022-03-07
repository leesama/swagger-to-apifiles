
// Okta login api
// Okta login
import request from '../../utils/request';
// Generate jwt token by okta token

export function postOktaAuthLoginOut(data,config = {}){
  return request(
    {
      url: `/okta/auth/login-out`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Po okta call back

export function postOktaAuthPoCallback(data,config = {}){
  return request(
    {
      url: `/okta/auth/po/callback`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Generate jwt token by okta token

export function postOktaAuthToken(data,config = {}){
  return request(
    {
      url: `/okta/auth/token`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}