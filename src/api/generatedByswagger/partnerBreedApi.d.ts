
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetBreedCodeReqParams= ReqParamsType<'breedCodePageUsingGET'>
// 结果类型
export type GetBreedCodeReqRes= ReqResType<'breedCodePageUsingGET'>
// 结果中的data类型
export type GetBreedCodeReqData= ReqDataType<'breedCodePageUsingGET'>
export function getBreedCode(params: GetBreedCodeReqParams, config?: any): GetBreedCodeReqRes

// 参数类型
export type GetBreedsReqParams= ReqParamsType<'pageUsingGET_1'>
// 结果类型
export type GetBreedsReqRes= ReqResType<'pageUsingGET_1'>
// 结果中的data类型
export type GetBreedsReqData= ReqDataType<'pageUsingGET_1'>
export function getBreeds(params: GetBreedsReqParams, config?: any): GetBreedsReqRes

// 参数类型
export type PostPartnerBreedReqParams= ReqParamsType<'addUsingPOST_3'>
// 结果类型
export type PostPartnerBreedReqRes= ReqResType<'addUsingPOST_3'>
// 结果中的data类型
export type PostPartnerBreedReqData= ReqDataType<'addUsingPOST_3'>
export function postPartnerBreed(params: PostPartnerBreedReqParams, config?: any): PostPartnerBreedReqRes

// 参数类型
export type GetPartnerBreedSpeciesReqParams= ReqParamsType<'speciesUsingGET'>
// 结果类型
export type GetPartnerBreedSpeciesReqRes= ReqResType<'speciesUsingGET'>
// 结果中的data类型
export type GetPartnerBreedSpeciesReqData= ReqDataType<'speciesUsingGET'>
export function getPartnerBreedSpecies(params: GetPartnerBreedSpeciesReqParams, config?: any): GetPartnerBreedSpeciesReqRes

// 参数类型
export type GetPartnerBreedSyncReqParams= ReqParamsType<'breedSyncUsingGET'>
// 结果类型
export type GetPartnerBreedSyncReqRes= ReqResType<'breedSyncUsingGET'>
// 结果中的data类型
export type GetPartnerBreedSyncReqData= ReqDataType<'breedSyncUsingGET'>
export function getPartnerBreedSync(params: GetPartnerBreedSyncReqParams, config?: any): GetPartnerBreedSyncReqRes

// 参数类型
export type GetPartnerBreedUniversesReqParams= ReqParamsType<'universesUsingGET'>
// 结果类型
export type GetPartnerBreedUniversesReqRes= ReqResType<'universesUsingGET'>
// 结果中的data类型
export type GetPartnerBreedUniversesReqData= ReqDataType<'universesUsingGET'>
export function getPartnerBreedUniverses(params: GetPartnerBreedUniversesReqParams, config?: any): GetPartnerBreedUniversesReqRes

// 参数类型
export type DeletePartnerBreedIdReqParams= ReqParamsType<'deleteUsingDELETE_3'>
// 结果类型
export type DeletePartnerBreedIdReqRes= ReqResType<'deleteUsingDELETE_3'>
// 结果中的data类型
export type DeletePartnerBreedIdReqData= ReqDataType<'deleteUsingDELETE_3'>
export function deletePartnerBreedId(params: DeletePartnerBreedIdReqParams, config?: any): DeletePartnerBreedIdReqRes

// 参数类型
export type GetPartnerBreedsReqParams= ReqParamsType<'pageUsingGET_2'>
// 结果类型
export type GetPartnerBreedsReqRes= ReqResType<'pageUsingGET_2'>
// 结果中的data类型
export type GetPartnerBreedsReqData= ReqDataType<'pageUsingGET_2'>
export function getPartnerBreeds(params: GetPartnerBreedsReqParams, config?: any): GetPartnerBreedsReqRes
