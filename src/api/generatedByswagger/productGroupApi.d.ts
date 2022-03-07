
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostProductGroupReqParams= ReqParamsType<'addUsingPOST_10'>
// 返回值类型
export type PostProductGroupReqData= ReqDataType<'addUsingPOST_10'>
export function postProductGroup(params: PostProductGroupReqParams, config?: any): Promise<PostProductGroupReqData>

// 参数类型
export type PutProductGroupReqParams= ReqParamsType<'editUsingPUT_3'>
// 返回值类型
export type PutProductGroupReqData= ReqDataType<'editUsingPUT_3'>
export function putProductGroup(params: PutProductGroupReqParams, config?: any): Promise<PutProductGroupReqData>

// 参数类型
export type GetProductGroupExcelExportIdReqParams= ReqParamsType<'exportExcelUsingGET'>['id']
// 返回值类型
export type GetProductGroupExcelExportIdReqData= ReqDataType<'exportExcelUsingGET'>
export function getProductGroupExcelExportId(params: GetProductGroupExcelExportIdReqParams, config?: any): Promise<GetProductGroupExcelExportIdReqData>

// 参数类型
export type GetProductGroupExcelHistoryReqParams= ReqParamsType<'excelHistoryUsingGET'>
// 返回值类型
export type GetProductGroupExcelHistoryReqData= ReqDataType<'excelHistoryUsingGET'>
export function getProductGroupExcelHistory(params: GetProductGroupExcelHistoryReqParams, config?: any): Promise<GetProductGroupExcelHistoryReqData>

// 参数类型
export type PostProductGroupExcelImportReqParams= ReqParamsType<'importExcelUsingPOST'>
// 返回值类型
export type PostProductGroupExcelImportReqData= ReqDataType<'importExcelUsingPOST'>
export function postProductGroupExcelImport(params: PostProductGroupExcelImportReqParams, config?: any): Promise<PostProductGroupExcelImportReqData>

// 参数类型
export type GetProductGroupExcelTemplateReqParams= ReqParamsType<'exportTemplateUsingGET_1'>
// 返回值类型
export type GetProductGroupExcelTemplateReqData= ReqDataType<'exportTemplateUsingGET_1'>
export function getProductGroupExcelTemplate(params: GetProductGroupExcelTemplateReqParams, config?: any): Promise<GetProductGroupExcelTemplateReqData>

// 参数类型
export type DeleteProductGroupIdReqParams= ReqParamsType<'deleteUsingDELETE_6'>['id']
// 返回值类型
export type DeleteProductGroupIdReqData= ReqDataType<'deleteUsingDELETE_6'>
export function deleteProductGroupId(params: DeleteProductGroupIdReqParams, config?: any): Promise<DeleteProductGroupIdReqData>

// 参数类型
export type GetProductGroupsReqParams= ReqParamsType<'pageUsingGET_8'>
// 返回值类型
export type GetProductGroupsReqData= ReqDataType<'pageUsingGET_8'>
export function getProductGroups(params: GetProductGroupsReqParams, config?: any): Promise<GetProductGroupsReqData>

// 参数类型
export type GetProductMemberReqParams= ReqParamsType<'findByGroupIdUsingGET'>
// 返回值类型
export type GetProductMemberReqData= ReqDataType<'findByGroupIdUsingGET'>
export function getProductMember(params: GetProductMemberReqParams, config?: any): Promise<GetProductMemberReqData>

// 参数类型
export type PostProductMemberReqParams= ReqParamsType<'addUsingPOST_11'>
// 返回值类型
export type PostProductMemberReqData= ReqDataType<'addUsingPOST_11'>
export function postProductMember(params: PostProductMemberReqParams, config?: any): Promise<PostProductMemberReqData>

// 参数类型
export type PutProductMemberReqParams= ReqParamsType<'editUsingPUT_4'>
// 返回值类型
export type PutProductMemberReqData= ReqDataType<'editUsingPUT_4'>
export function putProductMember(params: PutProductMemberReqParams, config?: any): Promise<PutProductMemberReqData>

// 参数类型
export type DeleteProductMemberIdReqParams= ReqParamsType<'deleteUsingDELETE_7'>['id']
// 返回值类型
export type DeleteProductMemberIdReqData= ReqDataType<'deleteUsingDELETE_7'>
export function deleteProductMemberId(params: DeleteProductMemberIdReqParams, config?: any): Promise<DeleteProductMemberIdReqData>
