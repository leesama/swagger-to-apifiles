
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetApplicationReqParams= ReqParamsType<'applicationPageUsingGET'>
// 结果类型
export type GetApplicationReqRes= ReqResType<'applicationPageUsingGET'>
// 结果中的data类型
export type GetApplicationReqData= ReqDataType<'applicationPageUsingGET'>
export function getApplication(params: GetApplicationReqParams, config?: any): GetApplicationReqRes
