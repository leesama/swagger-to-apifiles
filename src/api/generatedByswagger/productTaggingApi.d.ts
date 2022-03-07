
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostProductTaggingReqParams= ReqParamsType<'addTaggingUsingPOST'>
// 返回值类型
export type PostProductTaggingReqData= ReqDataType<'addTaggingUsingPOST'>
export function postProductTagging(params: PostProductTaggingReqParams, config?: any): Promise<PostProductTaggingReqData>

// 参数类型
export type PutProductTaggingReqParams= ReqParamsType<'updateTaggingUsingPUT'>
// 返回值类型
export type PutProductTaggingReqData= ReqDataType<'updateTaggingUsingPUT'>
export function putProductTagging(params: PutProductTaggingReqParams, config?: any): Promise<PutProductTaggingReqData>

// 参数类型
export type DeleteProductTaggingReqParams= ReqParamsType<'deleteTaggingUsingDELETE'>
// 返回值类型
export type DeleteProductTaggingReqData= ReqDataType<'deleteTaggingUsingDELETE'>
export function deleteProductTagging(params: DeleteProductTaggingReqParams, config?: any): Promise<DeleteProductTaggingReqData>

// 参数类型
export type GetProductTaggingListReqParams= ReqParamsType<'findTaggingListUsingGET'>
// 返回值类型
export type GetProductTaggingListReqData= ReqDataType<'findTaggingListUsingGET'>
export function getProductTaggingList(params: GetProductTaggingListReqParams, config?: any): Promise<GetProductTaggingListReqData>

// 参数类型
export type GetProductTaggingsReqParams= ReqParamsType<'findTaggingPageUsingGET'>
// 返回值类型
export type GetProductTaggingsReqData= ReqDataType<'findTaggingPageUsingGET'>
export function getProductTaggings(params: GetProductTaggingsReqParams, config?: any): Promise<GetProductTaggingsReqData>
