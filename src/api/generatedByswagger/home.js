
// Home Controller
// home-controller
import request from '../../utils/request';
// query

export function getHomeQuery(params,config = {}){
  return request(
    {
      url: `/home/query`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// search

export function getHomeSearch(params,config = {}){
  return request(
    {
      url: `/home/search`,
      method: 'GET',
      params,
      ...config
    }
  )
}