
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCampaignReqParams= ReqParamsType<'saveUsingPOST'>
// 返回值类型
export type PostCampaignReqData= ReqDataType<'saveUsingPOST'>
export function postCampaign(params: PostCampaignReqParams, config?: any): Promise<PostCampaignReqData>

// 参数类型
export type PostCampaignAllReqParams= ReqParamsType<'saveAllUsingPOST'>
// 返回值类型
export type PostCampaignAllReqData= ReqDataType<'saveAllUsingPOST'>
export function postCampaignAll(params: PostCampaignAllReqParams, config?: any): Promise<PostCampaignAllReqData>

// 参数类型
export type GetCampaignManagersReqParams= ReqParamsType<'allCampaignManagersUsingGET'>
// 返回值类型
export type GetCampaignManagersReqData= ReqDataType<'allCampaignManagersUsingGET'>
export function getCampaignManagers(params: GetCampaignManagersReqParams, config?: any): Promise<GetCampaignManagersReqData>

// 参数类型
export type GetCampaignSendsReqParams= ReqParamsType<'fromSenderUsingGET'>
// 返回值类型
export type GetCampaignSendsReqData= ReqDataType<'fromSenderUsingGET'>
export function getCampaignSends(params: GetCampaignSendsReqParams, config?: any): Promise<GetCampaignSendsReqData>

// 参数类型
export type PutCampaignStatusReqParams= ReqParamsType<'updateStatusUsingPUT'>
// 返回值类型
export type PutCampaignStatusReqData= ReqDataType<'updateStatusUsingPUT'>
export function putCampaignStatus(params: PutCampaignStatusReqParams, config?: any): Promise<PutCampaignStatusReqData>

// 参数类型
export type GetCampaignStatusesReqParams= ReqParamsType<'statusUsingGET'>
// 返回值类型
export type GetCampaignStatusesReqData= ReqDataType<'statusUsingGET'>
export function getCampaignStatuses(params: GetCampaignStatusesReqParams, config?: any): Promise<GetCampaignStatusesReqData>

// 参数类型
export type GetCampaignCampaignIdReqParams= ReqParamsType<'findByIdUsingGET'>['campaignId']
// 返回值类型
export type GetCampaignCampaignIdReqData= ReqDataType<'findByIdUsingGET'>
export function getCampaignCampaignId(params: GetCampaignCampaignIdReqParams, config?: any): Promise<GetCampaignCampaignIdReqData>

// 参数类型
export type DeleteCampaignCampaignIdReqParams= ReqParamsType<'deleteUsingDELETE'>['campaignId']
// 返回值类型
export type DeleteCampaignCampaignIdReqData= ReqDataType<'deleteUsingDELETE'>
export function deleteCampaignCampaignId(params: DeleteCampaignCampaignIdReqParams, config?: any): Promise<DeleteCampaignCampaignIdReqData>

// 参数类型
export type GetCampaignsReqParams= ReqParamsType<'pageUsingGET'>
// 返回值类型
export type GetCampaignsReqData= ReqDataType<'pageUsingGET'>
export function getCampaigns(params: GetCampaignsReqParams, config?: any): Promise<GetCampaignsReqData>
