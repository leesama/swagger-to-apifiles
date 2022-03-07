
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PutPartnerReqParams= ReqParamsType<'editRcInformationUsingPUT'>
// 返回值类型
export type PutPartnerReqData= ReqDataType<'editRcInformationUsingPUT'>
export function putPartner(params: PutPartnerReqParams, config?: any): Promise<PutPartnerReqData>

// 参数类型
export type GetPartnerGroupMemberExcelReqParams= ReqParamsType<'exportGroupMemberUsingGET'>
// 返回值类型
export type GetPartnerGroupMemberExcelReqData= ReqDataType<'exportGroupMemberUsingGET'>
export function getPartnerGroupMemberExcel(params: GetPartnerGroupMemberExcelReqParams, config?: any): Promise<GetPartnerGroupMemberExcelReqData>

// 参数类型
export type PostPartnerGroupMemberExcelReqParams= ReqParamsType<'importPartnerGroupMemberUsingPOST'>
// 返回值类型
export type PostPartnerGroupMemberExcelReqData= ReqDataType<'importPartnerGroupMemberUsingPOST'>
export function postPartnerGroupMemberExcel(params: PostPartnerGroupMemberExcelReqParams, config?: any): Promise<PostPartnerGroupMemberExcelReqData>

// 参数类型
export type GetPartnerGroupMemberExcelTemplateReqParams= ReqParamsType<'exportTemplateUsingGET'>
// 返回值类型
export type GetPartnerGroupMemberExcelTemplateReqData= ReqDataType<'exportTemplateUsingGET'>
export function getPartnerGroupMemberExcelTemplate(params: GetPartnerGroupMemberExcelTemplateReqParams, config?: any): Promise<GetPartnerGroupMemberExcelTemplateReqData>

// 参数类型
export type GetPartnerInvoiceIdReqParams= ReqParamsType<'queryUsingGET'>['id']
// 返回值类型
export type GetPartnerInvoiceIdReqData= ReqDataType<'queryUsingGET'>
export function getPartnerInvoiceId(params: GetPartnerInvoiceIdReqParams, config?: any): Promise<GetPartnerInvoiceIdReqData>

// 参数类型
export type GetPartnerPublicIdReqParams= ReqParamsType<'queryUsingGET_1'>['id']
// 返回值类型
export type GetPartnerPublicIdReqData= ReqDataType<'queryUsingGET_1'>
export function getPartnerPublicId(params: GetPartnerPublicIdReqParams, config?: any): Promise<GetPartnerPublicIdReqData>

// 参数类型
export type GetPartnerIdReqParams= ReqParamsType<'queryRcInformationUsingGET'>['id']
// 返回值类型
export type GetPartnerIdReqData= ReqDataType<'queryRcInformationUsingGET'>
export function getPartnerId(params: GetPartnerIdReqParams, config?: any): Promise<GetPartnerIdReqData>

// 参数类型
export type GetPartnersReqParams= ReqParamsType<'partnerPageUsingGET'>
// 返回值类型
export type GetPartnersReqData= ReqDataType<'partnerPageUsingGET'>
export function getPartners(params: GetPartnersReqParams, config?: any): Promise<GetPartnersReqData>
