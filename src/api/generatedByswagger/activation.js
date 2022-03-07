
// Activation Controller
// Campaign activation
import request from '../../utils/request';
// Campaign activation

export function postCampaignActivation(data,config = {}){
  return request(
    {
      url: `/campaign/activation`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}