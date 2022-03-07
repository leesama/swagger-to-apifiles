
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostCampaignActivationReqParams= ReqParamsType<'activateUsingPOST'>
// 返回值类型
export type PostCampaignActivationReqData= ReqDataType<'activateUsingPOST'>
export function postCampaignActivation(params: PostCampaignActivationReqParams, config?: any): Promise<PostCampaignActivationReqData>
