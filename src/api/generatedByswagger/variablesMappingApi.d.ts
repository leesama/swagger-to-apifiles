
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetVariablesMappingMappingMethodsReqParams= ReqParamsType<'findByMappingMethodUsingGET'>
// 返回值类型
export type GetVariablesMappingMappingMethodsReqData= ReqDataType<'findByMappingMethodUsingGET'>
export function getVariablesMappingMappingMethods(params: GetVariablesMappingMappingMethodsReqParams, config?: any): Promise<GetVariablesMappingMappingMethodsReqData>

// 参数类型
export type GetVariablesMappingsReqParams= ReqParamsType<'findByTemplateIdUsingGET'>
// 返回值类型
export type GetVariablesMappingsReqData= ReqDataType<'findByTemplateIdUsingGET'>
export function getVariablesMappings(params: GetVariablesMappingsReqParams, config?: any): Promise<GetVariablesMappingsReqData>
