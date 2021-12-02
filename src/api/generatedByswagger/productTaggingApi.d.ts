
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add product tagging
// 参数类型
export type ProductTaggingReqParams= ReqParamsType<'addTaggingUsingPOST'>
// 结果类型
export type ProductTaggingReqRes= ReqResType<'addTaggingUsingPOST'>
// 结果中的data类型
export type ProductTaggingReqData= ReqDataType<'addTaggingUsingPOST'>
    
export function deleteProductTagging(params: ProductTaggingReqParams, config?: any): ProductTaggingReqRes

export function postProductTagging(params: ProductTaggingReqParams, config?: any): ProductTaggingReqRes

export function putProductTagging(params: ProductTaggingReqParams, config?: any): ProductTaggingReqRes

// Product tagging list
// 参数类型
export type ProductTaggingListReqParams= ReqParamsType<'findTaggingListUsingGET'>
// 结果类型
export type ProductTaggingListReqRes= ReqResType<'findTaggingListUsingGET'>
// 结果中的data类型
export type ProductTaggingListReqData= ReqDataType<'findTaggingListUsingGET'>
    
export function getProductTaggingList(params: ProductTaggingListReqParams, config?: any): ProductTaggingListReqRes

// Product tagging page list
// 参数类型
export type ProductTaggingsReqParams= ReqParamsType<'findTaggingPageUsingGET'>
// 结果类型
export type ProductTaggingsReqRes= ReqResType<'findTaggingPageUsingGET'>
// 结果中的data类型
export type ProductTaggingsReqData= ReqDataType<'findTaggingPageUsingGET'>
    
export function getProductTaggings(params: ProductTaggingsReqParams, config?: any): ProductTaggingsReqRes
