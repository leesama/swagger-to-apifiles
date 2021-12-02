
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Collections with related products page list
// 参数类型
export type CollectionsWithRelatedProductsReqParams= ReqParamsType<'pageUsingGET'>
// 结果类型
export type CollectionsWithRelatedProductsReqRes= ReqResType<'pageUsingGET'>
// 结果中的data类型
export type CollectionsWithRelatedProductsReqData= ReqDataType<'pageUsingGET'>
    
export function getCollectionsWithRelatedProducts(params: CollectionsWithRelatedProductsReqParams, config?: any): CollectionsWithRelatedProductsReqRes

// lifestyleSync
// 参数类型
export type LifestyleSyncReqParams= ReqParamsType<'speciesCodeSyncUsingGET'>
// 结果类型
export type LifestyleSyncReqRes= ReqResType<'speciesCodeSyncUsingGET'>
// 结果中的data类型
export type LifestyleSyncReqData= ReqDataType<'speciesCodeSyncUsingGET'>
    
export function getLifestyleSync(params: LifestyleSyncReqParams, config?: any): LifestyleSyncReqRes

// Collection  page
// 参数类型
export type PoxGoodsReqParams= ReqParamsType<'pageUsingGET_6'>
// 结果类型
export type PoxGoodsReqRes= ReqResType<'pageUsingGET_6'>
// 结果中的data类型
export type PoxGoodsReqData= ReqDataType<'pageUsingGET_6'>
    
export function getPoxGoods(params: PoxGoodsReqParams, config?: any): PoxGoodsReqRes

// Collection detail by extnernalId
// 参数类型
export type PoxGoodsDetailExtnernalIdExtnernalIdReqParams= ReqParamsType<'detailByExtnernalIdUsingGET'>
// 结果类型
export type PoxGoodsDetailExtnernalIdExtnernalIdReqRes= ReqResType<'detailByExtnernalIdUsingGET'>
// 结果中的data类型
export type PoxGoodsDetailExtnernalIdExtnernalIdReqData= ReqDataType<'detailByExtnernalIdUsingGET'>
    
export function getPoxGoodsDetailExtnernalIdExtnernalId(params: PoxGoodsDetailExtnernalIdExtnernalIdReqParams, config?: any): PoxGoodsDetailExtnernalIdExtnernalIdReqRes

// Collection detail
// 参数类型
export type PoxGoodsDetailIdReqParams= ReqParamsType<'detailUsingGET'>
// 结果类型
export type PoxGoodsDetailIdReqRes= ReqResType<'detailUsingGET'>
// 结果中的data类型
export type PoxGoodsDetailIdReqData= ReqDataType<'detailUsingGET'>
    
export function getPoxGoodsDetailId(params: PoxGoodsDetailIdReqParams, config?: any): PoxGoodsDetailIdReqRes

// Pox goods info page
// 参数类型
export type PoxGoodsInfoReqParams= ReqParamsType<'pageUsingGET_7'>
// 结果类型
export type PoxGoodsInfoReqRes= ReqResType<'pageUsingGET_7'>
// 结果中的data类型
export type PoxGoodsInfoReqData= ReqDataType<'pageUsingGET_7'>
    
export function getPoxGoodsInfo(params: PoxGoodsInfoReqParams, config?: any): PoxGoodsInfoReqRes

// Pox goods info list
// 参数类型
export type PoxGoodsInfoIdReqParams= ReqParamsType<'queryUsingGET_3'>
// 结果类型
export type PoxGoodsInfoIdReqRes= ReqResType<'queryUsingGET_3'>
// 结果中的data类型
export type PoxGoodsInfoIdReqData= ReqDataType<'queryUsingGET_3'>
    
export function getPoxGoodsInfoId(params: PoxGoodsInfoIdReqParams, config?: any): PoxGoodsInfoIdReqRes

// syncPoxGoods
// 参数类型
export type PoxGoodsSyncReqParams= ReqParamsType<'syncPoxGoodsUsingGET'>
// 结果类型
export type PoxGoodsSyncReqRes= ReqResType<'syncPoxGoodsUsingGET'>
// 结果中的data类型
export type PoxGoodsSyncReqData= ReqDataType<'syncPoxGoodsUsingGET'>
    
export function getPoxGoodsSync(params: PoxGoodsSyncReqParams, config?: any): PoxGoodsSyncReqRes

// ProductFinder page list
// 参数类型
export type ProductFinderReqParams= ReqParamsType<'findPageUsingPOST'>
// 结果类型
export type ProductFinderReqRes= ReqResType<'findPageUsingPOST'>
// 结果中的data类型
export type ProductFinderReqData= ReqDataType<'findPageUsingPOST'>
    
export function postProductFinder(params: ProductFinderReqParams, config?: any): ProductFinderReqRes

// SpeciesCodeSync
// 参数类型
export type SpeciesCodeSyncReqParams= ReqParamsType<'speciesCodeSyncUsingGET_1'>
// 结果类型
export type SpeciesCodeSyncReqRes= ReqResType<'speciesCodeSyncUsingGET_1'>
// 结果中的data类型
export type SpeciesCodeSyncReqData= ReqDataType<'speciesCodeSyncUsingGET_1'>
    
export function getSpeciesCodeSync(params: SpeciesCodeSyncReqParams, config?: any): SpeciesCodeSyncReqRes
