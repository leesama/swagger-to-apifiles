
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Application list
// 参数类型
export type ApplicationReqParams= ReqParamsType<'applicationPageUsingGET'>
// 结果类型
export type ApplicationReqRes= ReqResType<'applicationPageUsingGET'>
// 结果中的data类型
export type ApplicationReqData= ReqDataType<'applicationPageUsingGET'>
    
export function getApplication(params: ApplicationReqParams, config?: any): ApplicationReqRes
