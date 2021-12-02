
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Consent page list
// 参数类型
export type ConsentReqParams= ReqParamsType<'consentListUsingGET'>
// 结果类型
export type ConsentReqRes= ReqResType<'consentListUsingGET'>
// 结果中的data类型
export type ConsentReqData= ReqDataType<'consentListUsingGET'>
    
export function getConsent(params: ConsentReqParams, config?: any): ConsentReqRes

export function postConsent(params: ConsentReqParams, config?: any): ConsentReqRes

export function putConsent(params: ConsentReqParams, config?: any): ConsentReqRes

// Delete consent
// 参数类型
export type ConsentIdReqParams= ReqParamsType<'deleteConsentUsingDELETE'>
// 结果类型
export type ConsentIdReqRes= ReqResType<'deleteConsentUsingDELETE'>
// 结果中的data类型
export type ConsentIdReqData= ReqDataType<'deleteConsentUsingDELETE'>
    
export function deleteConsentId(params: ConsentIdReqParams, config?: any): ConsentIdReqRes

// Edit subscription preferences
// 参数类型
export type SubscriptionPreferencesReqParams= ReqParamsType<'updateUsingPUT_4'>
// 结果类型
export type SubscriptionPreferencesReqRes= ReqResType<'updateUsingPUT_4'>
// 结果中的data类型
export type SubscriptionPreferencesReqData= ReqDataType<'updateUsingPUT_4'>
    
export function putSubscriptionPreferences(params: SubscriptionPreferencesReqParams, config?: any): SubscriptionPreferencesReqRes

// Subscription preferences list
// 参数类型
export type SubscriptionPreferencesIdReqParams= ReqParamsType<'subscriptionPreferencesListUsingGET'>
// 结果类型
export type SubscriptionPreferencesIdReqRes= ReqResType<'subscriptionPreferencesListUsingGET'>
// 结果中的data类型
export type SubscriptionPreferencesIdReqData= ReqDataType<'subscriptionPreferencesListUsingGET'>
    
export function getSubscriptionPreferencesId(params: SubscriptionPreferencesIdReqParams, config?: any): SubscriptionPreferencesIdReqRes
