
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCustomerCategoryReqParams= ReqParamsType<'addUsingPOST_1'>
// 结果类型
export type PostCustomerCategoryReqRes= ReqResType<'addUsingPOST_1'>
// 结果中的data类型
export type PostCustomerCategoryReqData= ReqDataType<'addUsingPOST_1'>
export function postCustomerCategory(params: PostCustomerCategoryReqParams, config?: any): PostCustomerCategoryReqRes

// 参数类型
export type PutCustomerCategoryReqParams= ReqParamsType<'updateUsingPUT'>
// 结果类型
export type PutCustomerCategoryReqRes= ReqResType<'updateUsingPUT'>
// 结果中的data类型
export type PutCustomerCategoryReqData= ReqDataType<'updateUsingPUT'>
export function putCustomerCategory(params: PutCustomerCategoryReqParams, config?: any): PutCustomerCategoryReqRes

// 参数类型
export type PostCustomerCategoryImageReqParams= ReqParamsType<'uploadImageUsingPOST'>
// 结果类型
export type PostCustomerCategoryImageReqRes= ReqResType<'uploadImageUsingPOST'>
// 结果中的data类型
export type PostCustomerCategoryImageReqData= ReqDataType<'uploadImageUsingPOST'>
export function postCustomerCategoryImage(params: PostCustomerCategoryImageReqParams, config?: any): PostCustomerCategoryImageReqRes

// 参数类型
export type GetCustomerCategoryIdReqParams= ReqParamsType<'findByIdUsingGET'>
// 结果类型
export type GetCustomerCategoryIdReqRes= ReqResType<'findByIdUsingGET'>
// 结果中的data类型
export type GetCustomerCategoryIdReqData= ReqDataType<'findByIdUsingGET'>
export function getCustomerCategoryId(params: GetCustomerCategoryIdReqParams, config?: any): GetCustomerCategoryIdReqRes

// 参数类型
export type DeleteCustomerCategoryIdReqParams= ReqParamsType<'deleteUsingDELETE'>
// 结果类型
export type DeleteCustomerCategoryIdReqRes= ReqResType<'deleteUsingDELETE'>
// 结果中的data类型
export type DeleteCustomerCategoryIdReqData= ReqDataType<'deleteUsingDELETE'>
export function deleteCustomerCategoryId(params: DeleteCustomerCategoryIdReqParams, config?: any): DeleteCustomerCategoryIdReqRes

// 参数类型
export type GetCustomerCategorysReqParams= ReqParamsType<'findPageUsingGET'>
// 结果类型
export type GetCustomerCategorysReqRes= ReqResType<'findPageUsingGET'>
// 结果中的data类型
export type GetCustomerCategorysReqData= ReqDataType<'findPageUsingGET'>
export function getCustomerCategorys(params: GetCustomerCategorysReqParams, config?: any): GetCustomerCategorysReqRes
