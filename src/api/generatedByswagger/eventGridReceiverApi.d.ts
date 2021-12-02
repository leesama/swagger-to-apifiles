
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Receive event grid data
// 参数类型
export type EventGridReceiverReqParams= ReqParamsType<'receiveDataUsingPOST'>
// 结果类型
export type EventGridReceiverReqRes= ReqResType<'receiveDataUsingPOST'>
// 结果中的data类型
export type EventGridReceiverReqData= ReqDataType<'receiveDataUsingPOST'>
    
export function postEventGridReceiver(params: EventGridReceiverReqParams, config?: any): EventGridReceiverReqRes
