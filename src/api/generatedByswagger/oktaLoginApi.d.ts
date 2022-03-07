
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostOktaAuthLoginOutReqParams= ReqParamsType<'loginOutUsingPOST'>
// 返回值类型
export type PostOktaAuthLoginOutReqData= ReqDataType<'loginOutUsingPOST'>
export function postOktaAuthLoginOut(params: PostOktaAuthLoginOutReqParams, config?: any): Promise<PostOktaAuthLoginOutReqData>

// 参数类型
export type PostOktaAuthPoCallbackReqParams= ReqParamsType<'poOktaCallbackUsingPOST'>
// 返回值类型
export type PostOktaAuthPoCallbackReqData= ReqDataType<'poOktaCallbackUsingPOST'>
export function postOktaAuthPoCallback(params: PostOktaAuthPoCallbackReqParams, config?: any): Promise<PostOktaAuthPoCallbackReqData>

// 参数类型
export type PostOktaAuthTokenReqParams= ReqParamsType<'getJwtTokenUsingPOST'>
// 返回值类型
export type PostOktaAuthTokenReqData= ReqDataType<'getJwtTokenUsingPOST'>
export function postOktaAuthToken(params: PostOktaAuthTokenReqParams, config?: any): Promise<PostOktaAuthTokenReqData>
