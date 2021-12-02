
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add partner relationship
// 参数类型
export type PartnerRelationshipSyncReqParams= ReqParamsType<'addUsingPOST_7'>
// 结果类型
export type PartnerRelationshipSyncReqRes= ReqResType<'addUsingPOST_7'>
// 结果中的data类型
export type PartnerRelationshipSyncReqData= ReqDataType<'addUsingPOST_7'>
    
export function deletePartnerRelationshipSync(params: PartnerRelationshipSyncReqParams, config?: any): PartnerRelationshipSyncReqRes

export function postPartnerRelationshipSync(params: PartnerRelationshipSyncReqParams, config?: any): PartnerRelationshipSyncReqRes

export function putPartnerRelationshipSync(params: PartnerRelationshipSyncReqParams, config?: any): PartnerRelationshipSyncReqRes

// Synchronize partner relationship list
// 参数类型
export type PartnerRelationshipSyncListReqParams= ReqParamsType<'syncListUsingGET'>
// 结果类型
export type PartnerRelationshipSyncListReqRes= ReqResType<'syncListUsingGET'>
// 结果中的data类型
export type PartnerRelationshipSyncListReqData= ReqDataType<'syncListUsingGET'>
    
export function getPartnerRelationshipSyncList(params: PartnerRelationshipSyncListReqParams, config?: any): PartnerRelationshipSyncListReqRes

// Partner relationship detail
// 参数类型
export type PartnerRelationshipSyncIdReqParams= ReqParamsType<'syncRelationShipByCompanyIdUsingGET'>
// 结果类型
export type PartnerRelationshipSyncIdReqRes= ReqResType<'syncRelationShipByCompanyIdUsingGET'>
// 结果中的data类型
export type PartnerRelationshipSyncIdReqData= ReqDataType<'syncRelationShipByCompanyIdUsingGET'>
    
export function getPartnerRelationshipSyncId(params: PartnerRelationshipSyncIdReqParams, config?: any): PartnerRelationshipSyncIdReqRes
