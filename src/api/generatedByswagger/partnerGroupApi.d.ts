
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostPartnerGroupReqParams= ReqParamsType<'addUsingPOST_7'>
// 返回值类型
export type PostPartnerGroupReqData= ReqDataType<'addUsingPOST_7'>
export function postPartnerGroup(params: PostPartnerGroupReqParams, config?: any): Promise<PostPartnerGroupReqData>

// 参数类型
export type PutPartnerGroupReqParams= ReqParamsType<'editUsingPUT_2'>
// 返回值类型
export type PutPartnerGroupReqData= ReqDataType<'editUsingPUT_2'>
export function putPartnerGroup(params: PutPartnerGroupReqParams, config?: any): Promise<PutPartnerGroupReqData>

// 参数类型
export type GetPartnerGroupHistoryReqParams= ReqParamsType<'historyUsingGET'>
// 返回值类型
export type GetPartnerGroupHistoryReqData= ReqDataType<'historyUsingGET'>
export function getPartnerGroupHistory(params: GetPartnerGroupHistoryReqParams, config?: any): Promise<GetPartnerGroupHistoryReqData>

// 参数类型
export type GetPartnerGroupMemberReqParams= ReqParamsType<'findByIdUsingGET_4'>
// 返回值类型
export type GetPartnerGroupMemberReqData= ReqDataType<'findByIdUsingGET_4'>
export function getPartnerGroupMember(params: GetPartnerGroupMemberReqParams, config?: any): Promise<GetPartnerGroupMemberReqData>

// 参数类型
export type DeletePartnerGroupMemberIdReqParams= ReqParamsType<'deleteMemberUsingDELETE'>['id']
// 返回值类型
export type DeletePartnerGroupMemberIdReqData= ReqDataType<'deleteMemberUsingDELETE'>
export function deletePartnerGroupMemberId(params: DeletePartnerGroupMemberIdReqParams, config?: any): Promise<DeletePartnerGroupMemberIdReqData>

// 参数类型
export type GetPartnerGroupMembersReqParams= ReqParamsType<'memberUsingGET'>
// 返回值类型
export type GetPartnerGroupMembersReqData= ReqDataType<'memberUsingGET'>
export function getPartnerGroupMembers(params: GetPartnerGroupMembersReqParams, config?: any): Promise<GetPartnerGroupMembersReqData>

// 参数类型
export type GetPartnerGroupDownloadExcelUrlReqParams= ReqParamsType<'downloadExcelUsingGET'>['url']
// 返回值类型
export type GetPartnerGroupDownloadExcelUrlReqData= ReqDataType<'downloadExcelUsingGET'>
export function getPartnerGroupDownloadExcelUrl(params: GetPartnerGroupDownloadExcelUrlReqParams, config?: any): Promise<GetPartnerGroupDownloadExcelUrlReqData>

// 参数类型
export type GetPartnerGroupDownloadImageUrlReqParams= ReqParamsType<'downloadImageUsingGET'>['url']
// 返回值类型
export type GetPartnerGroupDownloadImageUrlReqData= ReqDataType<'downloadImageUsingGET'>
export function getPartnerGroupDownloadImageUrl(params: GetPartnerGroupDownloadImageUrlReqParams, config?: any): Promise<GetPartnerGroupDownloadImageUrlReqData>

// 参数类型
export type PostPartnerGroupExcelReqParams= ReqParamsType<'uploadExcelUsingPOST'>
// 返回值类型
export type PostPartnerGroupExcelReqData= ReqDataType<'uploadExcelUsingPOST'>
export function postPartnerGroupExcel(params: PostPartnerGroupExcelReqParams, config?: any): Promise<PostPartnerGroupExcelReqData>

// 参数类型
export type PostPartnerGroupImageReqParams= ReqParamsType<'uploadImageUsingPOST_1'>
// 返回值类型
export type PostPartnerGroupImageReqData= ReqDataType<'uploadImageUsingPOST_1'>
export function postPartnerGroupImage(params: PostPartnerGroupImageReqParams, config?: any): Promise<PostPartnerGroupImageReqData>

// 参数类型
export type DeletePartnerGroupIdReqParams= ReqParamsType<'deleteUsingDELETE_5'>['id']
// 返回值类型
export type DeletePartnerGroupIdReqData= ReqDataType<'deleteUsingDELETE_5'>
export function deletePartnerGroupId(params: DeletePartnerGroupIdReqParams, config?: any): Promise<DeletePartnerGroupIdReqData>

// 参数类型
export type GetPartnerGroupsReqParams= ReqParamsType<'pageUsingGET_3'>
// 返回值类型
export type GetPartnerGroupsReqData= ReqDataType<'pageUsingGET_3'>
export function getPartnerGroups(params: GetPartnerGroupsReqParams, config?: any): Promise<GetPartnerGroupsReqData>
