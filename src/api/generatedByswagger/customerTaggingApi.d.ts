
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCustomerTaggingReqParams= ReqParamsType<'addUsingPOST_5'>
// 返回值类型
export type PostCustomerTaggingReqData= ReqDataType<'addUsingPOST_5'>
export function postCustomerTagging(params: PostCustomerTaggingReqParams, config?: any): Promise<PostCustomerTaggingReqData>

// 参数类型
export type PutCustomerTaggingReqParams= ReqParamsType<'updateUsingPUT_1'>
// 返回值类型
export type PutCustomerTaggingReqData= ReqDataType<'updateUsingPUT_1'>
export function putCustomerTagging(params: PutCustomerTaggingReqParams, config?: any): Promise<PutCustomerTaggingReqData>

// 参数类型
export type PutCustomerTaggingStatusReqParams= ReqParamsType<'updateStatusUsingPUT_1'>
// 返回值类型
export type PutCustomerTaggingStatusReqData= ReqDataType<'updateStatusUsingPUT_1'>
export function putCustomerTaggingStatus(params: PutCustomerTaggingStatusReqParams, config?: any): Promise<PutCustomerTaggingStatusReqData>

// 参数类型
export type GetCustomerTaggingIdReqParams= ReqParamsType<'findByIdUsingGET_3'>['id']
// 返回值类型
export type GetCustomerTaggingIdReqData= ReqDataType<'findByIdUsingGET_3'>
export function getCustomerTaggingId(params: GetCustomerTaggingIdReqParams, config?: any): Promise<GetCustomerTaggingIdReqData>

// 参数类型
export type DeleteCustomerTaggingIdReqParams= ReqParamsType<'deleteUsingDELETE_4'>['id']
// 返回值类型
export type DeleteCustomerTaggingIdReqData= ReqDataType<'deleteUsingDELETE_4'>
export function deleteCustomerTaggingId(params: DeleteCustomerTaggingIdReqParams, config?: any): Promise<DeleteCustomerTaggingIdReqData>

// 参数类型
export type GetCustomerTaggingsReqParams= ReqParamsType<'findPageUsingGET_1'>
// 返回值类型
export type GetCustomerTaggingsReqData= ReqDataType<'findPageUsingGET_1'>
export function getCustomerTaggings(params: GetCustomerTaggingsReqParams, config?: any): Promise<GetCustomerTaggingsReqData>
