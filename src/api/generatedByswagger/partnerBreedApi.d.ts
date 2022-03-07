
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetBreedCodeReqParams= ReqParamsType<'breedCodesUsingGET'>
// 返回值类型
export type GetBreedCodeReqData= ReqDataType<'breedCodesUsingGET'>
export function getBreedCode(params: GetBreedCodeReqParams, config?: any): Promise<GetBreedCodeReqData>

// 参数类型
export type PostDeletePartnerBreedReqParams= ReqParamsType<'deleteBreedUsingPOST'>
// 返回值类型
export type PostDeletePartnerBreedReqData= ReqDataType<'deleteBreedUsingPOST'>
export function postDeletePartnerBreed(params: PostDeletePartnerBreedReqParams, config?: any): Promise<PostDeletePartnerBreedReqData>

// 参数类型
export type PostPartnerBreedReqParams= ReqParamsType<'addUsingPOST_6'>
// 返回值类型
export type PostPartnerBreedReqData= ReqDataType<'addUsingPOST_6'>
export function postPartnerBreed(params: PostPartnerBreedReqParams, config?: any): Promise<PostPartnerBreedReqData>

// 参数类型
export type GetPartnerBreedsReqParams= ReqParamsType<'pageUsingGET_2'>
// 返回值类型
export type GetPartnerBreedsReqData= ReqDataType<'pageUsingGET_2'>
export function getPartnerBreeds(params: GetPartnerBreedsReqParams, config?: any): Promise<GetPartnerBreedsReqData>
