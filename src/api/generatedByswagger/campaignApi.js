
// Campaign api
// Campaign
import request from '../../utils/request';
// Add campaign

export function postCampaign(data,config = {}){
  return request(
    {
      url: `/campaign`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Add campaign details

export function postCampaignAll(data,config = {}){
  return request(
    {
      url: `/campaign/all`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Campaign managers all

export function getCampaignManagers(params,config = {}){
  return request(
    {
      url: `/campaign/managers`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Campaign fromSender

export function getCampaignSends(config = {}){
  return request(
    {
      url: `/campaign/sends`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// Edit campaign activate

export function putCampaignStatus(data,config = {}){
  return request(
    {
      url: `/campaign/status`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Campaign statuses all

export function getCampaignStatuses(config = {}){
  return request(
    {
      url: `/campaign/statuses`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// Campaign details

export function getCampaignCampaignId(campaignId,config = {}){
  return request(
    {
      url: `/campaign/${campaignId}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Delete campaign

export function deleteCampaignCampaignId(campaignId,config = {}){
  return request(
    {
      url: `/campaign/${campaignId}`,
      method: 'DELETE',
    },
    {
      ...config
    }
  )
}
// Campaign page

export function getCampaigns(params,config = {}){
  return request(
    {
      url: `/campaigns`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}