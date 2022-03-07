
// Customer pets api
// Customer pets
import request from '../../utils/request';
// Customer pets prop relation page query

export function getCustomerPetsPropRelationId(id,config = {}){
  return request(
    {
      url: `/customer-pets-prop-relation/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Pet details

export function getPetDetailsId(id,config = {}){
  return request(
    {
      url: `/pet-details/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Import pets

export function postPetExcel(data,config = {}){
  return request(
    {
      url: `/pet/excel`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Export pet template

export function getPetExcelTemplate(config = {}){
  return request(
    {
      url: `/pet/excel/template`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
//  Pet history excel

export function getPetHistoryExcel(params,config = {}){
  return request(
    {
      url: `/pet/history/excel`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Delete pet 

export function deletePetId(id,config = {}){
  return request(
    {
      url: `/pet/${id}`,
      method: 'DELETE',
    },
    {
      ...config
    }
  )
}
// Pets assigned partner contacts page query

export function getPetsAssignedPartnerContacts(params,config = {}){
  return request(
    {
      url: `/pets-assigned-partner-contacts`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Pets health context page query

export function getPetsHealthContexts(params,config = {}){
  return request(
    {
      url: `/pets-health-contexts`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Pets ownership history page query

export function getPetsOwnershipHistorys(params,config = {}){
  return request(
    {
      url: `/pets-ownership-historys`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Pets purchase place preferences page query

export function getPetsPurchasePlacePreferences(params,config = {}){
  return request(
    {
      url: `/pets-purchase-place-preferences`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Pets weight bcs series page query

export function getPetsWeightBcs(params,config = {}){
  return request(
    {
      url: `/pets-weight-bcs`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// All pets under Customer

export function getPetsId(id,config = {}){
  return request(
    {
      url: `/pets/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}