
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Customer pets prop relation page list
// 参数类型
export type CustomerPetsPropRelationIdReqParams= ReqParamsType<'queryByPetsIdUsingGET'>
// 结果类型
export type CustomerPetsPropRelationIdReqRes= ReqResType<'queryByPetsIdUsingGET'>
// 结果中的data类型
export type CustomerPetsPropRelationIdReqData= ReqDataType<'queryByPetsIdUsingGET'>
    
export function getCustomerPetsPropRelationId(params: CustomerPetsPropRelationIdReqParams, config?: any): CustomerPetsPropRelationIdReqRes

// Customer pets page list
// 参数类型
export type CustomerPetsIdReqParams= ReqParamsType<'findByPetsIdUsingGET'>
// 结果类型
export type CustomerPetsIdReqRes= ReqResType<'findByPetsIdUsingGET'>
// 结果中的data类型
export type CustomerPetsIdReqData= ReqDataType<'findByPetsIdUsingGET'>
    
export function getCustomerPetsId(params: CustomerPetsIdReqParams, config?: any): CustomerPetsIdReqRes

export function deleteCustomerPetsId(params: CustomerPetsIdReqParams, config?: any): CustomerPetsIdReqRes

// Pets assigned partner contacts page list
// 参数类型
export type PetsAssignedPartnerContactsReqParams= ReqParamsType<'queryByPetsIdUsingGET_1'>
// 结果类型
export type PetsAssignedPartnerContactsReqRes= ReqResType<'queryByPetsIdUsingGET_1'>
// 结果中的data类型
export type PetsAssignedPartnerContactsReqData= ReqDataType<'queryByPetsIdUsingGET_1'>
    
export function getPetsAssignedPartnerContacts(params: PetsAssignedPartnerContactsReqParams, config?: any): PetsAssignedPartnerContactsReqRes

// Pets health context page list
// 参数类型
export type PetsHealthContextsReqParams= ReqParamsType<'queryByPetsIdUsingGET_2'>
// 结果类型
export type PetsHealthContextsReqRes= ReqResType<'queryByPetsIdUsingGET_2'>
// 结果中的data类型
export type PetsHealthContextsReqData= ReqDataType<'queryByPetsIdUsingGET_2'>
    
export function getPetsHealthContexts(params: PetsHealthContextsReqParams, config?: any): PetsHealthContextsReqRes

// Pets ownership history page list
// 参数类型
export type PetsOwnershipHistorysReqParams= ReqParamsType<'queryByPetsIdUsingGET_3'>
// 结果类型
export type PetsOwnershipHistorysReqRes= ReqResType<'queryByPetsIdUsingGET_3'>
// 结果中的data类型
export type PetsOwnershipHistorysReqData= ReqDataType<'queryByPetsIdUsingGET_3'>
    
export function getPetsOwnershipHistorys(params: PetsOwnershipHistorysReqParams, config?: any): PetsOwnershipHistorysReqRes

// Pets purchase place preferences page list
// 参数类型
export type PetsPurchasePlacePreferencesReqParams= ReqParamsType<'queryByPetsIdUsingGET_4'>
// 结果类型
export type PetsPurchasePlacePreferencesReqRes= ReqResType<'queryByPetsIdUsingGET_4'>
// 结果中的data类型
export type PetsPurchasePlacePreferencesReqData= ReqDataType<'queryByPetsIdUsingGET_4'>
    
export function getPetsPurchasePlacePreferences(params: PetsPurchasePlacePreferencesReqParams, config?: any): PetsPurchasePlacePreferencesReqRes

// Pets weight bcs series page list
// 参数类型
export type PetsWeightBcsReqParams= ReqParamsType<'queryByPetsIdUsingGET_5'>
// 结果类型
export type PetsWeightBcsReqRes= ReqResType<'queryByPetsIdUsingGET_5'>
// 结果中的data类型
export type PetsWeightBcsReqData= ReqDataType<'queryByPetsIdUsingGET_5'>
    
export function getPetsWeightBcs(params: PetsWeightBcsReqParams, config?: any): PetsWeightBcsReqRes

// Import customer pets
// 参数类型
export type PetsExcelReqParams= ReqParamsType<'importCustomerPetsListUsingPOST'>
// 结果类型
export type PetsExcelReqRes= ReqResType<'importCustomerPetsListUsingPOST'>
// 结果中的data类型
export type PetsExcelReqData= ReqDataType<'importCustomerPetsListUsingPOST'>
    
export function postPetsExcel(params: PetsExcelReqParams, config?: any): PetsExcelReqRes

// Export pets template
// 参数类型
export type PetsExcelTemplateReqParams= ReqParamsType<'exportTemplateUsingGET'>
// 结果类型
export type PetsExcelTemplateReqRes= ReqResType<'exportTemplateUsingGET'>
// 结果中的data类型
export type PetsExcelTemplateReqData= ReqDataType<'exportTemplateUsingGET'>
    
export function getPetsExcelTemplate(params: PetsExcelTemplateReqParams, config?: any): PetsExcelTemplateReqRes

//  Pets history excel
// 参数类型
export type PetsHistoryExcelReqParams= ReqParamsType<'historyPageUsingGET'>
// 结果类型
export type PetsHistoryExcelReqRes= ReqResType<'historyPageUsingGET'>
// 结果中的data类型
export type PetsHistoryExcelReqData= ReqDataType<'historyPageUsingGET'>
    
export function getPetsHistoryExcel(params: PetsHistoryExcelReqParams, config?: any): PetsHistoryExcelReqRes

// Pets detail
// 参数类型
export type PetsIdReqParams= ReqParamsType<'findByIdUsingGET_1'>
// 结果类型
export type PetsIdReqRes= ReqResType<'findByIdUsingGET_1'>
// 结果中的data类型
export type PetsIdReqData= ReqDataType<'findByIdUsingGET_1'>
    
export function getPetsId(params: PetsIdReqParams, config?: any): PetsIdReqRes
