
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostClubSegmentRelationReqParams= ReqParamsType<'saveClubSegmentRelationUsingPOST'>
// 返回值类型
export type PostClubSegmentRelationReqData= ReqDataType<'saveClubSegmentRelationUsingPOST'>
export function postClubSegmentRelation(params: PostClubSegmentRelationReqParams, config?: any): Promise<PostClubSegmentRelationReqData>

// 参数类型
export type PutCustomerReqParams= ReqParamsType<'editCustomerUsingPUT'>
// 返回值类型
export type PutCustomerReqData= ReqDataType<'editCustomerUsingPUT'>
export function putCustomer(params: PutCustomerReqParams, config?: any): Promise<PutCustomerReqData>

// 参数类型
export type GetCustomerCoachedSegmentReqParams= ReqParamsType<'customerCoachedSegmentUsingGET'>
// 返回值类型
export type GetCustomerCoachedSegmentReqData= ReqDataType<'customerCoachedSegmentUsingGET'>
export function getCustomerCoachedSegment(params: GetCustomerCoachedSegmentReqParams, config?: any): Promise<GetCustomerCoachedSegmentReqData>

// 参数类型
export type GetCustomerFeedbackReqParams= ReqParamsType<'customerFeedbackUsingGET'>
// 返回值类型
export type GetCustomerFeedbackReqData= ReqDataType<'customerFeedbackUsingGET'>
export function getCustomerFeedback(params: GetCustomerFeedbackReqParams, config?: any): Promise<GetCustomerFeedbackReqData>

// 参数类型
export type PutCustomerFeedbackReqParams= ReqParamsType<'alterFeedBackUsingPUT'>
// 返回值类型
export type PutCustomerFeedbackReqData= ReqDataType<'alterFeedBackUsingPUT'>
export function putCustomerFeedback(params: PutCustomerFeedbackReqParams, config?: any): Promise<PutCustomerFeedbackReqData>

// 参数类型
export type GetCustomerLegalReqParams= ReqParamsType<'findAllLegalByCustomerIdUsingGET'>
// 返回值类型
export type GetCustomerLegalReqData= ReqDataType<'findAllLegalByCustomerIdUsingGET'>
export function getCustomerLegal(params: GetCustomerLegalReqParams, config?: any): Promise<GetCustomerLegalReqData>

// 参数类型
export type GetCustomerSegmentReqParams= ReqParamsType<'customerSegmentUsingGET'>
// 返回值类型
export type GetCustomerSegmentReqData= ReqDataType<'customerSegmentUsingGET'>
export function getCustomerSegment(params: GetCustomerSegmentReqParams, config?: any): Promise<GetCustomerSegmentReqData>

// 参数类型
export type GetCustomerSynchronizationReqParams= ReqParamsType<'querySyncUsingGET'>
// 返回值类型
export type GetCustomerSynchronizationReqData= ReqDataType<'querySyncUsingGET'>
export function getCustomerSynchronization(params: GetCustomerSynchronizationReqParams, config?: any): Promise<GetCustomerSynchronizationReqData>

// 参数类型
export type PostCustomerSynchronizationReqParams= ReqParamsType<'createSyncUsingPOST'>
// 返回值类型
export type PostCustomerSynchronizationReqData= ReqDataType<'createSyncUsingPOST'>
export function postCustomerSynchronization(params: PostCustomerSynchronizationReqParams, config?: any): Promise<PostCustomerSynchronizationReqData>

// 参数类型
export type PutCustomerSynchronizationReqParams= ReqParamsType<'updateSyncUsingPUT'>
// 返回值类型
export type PutCustomerSynchronizationReqData= ReqDataType<'updateSyncUsingPUT'>
export function putCustomerSynchronization(params: PutCustomerSynchronizationReqParams, config?: any): Promise<PutCustomerSynchronizationReqData>

// 参数类型
export type PostCustomerTaggingRelationReqParams= ReqParamsType<'addSegmentCustomerRelUsingPOST'>
// 返回值类型
export type PostCustomerTaggingRelationReqData= ReqDataType<'addSegmentCustomerRelUsingPOST'>
export function postCustomerTaggingRelation(params: PostCustomerTaggingRelationReqParams, config?: any): Promise<PostCustomerTaggingRelationReqData>

// 参数类型
export type PostCustomerExcelReqParams= ReqParamsType<'customerB2CExcelUsingPOST'>
// 返回值类型
export type PostCustomerExcelReqData= ReqDataType<'customerB2CExcelUsingPOST'>
export function postCustomerExcel(params: PostCustomerExcelReqParams, config?: any): Promise<PostCustomerExcelReqData>

