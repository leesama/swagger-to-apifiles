
// Application api
// Application
import request from '../../utils/request';
// Application list

export function getApplication(params,config = {}){
  return request(
    {
      url: `/application`,
      method: 'GET',
      params,
      ...config
    }
  )
}