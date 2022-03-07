
// Campaign test api
// Campaign test
import request from '../../utils/request';
// Add campaign test

export function postCampaignTest(data,config = {}){
  return request(
    {
      url: `/campaign-test`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Send campaign test email

export function postCampaignTestSendEmail(data,config = {}){
  return request(
    {
      url: `/campaign-test/sendEmail`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Get first campaign test

export function getCampaignTestCampaignId(campaignId,config = {}){
  return request(
    {
      url: `/campaign-test/${campaignId}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}