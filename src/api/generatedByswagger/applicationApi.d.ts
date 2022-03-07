
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetApplicationReqParams= ReqParamsType<'applicationPageUsingGET'>
// 返回值类型
export type GetApplicationReqData= ReqDataType<'applicationPageUsingGET'>
export function getApplication(params: GetApplicationReqParams, config?: any): Promise<GetApplicationReqData>
