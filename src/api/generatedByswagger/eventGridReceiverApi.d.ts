
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostEventGridReceiverReqParams= ReqParamsType<'receiveDataUsingPOST'>
// 结果类型
export type PostEventGridReceiverReqRes= ReqResType<'receiveDataUsingPOST'>
// 结果中的data类型
export type PostEventGridReceiverReqData= ReqDataType<'receiveDataUsingPOST'>
export function postEventGridReceiver(params: PostEventGridReceiverReqParams, config?: any): PostEventGridReceiverReqRes
