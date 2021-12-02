
// Consent api
// Consent
import request from '../utils/request';
// Consent page list
export function putConsent(data,config = {}){
  return request(
    {
      url: '/consent',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Delete consent
export function deleteConsentId(id,config = {}){
  return request(
    {
      url: `/consent/{id}`,
      method: 'DELETE',
      ...config
    }
  )
}
// Edit subscription preferences
export function putSubscriptionPreferences(data,config = {}){
  return request(
    {
      url: '/subscription-preferences',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Subscription preferences list
export function getSubscriptionPreferencesId(id,config = {}){
  return request(
    {
      url: `/subscription-preferences/${id}`,
      method: 'GET',
      ...config
    }
  )
}