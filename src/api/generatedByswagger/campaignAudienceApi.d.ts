
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostAudienceReqParams= ReqParamsType<'addUsingPOST'>
// 返回值类型
export type PostAudienceReqData= ReqDataType<'addUsingPOST'>
export function postAudience(params: PostAudienceReqParams, config?: any): Promise<PostAudienceReqData>

// 参数类型
export type GetAudienceIdReqParams= ReqParamsType<'detailUsingGET'>['id']
// 返回值类型
export type GetAudienceIdReqData= ReqDataType<'detailUsingGET'>
export function getAudienceId(params: GetAudienceIdReqParams, config?: any): Promise<GetAudienceIdReqData>

// 参数类型
export type GetMarketingSegmentsReqParams= ReqParamsType<'marketingSegmentListUsingGET'>
// 返回值类型
export type GetMarketingSegmentsReqData= ReqDataType<'marketingSegmentListUsingGET'>
export function getMarketingSegments(params: GetMarketingSegmentsReqParams, config?: any): Promise<GetMarketingSegmentsReqData>

// 参数类型
export type GetMasterSegmentsReqParams= ReqParamsType<'findMastersListUsingGET'>
// 返回值类型
export type GetMasterSegmentsReqData= ReqDataType<'findMastersListUsingGET'>
export function getMasterSegments(params: GetMasterSegmentsReqParams, config?: any): Promise<GetMasterSegmentsReqData>

// 参数类型
export type GetSimulateMembersReqParams= ReqParamsType<'simulateMemberListUsingGET'>
// 返回值类型
export type GetSimulateMembersReqData= ReqDataType<'simulateMemberListUsingGET'>
export function getSimulateMembers(params: GetSimulateMembersReqParams, config?: any): Promise<GetSimulateMembersReqData>
