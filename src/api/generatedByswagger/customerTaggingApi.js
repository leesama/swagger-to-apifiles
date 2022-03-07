
// Customer tagging api
// Customer tagging
import request from '../../utils/request';
// Add customer tagging

export function postCustomerTagging(data,config = {}){
  return request(
    {
      url: `/customer-tagging`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Edit customer tagging

export function putCustomerTagging(data,config = {}){
  return request(
    {
      url: `/customer-tagging`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Edit customer tagging status

export function putCustomerTaggingStatus(data,config = {}){
  return request(
    {
      url: `/customer-tagging/status`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Customer tagging detail

export function getCustomerTaggingId(id,config = {}){
  return request(
    {
      url: `/customer-tagging/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Delete customer tagging

export function deleteCustomerTaggingId(id,config = {}){
  return request(
    {
      url: `/customer-tagging/${id}`,
      method: 'DELETE',
    },
    {
      ...config
    }
  )
}
// Customer tagging page list

export function getCustomerTaggings(params,config = {}){
  return request(
    {
      url: `/customer-taggings`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}