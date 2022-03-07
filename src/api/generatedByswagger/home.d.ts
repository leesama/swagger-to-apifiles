
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetHomeSearchReqParams= ReqParamsType<'searchUsingGET'>
// 返回值类型
export type GetHomeSearchReqData= ReqDataType<'searchUsingGET'>
export function getHomeSearch(params: GetHomeSearchReqParams, config?: any): Promise<GetHomeSearchReqData>
