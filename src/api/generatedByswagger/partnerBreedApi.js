
// Partner breed api
// Partner breed
import request from '../../utils/request';
// BreedCode page list

export function getBreedCode(params,config = {}){
  return request(
    {
      url: `/breed/code`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Breed page list

export function getBreeds(params,config = {}){
  return request(
    {
      url: `/breeds`,
      method: 'GET',
      params,
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
      data,
      ...config
    }
  )
}
// Partner breed species list

export function getPartnerBreedSpecies(config = {}){
  return request(
    {
      url: `/partner-breed/species`,
      method: 'GET',
      ...config
    }
  )
}
// Partner breed synchronization

export function getPartnerBreedSync(config = {}){
  return request(
    {
      url: `/partner-breed/sync`,
      method: 'GET',
      ...config
    }
  )
}
// Partner breed universes list

export function getPartnerBreedUniverses(config = {}){
  return request(
    {
      url: `/partner-breed/universes`,
      method: 'GET',
      ...config
    }
  )
}
// Delete partner breed

export function deletePartnerBreedId(id,config = {}){
  return request(
    {
      url: `/partner-breed/${id}`,
      method: 'DELETE',
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
      params,
      ...config
    }
  )
}