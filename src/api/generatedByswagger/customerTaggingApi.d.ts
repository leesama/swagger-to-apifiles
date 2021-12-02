
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add customer tagging
// 参数类型
export type CustomerTaggingReqParams= ReqParamsType<'addUsingPOST_2'>
// 结果类型
export type CustomerTaggingReqRes= ReqResType<'addUsingPOST_2'>
// 结果中的data类型
export type CustomerTaggingReqData= ReqDataType<'addUsingPOST_2'>
    
export function postCustomerTagging(params: CustomerTaggingReqParams, config?: any): CustomerTaggingReqRes

export function putCustomerTagging(params: CustomerTaggingReqParams, config?: any): CustomerTaggingReqRes

// Edit customer tagging status
// 参数类型
export type CustomerTaggingStatusReqParams= ReqParamsType<'updateStatusUsingPUT'>
// 结果类型
export type CustomerTaggingStatusReqRes= ReqResType<'updateStatusUsingPUT'>
// 结果中的data类型
export type CustomerTaggingStatusReqData= ReqDataType<'updateStatusUsingPUT'>
    
export function putCustomerTaggingStatus(params: CustomerTaggingStatusReqParams, config?: any): CustomerTaggingStatusReqRes

// Customer tagging detail
// 参数类型
export type CustomerTaggingIdReqParams= ReqParamsType<'findByIdUsingGET_2'>
// 结果类型
export type CustomerTaggingIdReqRes= ReqResType<'findByIdUsingGET_2'>
// 结果中的data类型
export type CustomerTaggingIdReqData= ReqDataType<'findByIdUsingGET_2'>
    
export function getCustomerTaggingId(params: CustomerTaggingIdReqParams, config?: any): CustomerTaggingIdReqRes

export function deleteCustomerTaggingId(params: CustomerTaggingIdReqParams, config?: any): CustomerTaggingIdReqRes

// Customer tagging page list
// 参数类型
export type CustomerTaggingsReqParams= ReqParamsType<'findPageUsingGET_1'>
// 结果类型
export type CustomerTaggingsReqRes= ReqResType<'findPageUsingGET_1'>
// 结果中的data类型
export type CustomerTaggingsReqData= ReqDataType<'findPageUsingGET_1'>
    
export function getCustomerTaggings(params: CustomerTaggingsReqParams, config?: any): CustomerTaggingsReqRes
