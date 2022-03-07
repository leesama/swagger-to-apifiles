
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCustomerCategoryReqParams= ReqParamsType<'addUsingPOST_4'>
// 返回值类型
export type PostCustomerCategoryReqData= ReqDataType<'addUsingPOST_4'>
export function postCustomerCategory(params: PostCustomerCategoryReqParams, config?: any): Promise<PostCustomerCategoryReqData>

// 参数类型
export type PutCustomerCategoryReqParams= ReqParamsType<'updateUsingPUT'>
// 返回值类型
export type PutCustomerCategoryReqData= ReqDataType<'updateUsingPUT'>
export function putCustomerCategory(params: PutCustomerCategoryReqParams, config?: any): Promise<PutCustomerCategoryReqData>

// 参数类型
export type PostCustomerCategoryImageReqParams= ReqParamsType<'uploadImageUsingPOST'>
// 返回值类型
export type PostCustomerCategoryImageReqData= ReqDataType<'uploadImageUsingPOST'>
export function postCustomerCategoryImage(params: PostCustomerCategoryImageReqParams, config?: any): Promise<PostCustomerCategoryImageReqData>

// 参数类型
export type GetCustomerCategoryIdReqParams= ReqParamsType<'findByIdUsingGET_2'>['id']
// 返回值类型
export type GetCustomerCategoryIdReqData= ReqDataType<'findByIdUsingGET_2'>
export function getCustomerCategoryId(params: GetCustomerCategoryIdReqParams, config?: any): Promise<GetCustomerCategoryIdReqData>

// 参数类型
export type DeleteCustomerCategoryIdReqParams= ReqParamsType<'deleteUsingDELETE_2'>['id']
// 返回值类型
export type DeleteCustomerCategoryIdReqData= ReqDataType<'deleteUsingDELETE_2'>
export function deleteCustomerCategoryId(params: DeleteCustomerCategoryIdReqParams, config?: any): Promise<DeleteCustomerCategoryIdReqData>

// 参数类型
export type GetCustomerCategorysReqParams= ReqParamsType<'findPageUsingGET'>
// 返回值类型
export type GetCustomerCategorysReqData= ReqDataType<'findPageUsingGET'>
export function getCustomerCategorys(params: GetCustomerCategorysReqParams, config?: any): Promise<GetCustomerCategorysReqData>
