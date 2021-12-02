
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// query
// 参数类型
export type HomeQueryReqParams= ReqParamsType<'queryUsingGET'>
// 结果类型
export type HomeQueryReqRes= ReqResType<'queryUsingGET'>
// 结果中的data类型
export type HomeQueryReqData= ReqDataType<'queryUsingGET'>
    
export function getHomeQuery(params: HomeQueryReqParams, config?: any): HomeQueryReqRes

// search
// 参数类型
export type HomeSearchReqParams= ReqParamsType<'searchUsingGET'>
// 结果类型
export type HomeSearchReqRes= ReqResType<'searchUsingGET'>
// 结果中的data类型
export type HomeSearchReqData= ReqDataType<'searchUsingGET'>
    
export function getHomeSearch(params: HomeSearchReqParams, config?: any): HomeSearchReqRes
