
// Campaign tag api
// Campaign tag
import request from '../../utils/request';
// Add campaign tag

export function postCampaignTag(data,config = {}){
  return request(
    {
      url: `/campaign-tag`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Edit campaign tag

export function putCampaignTag(data,config = {}){
  return request(
    {
      url: `/campaign-tag`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Get campaign tag

export function getCampaignTagId(id,config = {}){
  return request(
    {
      url: `/campaign-tag/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Delete campaign tag

export function deleteCampaignTagId(id,config = {}){
  return request(
    {
      url: `/campaign-tag/${id}`,
      method: 'DELETE',
    },
    {
      ...config
    }
  )
}
// Campaign tag page list

export function getCampaignTags(params,config = {}){
  return request(
    {
      url: `/campaign-tags`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Campaign time zones

export function getTimeZones(config = {}){
  return request(
    {
      url: `/time-zones`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}