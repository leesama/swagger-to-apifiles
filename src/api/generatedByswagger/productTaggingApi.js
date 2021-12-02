
// Product tagging api
// Product tagging
import request from '../utils/request';
// Add product tagging
export function putProductTagging(data,config = {}){
  return request(
    {
      url: '/product/tagging',
      method: 'PUT',
      data,
      ...config
    }
  )
}
// Product tagging list
export function getProductTaggingList(params,config = {}){
  return request(
    {
      url: '/product/tagging/list',
      method: 'GET',
      params,
      ...config
    }
  )
}
// Product tagging page list
export function getProductTaggings(params,config = {}){
  return request(
    {
      url: '/product/taggings',
      method: 'GET',
      params,
      ...config
    }
  )
}