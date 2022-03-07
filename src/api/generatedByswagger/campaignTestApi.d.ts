
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCampaignTestReqParams= ReqParamsType<'addUsingPOST_2'>
// 返回值类型
export type PostCampaignTestReqData= ReqDataType<'addUsingPOST_2'>
export function postCampaignTest(params: PostCampaignTestReqParams, config?: any): Promise<PostCampaignTestReqData>

// 参数类型
export type PostCampaignTestSendEmailReqParams= ReqParamsType<'sendEmailUsingPOST'>
// 返回值类型
export type PostCampaignTestSendEmailReqData= ReqDataType<'sendEmailUsingPOST'>
export function postCampaignTestSendEmail(params: PostCampaignTestSendEmailReqParams, config?: any): Promise<PostCampaignTestSendEmailReqData>

// 参数类型
export type GetCampaignTestCampaignIdReqParams= ReqParamsType<'findByCampaignIdUsingGET'>['campaignId']
// 返回值类型
export type GetCampaignTestCampaignIdReqData= ReqDataType<'findByCampaignIdUsingGET'>
export function getCampaignTestCampaignId(params: GetCampaignTestCampaignIdReqParams, config?: any): Promise<GetCampaignTestCampaignIdReqData>
