
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// BreedCode page list
// 参数类型
export type BreedCodeReqParams= ReqParamsType<'breedCodePageUsingGET'>
// 结果类型
export type BreedCodeReqRes= ReqResType<'breedCodePageUsingGET'>
// 结果中的data类型
export type BreedCodeReqData= ReqDataType<'breedCodePageUsingGET'>
    
export function getBreedCode(params: BreedCodeReqParams, config?: any): BreedCodeReqRes

// Breed page list
// 参数类型
export type BreedsReqParams= ReqParamsType<'pageUsingGET_1'>
// 结果类型
export type BreedsReqRes= ReqResType<'pageUsingGET_1'>
// 结果中的data类型
export type BreedsReqData= ReqDataType<'pageUsingGET_1'>
    
export function getBreeds(params: BreedsReqParams, config?: any): BreedsReqRes

// Add partner breed
// 参数类型
export type PartnerBreedReqParams= ReqParamsType<'addUsingPOST_3'>
// 结果类型
export type PartnerBreedReqRes= ReqResType<'addUsingPOST_3'>
// 结果中的data类型
export type PartnerBreedReqData= ReqDataType<'addUsingPOST_3'>
    
export function postPartnerBreed(params: PartnerBreedReqParams, config?: any): PartnerBreedReqRes

// Partner breed species list
// 参数类型
export type PartnerBreedSpeciesReqParams= ReqParamsType<'speciesUsingGET'>
// 结果类型
export type PartnerBreedSpeciesReqRes= ReqResType<'speciesUsingGET'>
// 结果中的data类型
export type PartnerBreedSpeciesReqData= ReqDataType<'speciesUsingGET'>
    
export function getPartnerBreedSpecies(params: PartnerBreedSpeciesReqParams, config?: any): PartnerBreedSpeciesReqRes

// Partner breed synchronization
// 参数类型
export type PartnerBreedSyncReqParams= ReqParamsType<'breedSyncUsingGET'>
// 结果类型
export type PartnerBreedSyncReqRes= ReqResType<'breedSyncUsingGET'>
// 结果中的data类型
export type PartnerBreedSyncReqData= ReqDataType<'breedSyncUsingGET'>
    
export function getPartnerBreedSync(params: PartnerBreedSyncReqParams, config?: any): PartnerBreedSyncReqRes

// Partner breed universes list
// 参数类型
export type PartnerBreedUniversesReqParams= ReqParamsType<'universesUsingGET'>
// 结果类型
export type PartnerBreedUniversesReqRes= ReqResType<'universesUsingGET'>
// 结果中的data类型
export type PartnerBreedUniversesReqData= ReqDataType<'universesUsingGET'>
    
export function getPartnerBreedUniverses(params: PartnerBreedUniversesReqParams, config?: any): PartnerBreedUniversesReqRes

// Delete partner breed
// 参数类型
export type PartnerBreedIdReqParams= ReqParamsType<'deleteUsingDELETE_3'>
// 结果类型
export type PartnerBreedIdReqRes= ReqResType<'deleteUsingDELETE_3'>
// 结果中的data类型
export type PartnerBreedIdReqData= ReqDataType<'deleteUsingDELETE_3'>
    
export function deletePartnerBreedId(params: PartnerBreedIdReqParams, config?: any): PartnerBreedIdReqRes

// Partner breed page list
// 参数类型
export type PartnerBreedsReqParams= ReqParamsType<'pageUsingGET_2'>
// 结果类型
export type PartnerBreedsReqRes= ReqResType<'pageUsingGET_2'>
// 结果中的data类型
export type PartnerBreedsReqData= ReqDataType<'pageUsingGET_2'>
    
export function getPartnerBreeds(params: PartnerBreedsReqParams, config?: any): PartnerBreedsReqRes