// 参数类型
export type PostCustomerExcelB2bReqParams= ReqParamsType<'customerB2BExcelUsingPOST'>
// 返回值类型
export type PostCustomerExcelB2bReqData= ReqDataType<'customerB2BExcelUsingPOST'>
export function postCustomerExcelB2b(params: PostCustomerExcelB2bReqParams, config?: any): Promise<PostCustomerExcelB2bReqData>

// 参数类型
export type GetCustomerExcelHistoryB2bReqParams= ReqParamsType<'findHistoryPageB2BUsingGET'>
// 返回值类型
export type GetCustomerExcelHistoryB2bReqData= ReqDataType<'findHistoryPageB2BUsingGET'>
export function getCustomerExcelHistoryB2b(params: GetCustomerExcelHistoryB2bReqParams, config?: any): Promise<GetCustomerExcelHistoryB2bReqData>

// 参数类型
export type GetCustomerExcelHistoryB2cReqParams= ReqParamsType<'findHistoryPageUsingGET'>
// 返回值类型
export type GetCustomerExcelHistoryB2cReqData= ReqDataType<'findHistoryPageUsingGET'>
export function getCustomerExcelHistoryB2c(params: GetCustomerExcelHistoryB2cReqParams, config?: any): Promise<GetCustomerExcelHistoryB2cReqData>

// 参数类型
export type GetCustomerExcelTemplateReqParams= ReqParamsType<'exportTemplateB2CUsingGET'>
// 返回值类型
export type GetCustomerExcelTemplateReqData= ReqDataType<'exportTemplateB2CUsingGET'>
export function getCustomerExcelTemplate(params: GetCustomerExcelTemplateReqParams, config?: any): Promise<GetCustomerExcelTemplateReqData>

// 参数类型
export type GetCustomerExcelTemplateB2bReqParams= ReqParamsType<'exportTemplateB2BUsingGET'>
// 返回值类型
export type GetCustomerExcelTemplateB2bReqData= ReqDataType<'exportTemplateB2BUsingGET'>
export function getCustomerExcelTemplateB2b(params: GetCustomerExcelTemplateB2bReqParams, config?: any): Promise<GetCustomerExcelTemplateB2bReqData>

// 参数类型
export type GetCustomerCustomerIdReqParams= ReqParamsType<'customerDetailUsingGET'>['customerId']
// 返回值类型
export type GetCustomerCustomerIdReqData= ReqDataType<'customerDetailUsingGET'>
export function getCustomerCustomerId(params: GetCustomerCustomerIdReqParams, config?: any): Promise<GetCustomerCustomerIdReqData>

// 参数类型
export type GetCustomersReqParams= ReqParamsType<'customerPageUsingGET'>
// 返回值类型
export type GetCustomersReqData= ReqDataType<'customerPageUsingGET'>
export function getCustomers(params: GetCustomersReqParams, config?: any): Promise<GetCustomersReqData>

// 参数类型
export type PostCustomersNewReqParams= ReqParamsType<'customerPageNewUsingPOST'>
// 返回值类型
export type PostCustomersNewReqData= ReqDataType<'customerPageNewUsingPOST'>
export function postCustomersNew(params: PostCustomersNewReqParams, config?: any): Promise<PostCustomersNewReqData>

// 参数类型
export type PostSagmentRelationReqParams= ReqParamsType<'addSegmentRelationUsingPOST'>
// 返回值类型
export type PostSagmentRelationReqData= ReqDataType<'addSegmentRelationUsingPOST'>
export function postSagmentRelation(params: PostSagmentRelationReqParams, config?: any): Promise<PostSagmentRelationReqData>

// 参数类型
export type DeleteSegmentCustomerRelationIdReqParams= ReqParamsType<'deleteSegmentCustomerRelByIdUsingDELETE'>['id']
// 返回值类型
export type DeleteSegmentCustomerRelationIdReqData= ReqDataType<'deleteSegmentCustomerRelByIdUsingDELETE'>
export function deleteSegmentCustomerRelationId(params: DeleteSegmentCustomerRelationIdReqParams, config?: any): Promise<DeleteSegmentCustomerRelationIdReqData>

// 参数类型
export type PostWelcomeBoxTagReqParams= ReqParamsType<'saveWelcomeBoxTagUsingPOST'>
// 返回值类型
export type PostWelcomeBoxTagReqData= ReqDataType<'saveWelcomeBoxTagUsingPOST'>
export function postWelcomeBoxTag(params: PostWelcomeBoxTagReqParams, config?: any): Promise<PostWelcomeBoxTagReqData>
