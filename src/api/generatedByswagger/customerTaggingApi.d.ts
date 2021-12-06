
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCustomerTaggingReqParams= ReqParamsType<'addUsingPOST_2'>
// 结果类型
export type PostCustomerTaggingReqRes= ReqResType<'addUsingPOST_2'>
// 结果中的data类型
export type PostCustomerTaggingReqData= ReqDataType<'addUsingPOST_2'>
export function postCustomerTagging(params: PostCustomerTaggingReqParams, config?: any): PostCustomerTaggingReqRes

// 参数类型
export type PutCustomerTaggingReqParams= ReqParamsType<'updateUsingPUT_1'>
// 结果类型
export type PutCustomerTaggingReqRes= ReqResType<'updateUsingPUT_1'>
// 结果中的data类型
export type PutCustomerTaggingReqData= ReqDataType<'updateUsingPUT_1'>
export function putCustomerTagging(params: PutCustomerTaggingReqParams, config?: any): PutCustomerTaggingReqRes

// 参数类型
export type PutCustomerTaggingStatusReqParams= ReqParamsType<'updateStatusUsingPUT'>
// 结果类型
export type PutCustomerTaggingStatusReqRes= ReqResType<'updateStatusUsingPUT'>
// 结果中的data类型
export type PutCustomerTaggingStatusReqData= ReqDataType<'updateStatusUsingPUT'>
export function putCustomerTaggingStatus(params: PutCustomerTaggingStatusReqParams, config?: any): PutCustomerTaggingStatusReqRes

// 参数类型
export type GetCustomerTaggingIdReqParams= ReqParamsType<'findByIdUsingGET_2'>
// 结果类型
export type GetCustomerTaggingIdReqRes= ReqResType<'findByIdUsingGET_2'>
// 结果中的data类型
export type GetCustomerTaggingIdReqData= ReqDataType<'findByIdUsingGET_2'>
export function getCustomerTaggingId(params: GetCustomerTaggingIdReqParams, config?: any): GetCustomerTaggingIdReqRes

// 参数类型
export type DeleteCustomerTaggingIdReqParams= ReqParamsType<'deleteUsingDELETE_2'>
// 结果类型
export type DeleteCustomerTaggingIdReqRes= ReqResType<'deleteUsingDELETE_2'>
// 结果中的data类型
export type DeleteCustomerTaggingIdReqData= ReqDataType<'deleteUsingDELETE_2'>
export function deleteCustomerTaggingId(params: DeleteCustomerTaggingIdReqParams, config?: any): DeleteCustomerTaggingIdReqRes

// 参数类型
export type GetCustomerTaggingsReqParams= ReqParamsType<'findPageUsingGET_1'>
// 结果类型
export type GetCustomerTaggingsReqRes= ReqResType<'findPageUsingGET_1'>
// 结果中的data类型
export type GetCustomerTaggingsReqData= ReqDataType<'findPageUsingGET_1'>
export function getCustomerTaggings(params: GetCustomerTaggingsReqParams, config?: any): GetCustomerTaggingsReqRes
