
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetCollectionsWithRelatedProductsReqParams= ReqParamsType<'pageUsingGET_1'>
// 返回值类型
export type GetCollectionsWithRelatedProductsReqData= ReqDataType<'pageUsingGET_1'>
export function getCollectionsWithRelatedProducts(params: GetCollectionsWithRelatedProductsReqParams, config?: any): Promise<GetCollectionsWithRelatedProductsReqData>

// 参数类型
export type GetLifestyleSyncReqParams= ReqParamsType<'lifestyleSyncUsingGET'>
// 返回值类型
export type GetLifestyleSyncReqData= ReqDataType<'lifestyleSyncUsingGET'>
export function getLifestyleSync(params: GetLifestyleSyncReqParams, config?: any): Promise<GetLifestyleSyncReqData>

// 参数类型
export type GetPoxGoodsReqParams= ReqParamsType<'pageUsingGET_6'>
// 返回值类型
export type GetPoxGoodsReqData= ReqDataType<'pageUsingGET_6'>
export function getPoxGoods(params: GetPoxGoodsReqParams, config?: any): Promise<GetPoxGoodsReqData>

// 参数类型
export type GetPoxGoodsDetailExtnernalIdExtnernalIdReqParams= ReqParamsType<'detailByExtnernalIdUsingGET'>['extnernalId']
// 返回值类型
export type GetPoxGoodsDetailExtnernalIdExtnernalIdReqData= ReqDataType<'detailByExtnernalIdUsingGET'>
export function getPoxGoodsDetailExtnernalIdExtnernalId(params: GetPoxGoodsDetailExtnernalIdExtnernalIdReqParams, config?: any): Promise<GetPoxGoodsDetailExtnernalIdExtnernalIdReqData>

// 参数类型
export type GetPoxGoodsDetailIdReqParams= ReqParamsType<'detailUsingGET_1'>['id']
// 返回值类型
export type GetPoxGoodsDetailIdReqData= ReqDataType<'detailUsingGET_1'>
export function getPoxGoodsDetailId(params: GetPoxGoodsDetailIdReqParams, config?: any): Promise<GetPoxGoodsDetailIdReqData>

// 参数类型
export type GetPoxGoodsInfoReqParams= ReqParamsType<'pageUsingGET_7'>
// 返回值类型
export type GetPoxGoodsInfoReqData= ReqDataType<'pageUsingGET_7'>
export function getPoxGoodsInfo(params: GetPoxGoodsInfoReqParams, config?: any): Promise<GetPoxGoodsInfoReqData>

// 参数类型
export type GetPoxGoodsInfoIdReqParams= ReqParamsType<'queryUsingGET_2'>['id']
// 返回值类型
export type GetPoxGoodsInfoIdReqData= ReqDataType<'queryUsingGET_2'>
export function getPoxGoodsInfoId(params: GetPoxGoodsInfoIdReqParams, config?: any): Promise<GetPoxGoodsInfoIdReqData>

// 参数类型
export type GetPoxGoodsSyncReqParams= ReqParamsType<'syncPoxGoodsUsingGET'>
// 返回值类型
export type GetPoxGoodsSyncReqData= ReqDataType<'syncPoxGoodsUsingGET'>
export function getPoxGoodsSync(params: GetPoxGoodsSyncReqParams, config?: any): Promise<GetPoxGoodsSyncReqData>

// 参数类型
export type PostProductFinderReqParams= ReqParamsType<'findPageUsingPOST'>
// 返回值类型
export type PostProductFinderReqData= ReqDataType<'findPageUsingPOST'>
export function postProductFinder(params: PostProductFinderReqParams, config?: any): Promise<PostProductFinderReqData>

// 参数类型
export type GetSpeciesCodeSyncReqParams= ReqParamsType<'speciesCodeSyncUsingGET'>
// 返回值类型
export type GetSpeciesCodeSyncReqData= ReqDataType<'speciesCodeSyncUsingGET'>
export function getSpeciesCodeSync(params: GetSpeciesCodeSyncReqParams, config?: any): Promise<GetSpeciesCodeSyncReqData>
