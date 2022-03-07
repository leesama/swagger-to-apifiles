
// Partner breed api
// Partner breed
import request from '../../utils/request';
// Breed code list

export function getBreedCode(params,config = {}){
  return request(
    {
      url: `/breed/code`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Delete partner breed

export function postDeletePartnerBreed(data,config = {}){
  return request(
    {
      url: `/delete/partner-breed`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Add partner breed

export function postPartnerBreed(data,config = {}){
  return request(
    {
      url: `/partner-breed`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Partner breed page list

export function getPartnerBreeds(params,config = {}){
  return request(
    {
      url: `/partner-breeds`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}