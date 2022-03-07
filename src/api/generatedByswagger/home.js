
// Home Controller
// home-controller
import request from '../../utils/request';
// search

export function getHomeSearch(params,config = {}){
  return request(
    {
      url: `/home/search`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}