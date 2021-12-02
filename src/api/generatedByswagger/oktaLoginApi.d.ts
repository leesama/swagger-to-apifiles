
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Generate jwt token by okta token
// 参数类型
export type OktaAuthLoginOutReqParams= ReqParamsType<'loginOutUsingPOST'>
// 结果类型
export type OktaAuthLoginOutReqRes= ReqResType<'loginOutUsingPOST'>
// 结果中的data类型
export type OktaAuthLoginOutReqData= ReqDataType<'loginOutUsingPOST'>
    
export function postOktaAuthLoginOut(params: OktaAuthLoginOutReqParams, config?: any): OktaAuthLoginOutReqRes

// Po okta call back
// 参数类型
export type OktaAuthPoCallbackReqParams= ReqParamsType<'poOktaCallbackUsingPOST'>
// 结果类型
export type OktaAuthPoCallbackReqRes= ReqResType<'poOktaCallbackUsingPOST'>
// 结果中的data类型
export type OktaAuthPoCallbackReqData= ReqDataType<'poOktaCallbackUsingPOST'>
    
export function postOktaAuthPoCallback(params: OktaAuthPoCallbackReqParams, config?: any): OktaAuthPoCallbackReqRes

// Generate jwt token by okta token
// 参数类型
export type OktaAuthTokenReqParams= ReqParamsType<'getJwtTokenUsingPOST'>
// 结果类型
export type OktaAuthTokenReqRes= ReqResType<'getJwtTokenUsingPOST'>
// 结果中的data类型
export type OktaAuthTokenReqData= ReqDataType<'getJwtTokenUsingPOST'>
    
export function postOktaAuthToken(params: OktaAuthTokenReqParams, config?: any): OktaAuthTokenReqRes
