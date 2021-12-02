
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add partner group
// 参数类型
export type PartnerGroupReqParams= ReqParamsType<'addUsingPOST_4'>
// 结果类型
export type PartnerGroupReqRes= ReqResType<'addUsingPOST_4'>
// 结果中的data类型
export type PartnerGroupReqData= ReqDataType<'addUsingPOST_4'>
    
export function postPartnerGroup(params: PartnerGroupReqParams, config?: any): PartnerGroupReqRes

export function putPartnerGroup(params: PartnerGroupReqParams, config?: any): PartnerGroupReqRes

// Partner group history page list
// 参数类型
export type PartnerGroupHistoryReqParams= ReqParamsType<'historyUsingGET'>
// 结果类型
export type PartnerGroupHistoryReqRes= ReqResType<'historyUsingGET'>
// 结果中的data类型
export type PartnerGroupHistoryReqData= ReqDataType<'historyUsingGET'>
    
export function getPartnerGroupHistory(params: PartnerGroupHistoryReqParams, config?: any): PartnerGroupHistoryReqRes

// Partner group member detail
// 参数类型
export type PartnerGroupMemberReqParams= ReqParamsType<'findByIdUsingGET_3'>
// 结果类型
export type PartnerGroupMemberReqRes= ReqResType<'findByIdUsingGET_3'>
// 结果中的data类型
export type PartnerGroupMemberReqData= ReqDataType<'findByIdUsingGET_3'>
    
export function getPartnerGroupMember(params: PartnerGroupMemberReqParams, config?: any): PartnerGroupMemberReqRes

// Delete partner group member
// 参数类型
export type PartnerGroupMemberIdReqParams= ReqParamsType<'deleteMemberUsingDELETE'>
// 结果类型
export type PartnerGroupMemberIdReqRes= ReqResType<'deleteMemberUsingDELETE'>
// 结果中的data类型
export type PartnerGroupMemberIdReqData= ReqDataType<'deleteMemberUsingDELETE'>
    
export function deletePartnerGroupMemberId(params: PartnerGroupMemberIdReqParams, config?: any): PartnerGroupMemberIdReqRes

// Partner group member page list
// 参数类型
export type PartnerGroupMembersReqParams= ReqParamsType<'memberUsingGET'>
// 结果类型
export type PartnerGroupMembersReqRes= ReqResType<'memberUsingGET'>
// 结果中的data类型
export type PartnerGroupMembersReqData= ReqDataType<'memberUsingGET'>
    
export function getPartnerGroupMembers(params: PartnerGroupMembersReqParams, config?: any): PartnerGroupMembersReqRes

// Download partner group excel
// 参数类型
export type PartnerGroupDownloadExcelUrlReqParams= ReqParamsType<'downloadExcelUsingGET'>
// 结果类型
export type PartnerGroupDownloadExcelUrlReqRes= ReqResType<'downloadExcelUsingGET'>
// 结果中的data类型
export type PartnerGroupDownloadExcelUrlReqData= ReqDataType<'downloadExcelUsingGET'>
    
export function getPartnerGroupDownloadExcelUrl(params: PartnerGroupDownloadExcelUrlReqParams, config?: any): PartnerGroupDownloadExcelUrlReqRes

// Download partner group image
// 参数类型
export type PartnerGroupDownloadImageUrlReqParams= ReqParamsType<'downloadImageUsingGET'>
// 结果类型
export type PartnerGroupDownloadImageUrlReqRes= ReqResType<'downloadImageUsingGET'>
// 结果中的data类型
export type PartnerGroupDownloadImageUrlReqData= ReqDataType<'downloadImageUsingGET'>
    
export function getPartnerGroupDownloadImageUrl(params: PartnerGroupDownloadImageUrlReqParams, config?: any): PartnerGroupDownloadImageUrlReqRes

// Upload partner group excel
// 参数类型
export type PartnerGroupExcelReqParams= ReqParamsType<'uploadExcelUsingPOST'>
// 结果类型
export type PartnerGroupExcelReqRes= ReqResType<'uploadExcelUsingPOST'>
// 结果中的data类型
export type PartnerGroupExcelReqData= ReqDataType<'uploadExcelUsingPOST'>
    
export function postPartnerGroupExcel(params: PartnerGroupExcelReqParams, config?: any): PartnerGroupExcelReqRes

// Upload partner group image
// 参数类型
export type PartnerGroupImageReqParams= ReqParamsType<'uploadImageUsingPOST_1'>
// 结果类型
export type PartnerGroupImageReqRes= ReqResType<'uploadImageUsingPOST_1'>
// 结果中的data类型
export type PartnerGroupImageReqData= ReqDataType<'uploadImageUsingPOST_1'>
    
export function postPartnerGroupImage(params: PartnerGroupImageReqParams, config?: any): PartnerGroupImageReqRes

// Delete partner group
// 参数类型
export type PartnerGroupIdReqParams= ReqParamsType<'deleteUsingDELETE_4'>
// 结果类型
export type PartnerGroupIdReqRes= ReqResType<'deleteUsingDELETE_4'>
// 结果中的data类型
export type PartnerGroupIdReqData= ReqDataType<'deleteUsingDELETE_4'>
    
export function deletePartnerGroupId(params: PartnerGroupIdReqParams, config?: any): PartnerGroupIdReqRes

// Partner group page list
// 参数类型
export type PartnerGroupsReqParams= ReqParamsType<'pageUsingGET_3'>
// 结果类型
export type PartnerGroupsReqRes= ReqResType<'pageUsingGET_3'>
// 结果中的data类型
export type PartnerGroupsReqData= ReqDataType<'pageUsingGET_3'>
    
export function getPartnerGroups(params: PartnerGroupsReqParams, config?: any): PartnerGroupsReqRes
