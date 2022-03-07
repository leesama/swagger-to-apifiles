
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostEventGridReceiverReqParams= ReqParamsType<'receiveDataUsingPOST'>
// 返回值类型
export type PostEventGridReceiverReqData= ReqDataType<'receiveDataUsingPOST'>
export function postEventGridReceiver(params: PostEventGridReceiverReqParams, config?: any): Promise<PostEventGridReceiverReqData>
