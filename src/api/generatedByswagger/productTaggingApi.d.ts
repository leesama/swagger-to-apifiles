
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostProductTaggingReqParams= ReqParamsType<'addTaggingUsingPOST'>
// 结果类型
export type PostProductTaggingReqRes= ReqResType<'addTaggingUsingPOST'>
// 结果中的data类型
export type PostProductTaggingReqData= ReqDataType<'addTaggingUsingPOST'>
export function postProductTagging(params: PostProductTaggingReqParams, config?: any): PostProductTaggingReqRes

// 参数类型
export type PutProductTaggingReqParams= ReqParamsType<'updateTaggingUsingPUT'>
// 结果类型
export type PutProductTaggingReqRes= ReqResType<'updateTaggingUsingPUT'>
// 结果中的data类型
export type PutProductTaggingReqData= ReqDataType<'updateTaggingUsingPUT'>
export function putProductTagging(params: PutProductTaggingReqParams, config?: any): PutProductTaggingReqRes

// 参数类型
export type DeleteProductTaggingReqParams= ReqParamsType<'deleteTaggingUsingDELETE'>
// 结果类型
export type DeleteProductTaggingReqRes= ReqResType<'deleteTaggingUsingDELETE'>
// 结果中的data类型
export type DeleteProductTaggingReqData= ReqDataType<'deleteTaggingUsingDELETE'>
export function deleteProductTagging(params: DeleteProductTaggingReqParams, config?: any): DeleteProductTaggingReqRes

// 参数类型
export type GetProductTaggingListReqParams= ReqParamsType<'findTaggingListUsingGET'>
// 结果类型
export type GetProductTaggingListReqRes= ReqResType<'findTaggingListUsingGET'>
// 结果中的data类型
export type GetProductTaggingListReqData= ReqDataType<'findTaggingListUsingGET'>
export function getProductTaggingList(params: GetProductTaggingListReqParams, config?: any): GetProductTaggingListReqRes

// 参数类型
export type GetProductTaggingsReqParams= ReqParamsType<'findTaggingPageUsingGET'>
// 结果类型
export type GetProductTaggingsReqRes= ReqResType<'findTaggingPageUsingGET'>
// 结果中的data类型
export type GetProductTaggingsReqData= ReqDataType<'findTaggingPageUsingGET'>
export function getProductTaggings(params: GetProductTaggingsReqParams, config?: any): GetProductTaggingsReqRes
