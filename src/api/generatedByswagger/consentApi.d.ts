
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type GetConsentReqParams= ReqParamsType<'consentListUsingGET'>
// 结果类型
export type GetConsentReqRes= ReqResType<'consentListUsingGET'>
// 结果中的data类型
export type GetConsentReqData= ReqDataType<'consentListUsingGET'>
export function getConsent(params: GetConsentReqParams, config?: any): GetConsentReqRes

// 参数类型
export type PostConsentReqParams= ReqParamsType<'addUsingPOST'>
// 结果类型
export type PostConsentReqRes= ReqResType<'addUsingPOST'>
// 结果中的data类型
export type PostConsentReqData= ReqDataType<'addUsingPOST'>
export function postConsent(params: PostConsentReqParams, config?: any): PostConsentReqRes

// 参数类型
export type PutConsentReqParams= ReqParamsType<'editUsingPUT'>
// 结果类型
export type PutConsentReqRes= ReqResType<'editUsingPUT'>
// 结果中的data类型
export type PutConsentReqData= ReqDataType<'editUsingPUT'>
export function putConsent(params: PutConsentReqParams, config?: any): PutConsentReqRes

// 参数类型
export type DeleteConsentIdReqParams= ReqParamsType<'deleteConsentUsingDELETE'>
// 结果类型
export type DeleteConsentIdReqRes= ReqResType<'deleteConsentUsingDELETE'>
// 结果中的data类型
export type DeleteConsentIdReqData= ReqDataType<'deleteConsentUsingDELETE'>
export function deleteConsentId(params: DeleteConsentIdReqParams, config?: any): DeleteConsentIdReqRes

// 参数类型
export type PutSubscriptionPreferencesReqParams= ReqParamsType<'updateUsingPUT_4'>
// 结果类型
export type PutSubscriptionPreferencesReqRes= ReqResType<'updateUsingPUT_4'>
// 结果中的data类型
export type PutSubscriptionPreferencesReqData= ReqDataType<'updateUsingPUT_4'>
export function putSubscriptionPreferences(params: PutSubscriptionPreferencesReqParams, config?: any): PutSubscriptionPreferencesReqRes

// 参数类型
export type GetSubscriptionPreferencesIdReqParams= ReqParamsType<'subscriptionPreferencesListUsingGET'>
// 结果类型
export type GetSubscriptionPreferencesIdReqRes= ReqResType<'subscriptionPreferencesListUsingGET'>
// 结果中的data类型
export type GetSubscriptionPreferencesIdReqData= ReqDataType<'subscriptionPreferencesListUsingGET'>
export function getSubscriptionPreferencesId(params: GetSubscriptionPreferencesIdReqParams, config?: any): GetSubscriptionPreferencesIdReqRes
