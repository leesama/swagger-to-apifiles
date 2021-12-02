
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Edit partner detail
// 参数类型
export type PartnerReqParams= ReqParamsType<'editRcInformationUsingPUT'>
// 结果类型
export type PartnerReqRes= ReqResType<'editRcInformationUsingPUT'>
// 结果中的data类型
export type PartnerReqData= ReqDataType<'editRcInformationUsingPUT'>
    
export function putPartner(params: PartnerReqParams, config?: any): PartnerReqRes

// Export partner member excel
// 参数类型
export type PartnerGroupMemberExcelReqParams= ReqParamsType<'exportGroupMemberUsingGET'>
// 结果类型
export type PartnerGroupMemberExcelReqRes= ReqResType<'exportGroupMemberUsingGET'>
// 结果中的data类型
export type PartnerGroupMemberExcelReqData= ReqDataType<'exportGroupMemberUsingGET'>
    
export function getPartnerGroupMemberExcel(params: PartnerGroupMemberExcelReqParams, config?: any): PartnerGroupMemberExcelReqRes

export function postPartnerGroupMemberExcel(params: PartnerGroupMemberExcelReqParams, config?: any): PartnerGroupMemberExcelReqRes

// Export partner member template
// 参数类型
export type PartnerGroupMemberExcelTemplateReqParams= ReqParamsType<'exportTemplateUsingGET_1'>
// 结果类型
export type PartnerGroupMemberExcelTemplateReqRes= ReqResType<'exportTemplateUsingGET_1'>
// 结果中的data类型
export type PartnerGroupMemberExcelTemplateReqData= ReqDataType<'exportTemplateUsingGET_1'>
    
export function getPartnerGroupMemberExcelTemplate(params: PartnerGroupMemberExcelTemplateReqParams, config?: any): PartnerGroupMemberExcelTemplateReqRes

// Partner invoice detail
// 参数类型
export type PartnerInvoiceIdReqParams= ReqParamsType<'queryUsingGET_1'>
// 结果类型
export type PartnerInvoiceIdReqRes= ReqResType<'queryUsingGET_1'>
// 结果中的data类型
export type PartnerInvoiceIdReqData= ReqDataType<'queryUsingGET_1'>
    
export function getPartnerInvoiceId(params: PartnerInvoiceIdReqParams, config?: any): PartnerInvoiceIdReqRes

// Partner public detail
// 参数类型
export type PartnerPublicIdReqParams= ReqParamsType<'queryUsingGET_2'>
// 结果类型
export type PartnerPublicIdReqRes= ReqResType<'queryUsingGET_2'>
// 结果中的data类型
export type PartnerPublicIdReqData= ReqDataType<'queryUsingGET_2'>
    
export function getPartnerPublicId(params: PartnerPublicIdReqParams, config?: any): PartnerPublicIdReqRes

// Synchronize partner list
// 参数类型
export type PartnerSyncReqParams= ReqParamsType<'synchronizePartnerListUsingPOST'>
// 结果类型
export type PartnerSyncReqRes= ReqResType<'synchronizePartnerListUsingPOST'>
// 结果中的data类型
export type PartnerSyncReqData= ReqDataType<'synchronizePartnerListUsingPOST'>
    
export function postPartnerSync(params: PartnerSyncReqParams, config?: any): PartnerSyncReqRes

// Partner detail
// 参数类型
export type PartnerIdReqParams= ReqParamsType<'queryRcInformationUsingGET'>
// 结果类型
export type PartnerIdReqRes= ReqResType<'queryRcInformationUsingGET'>
// 结果中的data类型
export type PartnerIdReqData= ReqDataType<'queryRcInformationUsingGET'>
    
export function getPartnerId(params: PartnerIdReqParams, config?: any): PartnerIdReqRes

// Partner page list
// 参数类型
export type PartnersReqParams= ReqParamsType<'partnerPageUsingGET'>
// 结果类型
export type PartnersReqRes= ReqResType<'partnerPageUsingGET'>
// 结果中的data类型
export type PartnersReqData= ReqDataType<'partnerPageUsingGET'>
    
export function getPartners(params: PartnersReqParams, config?: any): PartnersReqRes
