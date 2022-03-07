
// VariablesMapping api
// VariablesMapping
import request from '../../utils/request';
// Query mappingMethods

export function getVariablesMappingMappingMethods(config = {}){
  return request(
    {
      url: `/variablesMapping/mappingMethods`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// Query variablesMappings by templateId and campaignId

export function getVariablesMappings(params,config = {}){
  return request(
    {
      url: `/variablesMappings`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}