
// Customer pets api
// Customer pets
import request from '../../utils/request';
// Customer pets prop relation page list

export function getCustomerPetsPropRelationId(id,config = {}){
  return request(
    {
      url: `/customer-pets-prop-relation/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Customer pets page list

export function getCustomerPetsId(id,config = {}){
  return request(
    {
      url: `/customer-pets/${id}`,
      method: 'GET',
      ...config
    }
  )
}
// Delete pets 

export function deleteCustomerPetsId(id,config = {}){
  return request(
    {
      url: `/customer-pets/${id}`,
      method: 'DELETE',
      ...config
    }
  )
}
// Pets assigned partner contacts page list

export function getPetsAssignedPartnerContacts(params,config = {}){
  return request(
    {
      url: `/pets-assigned-partner-contacts`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Pets health context page list

export function getPetsHealthContexts(params,config = {}){
  return request(
    {
      url: `/pets-health-contexts`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Pets ownership history page list

export function getPetsOwnershipHistorys(params,config = {}){
  return request(
    {
      url: `/pets-ownership-historys`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Pets purchase place preferences page list

export function getPetsPurchasePlacePreferences(params,config = {}){
  return request(
    {
      url: `/pets-purchase-place-preferences`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Pets weight bcs series page list

export function getPetsWeightBcs(params,config = {}){
  return request(
    {
      url: `/pets-weight-bcs`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Import customer pets

export function postPetsExcel(data,config = {}){
  return request(
    {
      url: `/pets/excel`,
      method: 'POST',
      data,
      ...config
    }
  )
}
// Export pets template

export function getPetsExcelTemplate(config = {}){
  return request(
    {
      url: `/pets/excel/template`,
      method: 'GET',
      ...config
    }
  )
}
//  Pets history excel

export function getPetsHistoryExcel(params,config = {}){
  return request(
    {
      url: `/pets/history/excel`,
      method: 'GET',
      params,
      ...config
    }
  )
}
// Pets detail

export function getPetsId(id,config = {}){
  return request(
    {
      url: `/pets/${id}`,
      method: 'GET',
      ...config
    }
  )
}