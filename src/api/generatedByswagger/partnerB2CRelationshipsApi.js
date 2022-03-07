
// Partner b2c relationships api
// Partner b2c relationships
import request from '../../utils/request';
// Add partner b2c relationships

export function postPartnerRelationshipB2c(data,config = {}){
  return request(
    {
      url: `/partner-relationship-b2c`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// update

export function putPartnerRelationshipB2c(data,config = {}){
  return request(
    {
      url: `/partner-relationship-b2c`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Partner b2c relationships contact list

export function getPartnerRelationshipB2cContacts(params,config = {}){
  return request(
    {
      url: `/partner-relationship-b2c/contacts`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Partner b2c relationships page list

export function getPartnerRelationshipB2cs(params,config = {}){
  return request(
    {
      url: `/partner-relationship-b2cs`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}