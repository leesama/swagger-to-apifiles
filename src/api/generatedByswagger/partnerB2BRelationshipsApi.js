
// Partner b2b relationships api
// Partner b2b relationships
import request from '../../utils/request';
// Add partner b2b relationships

export function postPartnerRelationshipB2b(data,config = {}){
  return request(
    {
      url: `/partner-relationship-b2b`,
      method: 'POST',
      data,
      ...config
    }
  )
}
// update

export function putPartnerRelationshipB2b(data,config = {}){
  return request(
    {
      url: `/partner-relationship-b2b`,
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Partner b2b relationships contact list

export function getPartnerRelationshipB2bContacts(params,config = {}){
  return request(
    {
      url: `/partner-relationship-b2b/contacts`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// updatePrimaryContact

export function putPartnerRelationshipB2bPrimaryContact(data,config = {}){
  return request(
    {
      url: `/partner-relationship-b2b/primary-contact`,
      method: 'PUT',
      data,
      ...config
    }
  )
}
// roles

export function getPartnerRelationshipB2bRoles(config = {}){
  return request(
    {
      url: `/partner-relationship-b2b/roles`,
      method: 'GET',
      ...config
    }
  )
}
// Partner b2b relationships detail

export function getPartnerRelationshipB2bId(id,config = {}){
  return request(
    {
      url: `/partner-relationship-b2b/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Delete partner b2b relationships

export function deletePartnerRelationshipB2bId(id,config = {}){
  return request(
    {
      url: `/partner-relationship-b2b/${id}`,
      method: 'DELETE',
      ...config
    }
  )
}
// Partner b2b relationships page list

export function getPartnerRelationshipB2bs(params,config = {}){
  return request(
    {
      url: `/partner-relationship-b2bs`,
      method: 'GET',
      params,
      ...config
    }
  )
}