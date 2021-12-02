
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add club segment relation
// 参数类型
export type ClubSegmentRelationReqParams= ReqParamsType<'saveClubSegmentRelationUsingPOST'>
// 结果类型
export type ClubSegmentRelationReqRes= ReqResType<'saveClubSegmentRelationUsingPOST'>
// 结果中的data类型
export type ClubSegmentRelationReqData= ReqDataType<'saveClubSegmentRelationUsingPOST'>
    
export function postClubSegmentRelation(params: ClubSegmentRelationReqParams, config?: any): ClubSegmentRelationReqRes

// Edit customer detail
// 参数类型
export type CustomerReqParams= ReqParamsType<'editCustomerUsingPUT'>
// 结果类型
export type CustomerReqRes= ReqResType<'editCustomerUsingPUT'>
// 结果中的data类型
export type CustomerReqData= ReqDataType<'editCustomerUsingPUT'>
    
export function putCustomer(params: CustomerReqParams, config?: any): CustomerReqRes

// Customer coached segment detail
// 参数类型
export type CustomerCoachedSegmentReqParams= ReqParamsType<'customerCoachedSegmentUsingGET'>
// 结果类型
export type CustomerCoachedSegmentReqRes= ReqResType<'customerCoachedSegmentUsingGET'>
// 结果中的data类型
export type CustomerCoachedSegmentReqData= ReqDataType<'customerCoachedSegmentUsingGET'>
    
export function getCustomerCoachedSegment(params: CustomerCoachedSegmentReqParams, config?: any): CustomerCoachedSegmentReqRes

// Customer feedback detail
// 参数类型
export type CustomerFeedbackReqParams= ReqParamsType<'customerFeedbackUsingGET'>
// 结果类型
export type CustomerFeedbackReqRes= ReqResType<'customerFeedbackUsingGET'>
// 结果中的data类型
export type CustomerFeedbackReqData= ReqDataType<'customerFeedbackUsingGET'>
    
export function getCustomerFeedback(params: CustomerFeedbackReqParams, config?: any): CustomerFeedbackReqRes

export function putCustomerFeedback(params: CustomerFeedbackReqParams, config?: any): CustomerFeedbackReqRes

// Customer legal detail
// 参数类型
export type CustomerLegalReqParams= ReqParamsType<'findAllLegalByCustomerIdUsingGET'>
// 结果类型
export type CustomerLegalReqRes= ReqResType<'findAllLegalByCustomerIdUsingGET'>
// 结果中的data类型
export type CustomerLegalReqData= ReqDataType<'findAllLegalByCustomerIdUsingGET'>
    
export function getCustomerLegal(params: CustomerLegalReqParams, config?: any): CustomerLegalReqRes

// Customer segment detail
// 参数类型
export type CustomerSegmentReqParams= ReqParamsType<'customerSegmentUsingGET'>
// 结果类型
export type CustomerSegmentReqRes= ReqResType<'customerSegmentUsingGET'>
// 结果中的data类型
export type CustomerSegmentReqData= ReqDataType<'customerSegmentUsingGET'>
    
export function getCustomerSegment(params: CustomerSegmentReqParams, config?: any): CustomerSegmentReqRes

// Synchronising customer when query
// 参数类型
export type CustomerSynchronizationReqParams= ReqParamsType<'querySyncUsingGET'>
// 结果类型
export type CustomerSynchronizationReqRes= ReqResType<'querySyncUsingGET'>
// 结果中的data类型
export type CustomerSynchronizationReqData= ReqDataType<'querySyncUsingGET'>
    
export function getCustomerSynchronization(params: CustomerSynchronizationReqParams, config?: any): CustomerSynchronizationReqRes

export function postCustomerSynchronization(params: CustomerSynchronizationReqParams, config?: any): CustomerSynchronizationReqRes

export function putCustomerSynchronization(params: CustomerSynchronizationReqParams, config?: any): CustomerSynchronizationReqRes

// Add customer tagging relation
// 参数类型
export type CustomerTaggingRelationReqParams= ReqParamsType<'addSegmentCustomerRelUsingPOST'>
// 结果类型
export type CustomerTaggingRelationReqRes= ReqResType<'addSegmentCustomerRelUsingPOST'>
// 结果中的data类型
export type CustomerTaggingRelationReqData= ReqDataType<'addSegmentCustomerRelUsingPOST'>
    
export function postCustomerTaggingRelation(params: CustomerTaggingRelationReqParams, config?: any): CustomerTaggingRelationReqRes

// Upload b2c customer bulk
// 参数类型
export type CustomerExcelReqParams= ReqParamsType<'customerB2CExcelUsingPOST'>
// 结果类型
export type CustomerExcelReqRes= ReqResType<'customerB2CExcelUsingPOST'>
// 结果中的data类型
export type CustomerExcelReqData= ReqDataType<'customerB2CExcelUsingPOST'>
    
export function postCustomerExcel(params: CustomerExcelReqParams, config?: any): CustomerExcelReqRes

