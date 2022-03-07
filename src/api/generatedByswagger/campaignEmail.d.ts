
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCampaignEmailReqParams= ReqParamsType<'saveUsingPOST_1'>
// 返回值类型
export type PostCampaignEmailReqData= ReqDataType<'saveUsingPOST_1'>
export function postCampaignEmail(params: PostCampaignEmailReqParams, config?: any): Promise<PostCampaignEmailReqData>

// 参数类型
export type GetCampaignEmailCampaignEmailIdReqParams= ReqParamsType<'findCampaignByIdUsingGET'>['campaignEmailId']
// 返回值类型
export type GetCampaignEmailCampaignEmailIdReqData= ReqDataType<'findCampaignByIdUsingGET'>
export function getCampaignEmailCampaignEmailId(params: GetCampaignEmailCampaignEmailIdReqParams, config?: any): Promise<GetCampaignEmailCampaignEmailIdReqData>

// 参数类型
export type GetTemplateTemplateIdReqParams= ReqParamsType<'templateUsingGET'>['templateId']
// 返回值类型
export type GetTemplateTemplateIdReqData= ReqDataType<'templateUsingGET'>
export function getTemplateTemplateId(params: GetTemplateTemplateIdReqParams, config?: any): Promise<GetTemplateTemplateIdReqData>

// 参数类型
export type GetTemplatesReqParams= ReqParamsType<'templatesUsingGET'>
// 返回值类型
export type GetTemplatesReqData= ReqDataType<'templatesUsingGET'>
export function getTemplates(params: GetTemplatesReqParams, config?: any): Promise<GetTemplatesReqData>
