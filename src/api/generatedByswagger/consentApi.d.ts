
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetConsentReqParams= ReqParamsType<'consentListUsingGET'>
// 返回值类型
export type GetConsentReqData= ReqDataType<'consentListUsingGET'>
export function getConsent(params: GetConsentReqParams, config?: any): Promise<GetConsentReqData>

// 参数类型
export type PostConsentReqParams= ReqParamsType<'addUsingPOST_3'>
// 返回值类型
export type PostConsentReqData= ReqDataType<'addUsingPOST_3'>
export function postConsent(params: PostConsentReqParams, config?: any): Promise<PostConsentReqData>

// 参数类型
export type PutConsentReqParams= ReqParamsType<'editUsingPUT_1'>
// 返回值类型
export type PutConsentReqData= ReqDataType<'editUsingPUT_1'>
export function putConsent(params: PutConsentReqParams, config?: any): Promise<PutConsentReqData>

// 参数类型
export type DeleteConsentIdReqParams= ReqParamsType<'deleteConsentUsingDELETE'>['id']
// 返回值类型
export type DeleteConsentIdReqData= ReqDataType<'deleteConsentUsingDELETE'>
export function deleteConsentId(params: DeleteConsentIdReqParams, config?: any): Promise<DeleteConsentIdReqData>

// 参数类型
export type PutSubscriptionPreferencesReqParams= ReqParamsType<'updateUsingPUT_4'>
// 返回值类型
export type PutSubscriptionPreferencesReqData= ReqDataType<'updateUsingPUT_4'>
export function putSubscriptionPreferences(params: PutSubscriptionPreferencesReqParams, config?: any): Promise<PutSubscriptionPreferencesReqData>

// 参数类型
export type GetSubscriptionPreferencesIdReqParams= ReqParamsType<'subscriptionPreferencesListUsingGET'>['id']
// 返回值类型
export type GetSubscriptionPreferencesIdReqData= ReqDataType<'subscriptionPreferencesListUsingGET'>
export function getSubscriptionPreferencesId(params: GetSubscriptionPreferencesIdReqParams, config?: any): Promise<GetSubscriptionPreferencesIdReqData>
