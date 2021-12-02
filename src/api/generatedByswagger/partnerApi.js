
// Partner api
// Partner
import request from '../utils/request';
// Edit partner detail
export function putPartner(data,config = {}){
  return request(
    {
      url: '/partner',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Export partner member excel
export function postPartnerGroupMemberExcel(data,config = {}){
  return request(
    {
      url: '/partner-group/member/excel',
      method: 'POST',
      data,
      ...config
    }
  )
}
// Export partner member template
export function getPartnerGroupMemberExcelTemplate(config = {}){
  return request(
    {
      url: '/partner-group/member/excel/template',
      method: 'GET',
      ...config
    }
  )
}
// Partner invoice detail
export function getPartnerInvoiceId(id,config = {}){
  return request(
    {
      url: `/partner-invoice/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Partner public detail
export function getPartnerPublicId(id,config = {}){
  return request(
    {
      url: `/partner-public/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Synchronize partner list
export function postPartnerSync(data,config = {}){
  return request(
    {
      url: '/partner/sync',
      method: 'POST',
      data,
      ...config
    }
  )
}
// Partner detail
export function getPartnerId(id,config = {}){
  return request(
    {
      url: `/partner/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Partner page list
export function getPartners(params,config = {}){
  return request(
    {
      url: '/partners',
      method: 'GET',
      params,
      ...config
    }
  )
}