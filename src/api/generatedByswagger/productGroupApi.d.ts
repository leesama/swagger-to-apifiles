
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add product group
// 参数类型
export type ProductGroupReqParams= ReqParamsType<'addUsingPOST_8'>
// 结果类型
export type ProductGroupReqRes= ReqResType<'addUsingPOST_8'>
// 结果中的data类型
export type ProductGroupReqData= ReqDataType<'addUsingPOST_8'>
    
export function postProductGroup(params: ProductGroupReqParams, config?: any): ProductGroupReqRes

export function putProductGroup(params: ProductGroupReqParams, config?: any): ProductGroupReqRes

// Export product group excel
// 参数类型
export type ProductGroupExcelExportIdReqParams= ReqParamsType<'exportExcelUsingGET'>
// 结果类型
export type ProductGroupExcelExportIdReqRes= ReqResType<'exportExcelUsingGET'>
// 结果中的data类型
export type ProductGroupExcelExportIdReqData= ReqDataType<'exportExcelUsingGET'>
    
export function getProductGroupExcelExportId(params: ProductGroupExcelExportIdReqParams, config?: any): ProductGroupExcelExportIdReqRes

// Upload product history
// 参数类型
export type ProductGroupExcelHistoryReqParams= ReqParamsType<'excelHistoryUsingGET'>
// 结果类型
export type ProductGroupExcelHistoryReqRes= ReqResType<'excelHistoryUsingGET'>
// 结果中的data类型
export type ProductGroupExcelHistoryReqData= ReqDataType<'excelHistoryUsingGET'>
    
export function getProductGroupExcelHistory(params: ProductGroupExcelHistoryReqParams, config?: any): ProductGroupExcelHistoryReqRes

// Upload product bulk
// 参数类型
export type ProductGroupExcelImportReqParams= ReqParamsType<'importExcelUsingPOST'>
// 结果类型
export type ProductGroupExcelImportReqRes= ReqResType<'importExcelUsingPOST'>
// 结果中的data类型
export type ProductGroupExcelImportReqData= ReqDataType<'importExcelUsingPOST'>
    
export function postProductGroupExcelImport(params: ProductGroupExcelImportReqParams, config?: any): ProductGroupExcelImportReqRes

// Export product excel template
// 参数类型
export type ProductGroupExcelTemplateReqParams= ReqParamsType<'exportTemplateUsingGET_2'>
// 结果类型
export type ProductGroupExcelTemplateReqRes= ReqResType<'exportTemplateUsingGET_2'>
// 结果中的data类型
export type ProductGroupExcelTemplateReqData= ReqDataType<'exportTemplateUsingGET_2'>
    
export function getProductGroupExcelTemplate(params: ProductGroupExcelTemplateReqParams, config?: any): ProductGroupExcelTemplateReqRes

// Delete product group
// 参数类型
export type ProductGroupIdReqParams= ReqParamsType<'deleteUsingDELETE_8'>
// 结果类型
export type ProductGroupIdReqRes= ReqResType<'deleteUsingDELETE_8'>
// 结果中的data类型
export type ProductGroupIdReqData= ReqDataType<'deleteUsingDELETE_8'>
    
export function deleteProductGroupId(params: ProductGroupIdReqParams, config?: any): ProductGroupIdReqRes

// Product group page list
// 参数类型
export type ProductGroupsReqParams= ReqParamsType<'pageUsingGET_8'>
// 结果类型
export type ProductGroupsReqRes= ReqResType<'pageUsingGET_8'>
// 结果中的data类型
export type ProductGroupsReqData= ReqDataType<'pageUsingGET_8'>
    
export function getProductGroups(params: ProductGroupsReqParams, config?: any): ProductGroupsReqRes

// Product member page list
// 参数类型
export type ProductMemberReqParams= ReqParamsType<'findByGroupIdUsingGET'>
// 结果类型
export type ProductMemberReqRes= ReqResType<'findByGroupIdUsingGET'>
// 结果中的data类型
export type ProductMemberReqData= ReqDataType<'findByGroupIdUsingGET'>
    
export function getProductMember(params: ProductMemberReqParams, config?: any): ProductMemberReqRes

export function postProductMember(params: ProductMemberReqParams, config?: any): ProductMemberReqRes

export function putProductMember(params: ProductMemberReqParams, config?: any): ProductMemberReqRes

// Delete product member
// 参数类型
export type ProductMemberIdReqParams= ReqParamsType<'deleteUsingDELETE_9'>
// 结果类型
export type ProductMemberIdReqRes= ReqResType<'deleteUsingDELETE_9'>
// 结果中的data类型
export type ProductMemberIdReqData= ReqDataType<'deleteUsingDELETE_9'>
    
export function deleteProductMemberId(params: ProductMemberIdReqParams, config?: any): ProductMemberIdReqRes
