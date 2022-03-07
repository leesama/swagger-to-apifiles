
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostEventSendGridReceiverReqParams= ReqParamsType<'receiveDataUsingPOST_1'>
// 返回值类型
export type PostEventSendGridReceiverReqData= ReqDataType<'receiveDataUsingPOST_1'>
export function postEventSendGridReceiver(params: PostEventSendGridReceiverReqParams, config?: any): Promise<PostEventSendGridReceiverReqData>
