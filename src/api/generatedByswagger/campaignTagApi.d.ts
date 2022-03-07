
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCampaignTagReqParams= ReqParamsType<'addUsingPOST_1'>
// 返回值类型
export type PostCampaignTagReqData= ReqDataType<'addUsingPOST_1'>
export function postCampaignTag(params: PostCampaignTagReqParams, config?: any): Promise<PostCampaignTagReqData>

// 参数类型
export type PutCampaignTagReqParams= ReqParamsType<'editUsingPUT'>
// 返回值类型
export type PutCampaignTagReqData= ReqDataType<'editUsingPUT'>
export function putCampaignTag(params: PutCampaignTagReqParams, config?: any): Promise<PutCampaignTagReqData>

// 参数类型
export type GetCampaignTagIdReqParams= ReqParamsType<'findByIdUsingGET_1'>['id']
// 返回值类型
export type GetCampaignTagIdReqData= ReqDataType<'findByIdUsingGET_1'>
export function getCampaignTagId(params: GetCampaignTagIdReqParams, config?: any): Promise<GetCampaignTagIdReqData>

// 参数类型
export type DeleteCampaignTagIdReqParams= ReqParamsType<'deleteUsingDELETE_1'>['id']
// 返回值类型
export type DeleteCampaignTagIdReqData= ReqDataType<'deleteUsingDELETE_1'>
export function deleteCampaignTagId(params: DeleteCampaignTagIdReqParams, config?: any): Promise<DeleteCampaignTagIdReqData>

// 参数类型
export type GetCampaignTagsReqParams= ReqParamsType<'listByNameUsingGET'>
// 返回值类型
export type GetCampaignTagsReqData= ReqDataType<'listByNameUsingGET'>
export function getCampaignTags(params: GetCampaignTagsReqParams, config?: any): Promise<GetCampaignTagsReqData>

// 参数类型
export type GetTimeZonesReqParams= ReqParamsType<'timeZonesUsingGET'>
// 返回值类型
export type GetTimeZonesReqData= ReqDataType<'timeZonesUsingGET'>
export function getTimeZones(params: GetTimeZonesReqParams, config?: any): Promise<GetTimeZonesReqData>
