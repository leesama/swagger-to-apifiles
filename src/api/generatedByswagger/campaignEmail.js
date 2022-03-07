
// Campaign Email Controller
// CampaignEmail
import request from '../../utils/request';
// Add campaign email

export function postCampaignEmail(data,config = {}){
  return request(
    {
      url: `/campaign-email`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Find campaign by id

export function getCampaignEmailCampaignEmailId(campaignEmailId,config = {}){
  return request(
    {
      url: `/campaign-email/${campaignEmailId}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Retrieve single template

export function getTemplateTemplateId(templateId,config = {}){
  return request(
    {
      url: `/template/${templateId}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Retrieve templates

export function getTemplates(config = {}){
  return request(
    {
      url: `/templates`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}