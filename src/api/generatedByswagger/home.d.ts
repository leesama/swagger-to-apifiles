
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetHomeQueryReqParams= ReqParamsType<'queryUsingGET'>
// 结果类型
export type GetHomeQueryReqRes= ReqResType<'queryUsingGET'>
// 结果中的data类型
export type GetHomeQueryReqData= ReqDataType<'queryUsingGET'>
export function getHomeQuery(params: GetHomeQueryReqParams, config?: any): GetHomeQueryReqRes

// 参数类型
export type GetHomeSearchReqParams= ReqParamsType<'searchUsingGET'>
// 结果类型
export type GetHomeSearchReqRes= ReqResType<'searchUsingGET'>
// 结果中的data类型
export type GetHomeSearchReqData= ReqDataType<'searchUsingGET'>
export function getHomeSearch(params: GetHomeSearchReqParams, config?: any): GetHomeSearchReqRes
