
// Product group api
// Product group
import request from '../utils/request';
// Add product group
export function putProductGroup(data,config = {}){
  return request(
    {
      url: '/product-group',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Export product group excel
export function getProductGroupExcelExportId(id,config = {}){
  return request(
    {
      url: `/product-group/excel-export/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Upload product history
export function getProductGroupExcelHistory(params,config = {}){
  return request(
    {
      url: '/product-group/excel-history',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Upload product bulk
export function postProductGroupExcelImport(data,config = {}){
  return request(
    {
      url: '/product-group/excel-import',
      method: 'POST',
      data,
      ...config
    }
  )
}
// Export product excel template
export function getProductGroupExcelTemplate(config = {}){
  return request(
    {
      url: '/product-group/excel-template',
      method: 'GET',
      ...config
    }
  )
}
// Delete product group
export function deleteProductGroupId(id,config = {}){
  return request(
    {
      url: `/product-group/{id}`,
      method: 'DELETE',
      ...config
    }
  )
}
// Product group page list
export function getProductGroups(params,config = {}){
  return request(
    {
      url: '/product-groups',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Product member page list
export function putProductMember(data,config = {}){
  return request(
    {
      url: '/product-member',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Delete product member
export function deleteProductMemberId(id,config = {}){
  return request(
    {
      url: `/product-member/{id}`,
      method: 'DELETE',
      ...config
    }
  )
}