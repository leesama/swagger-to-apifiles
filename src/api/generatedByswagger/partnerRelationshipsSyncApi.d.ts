
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostPartnerRelationshipSyncReqParams= ReqParamsType<'addUsingPOST_7'>
// 结果类型
export type PostPartnerRelationshipSyncReqRes= ReqResType<'addUsingPOST_7'>
// 结果中的data类型
export type PostPartnerRelationshipSyncReqData= ReqDataType<'addUsingPOST_7'>
export function postPartnerRelationshipSync(params: PostPartnerRelationshipSyncReqParams, config?: any): PostPartnerRelationshipSyncReqRes

// 参数类型
export type PutPartnerRelationshipSyncReqParams= ReqParamsType<'syncRelationShipByCompanyIdUsingPUT'>
// 结果类型
export type PutPartnerRelationshipSyncReqRes= ReqResType<'syncRelationShipByCompanyIdUsingPUT'>
// 结果中的data类型
export type PutPartnerRelationshipSyncReqData= ReqDataType<'syncRelationShipByCompanyIdUsingPUT'>
export function putPartnerRelationshipSync(params: PutPartnerRelationshipSyncReqParams, config?: any): PutPartnerRelationshipSyncReqRes

// 参数类型
export type DeletePartnerRelationshipSyncReqParams= ReqParamsType<'deleteUsingDELETE_7'>
// 结果类型
export type DeletePartnerRelationshipSyncReqRes= ReqResType<'deleteUsingDELETE_7'>
// 结果中的data类型
export type DeletePartnerRelationshipSyncReqData= ReqDataType<'deleteUsingDELETE_7'>
export function deletePartnerRelationshipSync(params: DeletePartnerRelationshipSyncReqParams, config?: any): DeletePartnerRelationshipSyncReqRes

// 参数类型
export type GetPartnerRelationshipSyncListReqParams= ReqParamsType<'syncListUsingGET'>
// 结果类型
export type GetPartnerRelationshipSyncListReqRes= ReqResType<'syncListUsingGET'>
// 结果中的data类型
export type GetPartnerRelationshipSyncListReqData= ReqDataType<'syncListUsingGET'>
export function getPartnerRelationshipSyncList(params: GetPartnerRelationshipSyncListReqParams, config?: any): GetPartnerRelationshipSyncListReqRes

// 参数类型
export type GetPartnerRelationshipSyncIdReqParams= ReqParamsType<'syncRelationShipByCompanyIdUsingGET'>
// 结果类型
export type GetPartnerRelationshipSyncIdReqRes= ReqResType<'syncRelationShipByCompanyIdUsingGET'>
// 结果中的data类型
export type GetPartnerRelationshipSyncIdReqData= ReqDataType<'syncRelationShipByCompanyIdUsingGET'>
export function getPartnerRelationshipSyncId(params: GetPartnerRelationshipSyncIdReqParams, config?: any): GetPartnerRelationshipSyncIdReqRes
