
// Partner relationships sync api
// Partner relationships
import request from '../utils/request';
// Add partner relationship
export function putPartnerRelationshipSync(data,config = {}){
  return request(
    {
      url: '/partner-relationship/sync',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Synchronize partner relationship list
export function getPartnerRelationshipSyncList(params,config = {}){
  return request(
    {
      url: '/partner-relationship/sync/list',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Partner relationship detail
export function getPartnerRelationshipSyncId(id,config = {}){
  return request(
    {
      url: `/partner-relationship/sync/${id}`,
      method: 'GET',
      ...config
    }
  )
}