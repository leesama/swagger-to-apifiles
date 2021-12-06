
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostOktaAuthLoginOutReqParams= ReqParamsType<'loginOutUsingPOST'>
// 结果类型
export type PostOktaAuthLoginOutReqRes= ReqResType<'loginOutUsingPOST'>
// 结果中的data类型
export type PostOktaAuthLoginOutReqData= ReqDataType<'loginOutUsingPOST'>
export function postOktaAuthLoginOut(params: PostOktaAuthLoginOutReqParams, config?: any): PostOktaAuthLoginOutReqRes

// 参数类型
export type PostOktaAuthPoCallbackReqParams= ReqParamsType<'poOktaCallbackUsingPOST'>
// 结果类型
export type PostOktaAuthPoCallbackReqRes= ReqResType<'poOktaCallbackUsingPOST'>
// 结果中的data类型
export type PostOktaAuthPoCallbackReqData= ReqDataType<'poOktaCallbackUsingPOST'>
export function postOktaAuthPoCallback(params: PostOktaAuthPoCallbackReqParams, config?: any): PostOktaAuthPoCallbackReqRes

// 参数类型
export type PostOktaAuthTokenReqParams= ReqParamsType<'getJwtTokenUsingPOST'>
// 结果类型
export type PostOktaAuthTokenReqRes= ReqResType<'getJwtTokenUsingPOST'>
// 结果中的data类型
export type PostOktaAuthTokenReqData= ReqDataType<'getJwtTokenUsingPOST'>
export function postOktaAuthToken(params: PostOktaAuthTokenReqParams, config?: any): PostOktaAuthTokenReqRes
