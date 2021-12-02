
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add customer category
// 参数类型
export type CustomerCategoryReqParams= ReqParamsType<'addUsingPOST_1'>
// 结果类型
export type CustomerCategoryReqRes= ReqResType<'addUsingPOST_1'>
// 结果中的data类型
export type CustomerCategoryReqData= ReqDataType<'addUsingPOST_1'>
    
export function postCustomerCategory(params: CustomerCategoryReqParams, config?: any): CustomerCategoryReqRes

export function putCustomerCategory(params: CustomerCategoryReqParams, config?: any): CustomerCategoryReqRes

// Upload customer category image
// 参数类型
export type CustomerCategoryImageReqParams= ReqParamsType<'uploadImageUsingPOST'>
// 结果类型
export type CustomerCategoryImageReqRes= ReqResType<'uploadImageUsingPOST'>
// 结果中的data类型
export type CustomerCategoryImageReqData= ReqDataType<'uploadImageUsingPOST'>
    
export function postCustomerCategoryImage(params: CustomerCategoryImageReqParams, config?: any): CustomerCategoryImageReqRes

// Customer category detail
// 参数类型
export type CustomerCategoryIdReqParams= ReqParamsType<'findByIdUsingGET'>
// 结果类型
export type CustomerCategoryIdReqRes= ReqResType<'findByIdUsingGET'>
// 结果中的data类型
export type CustomerCategoryIdReqData= ReqDataType<'findByIdUsingGET'>
    
export function getCustomerCategoryId(params: CustomerCategoryIdReqParams, config?: any): CustomerCategoryIdReqRes

export function deleteCustomerCategoryId(params: CustomerCategoryIdReqParams, config?: any): CustomerCategoryIdReqRes

// Customer category page list
// 参数类型
export type CustomerCategorysReqParams= ReqParamsType<'findPageUsingGET'>
// 结果类型
export type CustomerCategorysReqRes= ReqResType<'findPageUsingGET'>
// 结果中的data类型
export type CustomerCategorysReqData= ReqDataType<'findPageUsingGET'>
    
export function getCustomerCategorys(params: CustomerCategorysReqParams, config?: any): CustomerCategorysReqRes
