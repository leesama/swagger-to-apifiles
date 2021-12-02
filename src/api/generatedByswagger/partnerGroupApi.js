
// Partner group api
// Partner group
import request from '../utils/request';
// Add partner group
export function putPartnerGroup(data,config = {}){
  return request(
    {
      url: '/partner-group',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Partner group history page list
export function getPartnerGroupHistory(params,config = {}){
  return request(
    {
      url: '/partner-group-history',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Partner group member detail
export function getPartnerGroupMember(params,config = {}){
  return request(
    {
      url: '/partner-group-member',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Delete partner group member
export function deletePartnerGroupMemberId(id,config = {}){
  return request(
    {
      url: `/partner-group-member/{id}`,
      method: 'DELETE',
      ...config
    }
  )
}
// Partner group member page list
export function getPartnerGroupMembers(params,config = {}){
  return request(
    {
      url: '/partner-group-members',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Download partner group excel
export function getPartnerGroupDownloadExcelUrl(url,config = {}){
  return request(
    {
      url: `/partner-group/download/excel/${url}`,
      method: 'GET',
      ...config
    }
  )
}
// Download partner group image
export function getPartnerGroupDownloadImageUrl(url,config = {}){
  return request(
    {
      url: `/partner-group/download/image/${url}`,
      method: 'GET',
      ...config
    }
  )
}
// Upload partner group excel
export function postPartnerGroupExcel(data,config = {}){
  return request(
    {
      url: '/partner-group/excel',
      method: 'POST',
      data,
      ...config
    }
  )
}
// Upload partner group image
export function postPartnerGroupImage(data,config = {}){
  return request(
    {
      url: '/partner-group/image',
      method: 'POST',
      data,
      ...config
    }
  )
}
// Delete partner group
export function deletePartnerGroupId(id,config = {}){
  return request(
    {
      url: `/partner-group/{id}`,
      method: 'DELETE',
      ...config
    }
  )
}
// Partner group page list
export function getPartnerGroups(params,config = {}){
  return request(
    {
      url: '/partner-groups',
      method: 'GET',
      params,
      ...config
    }
  )
}