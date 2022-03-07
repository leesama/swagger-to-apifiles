
// Customer api
// Customer
import request from '../../utils/request';
// Add club segment relation

export function postClubSegmentRelation(data,config = {}){
  return request(
    {
      url: `/club-segment-relation`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Edit customer detail

export function putCustomer(data,config = {}){
  return request(
    {
      url: `/customer`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Customer coached segment detail

export function getCustomerCoachedSegment(params,config = {}){
  return request(
    {
      url: `/customer-coached-segment`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Customer feedback detail

export function getCustomerFeedback(params,config = {}){
  return request(
    {
      url: `/customer-feedback`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Edit customer feedback

export function putCustomerFeedback(data,config = {}){
  return request(
    {
      url: `/customer-feedback`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Customer legal detail

export function getCustomerLegal(params,config = {}){
  return request(
    {
      url: `/customer-legal`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Customer segment detail

export function getCustomerSegment(params,config = {}){
  return request(
    {
      url: `/customer-segment`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Synchronising customer when query

export function getCustomerSynchronization(params,config = {}){
  return request(
    {
      url: `/customer-synchronization`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Synchronising customer when create

export function postCustomerSynchronization(data,config = {}){
  return request(
    {
      url: `/customer-synchronization`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Synchronising customer when edit

export function putCustomerSynchronization(data,config = {}){
  return request(
    {
      url: `/customer-synchronization`,
      method: 'PUT',
      data
    },
    {
      ...config
    }
  )
}
// Add customer tagging relation

export function postCustomerTaggingRelation(data,config = {}){
  return request(
    {
      url: `/customer-tagging-relation`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Upload b2c customer bulk

export function postCustomerExcel(data,config = {}){
  return request(
    {
      url: `/customer/excel`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Upload b2b customer bulk

export function postCustomerExcelB2b(data,config = {}){
  return request(
    {
      url: `/customer/excel-b2b`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Upload excel history list b2b

export function getCustomerExcelHistoryB2b(params,config = {}){
  return request(
    {
      url: `/customer/excel-history-b2b`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Upload excel history list b2c

export function getCustomerExcelHistoryB2c(params,config = {}){
  return request(
    {
      url: `/customer/excel-history-b2c`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Export customer excel template

export function getCustomerExcelTemplate(config = {}){
  return request(
    {
      url: `/customer/excel-template`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// Export customer excel template

export function getCustomerExcelTemplateB2b(config = {}){
  return request(
    {
      url: `/customer/excel-template-b2b`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// Customer detail

export function getCustomerCustomerId(customerId,config = {}){
  return request(
    {
      url: `/customer/${customerId}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Customers page list

export function getCustomers(params,config = {}){
  return request(
    {
      url: `/customers`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Customers page list

export function postCustomersNew(data,config = {}){
  return request(
    {
      url: `/customersNew`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Add segment relation

export function postSagmentRelation(data,config = {}){
  return request(
    {
      url: `/sagment-relation`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// Delete segment customer relation

export function deleteSegmentCustomerRelationId(id,config = {}){
  return request(
    {
      url: `/segment-customer-relation/${id}`,
      method: 'DELETE',
    },
    {
      ...config
    }
  )
}
// Add welcome box tag

export function postWelcomeBoxTag(data,config = {}){
  return request(
    {
      url: `/welcome-box-tag`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}