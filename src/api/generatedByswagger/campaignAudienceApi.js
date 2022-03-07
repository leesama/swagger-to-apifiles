
// Campaign audience api
// Campaign audience
import request from '../../utils/request';
// Add audience

export function postAudience(data,config = {}){
  return request(
    {
      url: `/audience`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Audience detail

export function getAudienceId(id,config = {}){
  return request(
    {
      url: `/audience/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Marketing segment page list

export function getMarketingSegments(params,config = {}){
  return request(
    {
      url: `/marketing-segments`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Master segment page list

export function getMasterSegments(params,config = {}){
  return request(
    {
      url: `/master-segments`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Simulate member page list

export function getSimulateMembers(params,config = {}){
  return request(
    {
      url: `/simulate-members`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}