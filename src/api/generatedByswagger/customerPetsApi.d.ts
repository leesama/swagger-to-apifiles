
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetCustomerPetsPropRelationIdReqParams= ReqParamsType<'queryByPetsIdUsingGET'>['id']
// 返回值类型
export type GetCustomerPetsPropRelationIdReqData= ReqDataType<'queryByPetsIdUsingGET'>
export function getCustomerPetsPropRelationId(params: GetCustomerPetsPropRelationIdReqParams, config?: any): Promise<GetCustomerPetsPropRelationIdReqData>

// 参数类型
export type GetPetDetailsIdReqParams= ReqParamsType<'findByPetIdUsingGET'>['id']
// 返回值类型
export type GetPetDetailsIdReqData= ReqDataType<'findByPetIdUsingGET'>
export function getPetDetailsId(params: GetPetDetailsIdReqParams, config?: any): Promise<GetPetDetailsIdReqData>

// 参数类型
export type PostPetExcelReqParams= ReqParamsType<'importPetsUsingPOST'>
// 返回值类型
export type PostPetExcelReqData= ReqDataType<'importPetsUsingPOST'>
export function postPetExcel(params: PostPetExcelReqParams, config?: any): Promise<PostPetExcelReqData>

// 参数类型
export type GetPetExcelTemplateReqParams= ReqParamsType<'exportPetTemplateUsingGET'>
// 返回值类型
export type GetPetExcelTemplateReqData= ReqDataType<'exportPetTemplateUsingGET'>
export function getPetExcelTemplate(params: GetPetExcelTemplateReqParams, config?: any): Promise<GetPetExcelTemplateReqData>

// 参数类型
export type GetPetHistoryExcelReqParams= ReqParamsType<'petExcelHistoryUsingGET'>
// 返回值类型
export type GetPetHistoryExcelReqData= ReqDataType<'petExcelHistoryUsingGET'>
export function getPetHistoryExcel(params: GetPetHistoryExcelReqParams, config?: any): Promise<GetPetHistoryExcelReqData>

// 参数类型
export type DeletePetIdReqParams= ReqParamsType<'deleteUsingDELETE_3'>['id']
// 返回值类型
export type DeletePetIdReqData= ReqDataType<'deleteUsingDELETE_3'>
export function deletePetId(params: DeletePetIdReqParams, config?: any): Promise<DeletePetIdReqData>

// 参数类型
export type GetPetsAssignedPartnerContactsReqParams= ReqParamsType<'queryByPetsIdUsingGET_1'>
// 返回值类型
export type GetPetsAssignedPartnerContactsReqData= ReqDataType<'queryByPetsIdUsingGET_1'>
export function getPetsAssignedPartnerContacts(params: GetPetsAssignedPartnerContactsReqParams, config?: any): Promise<GetPetsAssignedPartnerContactsReqData>

// 参数类型
export type GetPetsHealthContextsReqParams= ReqParamsType<'queryByPetsIdUsingGET_2'>
// 返回值类型
export type GetPetsHealthContextsReqData= ReqDataType<'queryByPetsIdUsingGET_2'>
export function getPetsHealthContexts(params: GetPetsHealthContextsReqParams, config?: any): Promise<GetPetsHealthContextsReqData>

// 参数类型
export type GetPetsOwnershipHistorysReqParams= ReqParamsType<'queryByPetsIdUsingGET_3'>
// 返回值类型
export type GetPetsOwnershipHistorysReqData= ReqDataType<'queryByPetsIdUsingGET_3'>
export function getPetsOwnershipHistorys(params: GetPetsOwnershipHistorysReqParams, config?: any): Promise<GetPetsOwnershipHistorysReqData>

// 参数类型
export type GetPetsPurchasePlacePreferencesReqParams= ReqParamsType<'queryByPetsIdUsingGET_4'>
// 返回值类型
export type GetPetsPurchasePlacePreferencesReqData= ReqDataType<'queryByPetsIdUsingGET_4'>
export function getPetsPurchasePlacePreferences(params: GetPetsPurchasePlacePreferencesReqParams, config?: any): Promise<GetPetsPurchasePlacePreferencesReqData>

// 参数类型
export type GetPetsWeightBcsReqParams= ReqParamsType<'queryByPetsIdUsingGET_5'>
// 返回值类型
export type GetPetsWeightBcsReqData= ReqDataType<'queryByPetsIdUsingGET_5'>
export function getPetsWeightBcs(params: GetPetsWeightBcsReqParams, config?: any): Promise<GetPetsWeightBcsReqData>

// 参数类型
export type GetPetsIdReqParams= ReqParamsType<'findByOktaIdUsingGET'>['id']
// 返回值类型
export type GetPetsIdReqData= ReqDataType<'findByOktaIdUsingGET'>
export function getPetsId(params: GetPetsIdReqParams, config?: any): Promise<GetPetsIdReqData>