// Upload b2b customer bulk
// 参数类型
export type CustomerExcelB2bReqParams= ReqParamsType<'customerB2BExcelUsingPOST'>
// 结果类型
export type CustomerExcelB2bReqRes= ReqResType<'customerB2BExcelUsingPOST'>
// 结果中的data类型
export type CustomerExcelB2bReqData= ReqDataType<'customerB2BExcelUsingPOST'>
    
export function postCustomerExcelB2b(params: CustomerExcelB2bReqParams, config?: any): CustomerExcelB2bReqRes

// Upload excel history list
// 参数类型
export type CustomerExcelHistoryReqParams= ReqParamsType<'findHistoryPageUsingGET'>
// 结果类型
export type CustomerExcelHistoryReqRes= ReqResType<'findHistoryPageUsingGET'>
// 结果中的data类型
export type CustomerExcelHistoryReqData= ReqDataType<'findHistoryPageUsingGET'>
    
export function getCustomerExcelHistory(params: CustomerExcelHistoryReqParams, config?: any): CustomerExcelHistoryReqRes

// Export customer excel template
// 参数类型
export type CustomerExcelTemplateReqParams= ReqParamsType<'exportTemplateB2CUsingGET'>
// 结果类型
export type CustomerExcelTemplateReqRes= ReqResType<'exportTemplateB2CUsingGET'>
// 结果中的data类型
export type CustomerExcelTemplateReqData= ReqDataType<'exportTemplateB2CUsingGET'>
    
export function getCustomerExcelTemplate(params: CustomerExcelTemplateReqParams, config?: any): CustomerExcelTemplateReqRes

// Export customer excel template
// 参数类型
export type CustomerExcelTemplateB2bReqParams= ReqParamsType<'exportTemplateB2BUsingGET'>
// 结果类型
export type CustomerExcelTemplateB2bReqRes= ReqResType<'exportTemplateB2BUsingGET'>
// 结果中的data类型
export type CustomerExcelTemplateB2bReqData= ReqDataType<'exportTemplateB2BUsingGET'>
    
export function getCustomerExcelTemplateB2b(params: CustomerExcelTemplateB2bReqParams, config?: any): CustomerExcelTemplateB2bReqRes

// Customer detail
// 参数类型
export type CustomerCustomerIdReqParams= ReqParamsType<'customerDetailUsingGET'>
// 结果类型
export type CustomerCustomerIdReqRes= ReqResType<'customerDetailUsingGET'>
// 结果中的data类型
export type CustomerCustomerIdReqData= ReqDataType<'customerDetailUsingGET'>
    
export function getCustomerCustomerId(params: CustomerCustomerIdReqParams, config?: any): CustomerCustomerIdReqRes

// Customers page list
// 参数类型
export type CustomersReqParams= ReqParamsType<'customerPageUsingGET'>
// 结果类型
export type CustomersReqRes= ReqResType<'customerPageUsingGET'>
// 结果中的data类型
export type CustomersReqData= ReqDataType<'customerPageUsingGET'>
    
export function getCustomers(params: CustomersReqParams, config?: any): CustomersReqRes

// Customers page list
// 参数类型
export type CustomersNewReqParams= ReqParamsType<'customerPageNewUsingPOST'>
// 结果类型
export type CustomersNewReqRes= ReqResType<'customerPageNewUsingPOST'>
// 结果中的data类型
export type CustomersNewReqData= ReqDataType<'customerPageNewUsingPOST'>
    
export function postCustomersNew(params: CustomersNewReqParams, config?: any): CustomersNewReqRes

// Add segment relation
// 参数类型
export type SagmentRelationReqParams= ReqParamsType<'addSegmentRelationUsingPOST'>
// 结果类型
export type SagmentRelationReqRes= ReqResType<'addSegmentRelationUsingPOST'>
// 结果中的data类型
export type SagmentRelationReqData= ReqDataType<'addSegmentRelationUsingPOST'>
    
export function postSagmentRelation(params: SagmentRelationReqParams, config?: any): SagmentRelationReqRes

// Delete segment customer relation
// 参数类型
export type SegmentCustomerRelationIdReqParams= ReqParamsType<'deleteSegmentCustomerRelByIdUsingDELETE'>
// 结果类型
export type SegmentCustomerRelationIdReqRes= ReqResType<'deleteSegmentCustomerRelByIdUsingDELETE'>
// 结果中的data类型
export type SegmentCustomerRelationIdReqData= ReqDataType<'deleteSegmentCustomerRelByIdUsingDELETE'>
    
export function deleteSegmentCustomerRelationId(params: SegmentCustomerRelationIdReqParams, config?: any): SegmentCustomerRelationIdReqRes

// Add welcome box tag
// 参数类型
export type WelcomeBoxTagReqParams= ReqParamsType<'saveWelcomeBoxTagUsingPOST'>
// 结果类型
export type WelcomeBoxTagReqRes= ReqResType<'saveWelcomeBoxTagUsingPOST'>
// 结果中的data类型
export type WelcomeBoxTagReqData= ReqDataType<'saveWelcomeBoxTagUsingPOST'>
    
export function postWelcomeBoxTag(params: WelcomeBoxTagReqParams, config?: any): WelcomeBoxTagReqRes
