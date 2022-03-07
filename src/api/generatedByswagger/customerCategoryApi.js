
// Customer category api
// Customer category
import request from '../../utils/request';
// Add customer category

export function postCustomerCategory(data,config = {}){
  return request(
    {
      url: `/customer-category`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Edit customer category

export function putCustomerCategory(data,config = {}){
  return request(
    {
      url: `/customer-category`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Upload customer category image

export function postCustomerCategoryImage(data,config = {}){
  return request(
    {
      url: `/customer-category/image`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Customer category detail

export function getCustomerCategoryId(id,config = {}){
  return request(
    {
      url: `/customer-category/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Delete customer category

export function deleteCustomerCategoryId(id,config = {}){
  return request(
    {
      url: `/customer-category/${id}`,
      method: 'DELETE',
    },
    {
      ...config
    }
  )
}
// Customer category page list

export function getCustomerCategorys(params,config = {}){
  return request(
    {
      url: `/customer-categorys`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}