
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add partner b2b relationships
// 参数类型
export type PartnerRelationshipB2bReqParams= ReqParamsType<'addUsingPOST_5'>
// 结果类型
export type PartnerRelationshipB2bReqRes= ReqResType<'addUsingPOST_5'>
// 结果中的data类型
export type PartnerRelationshipB2bReqData= ReqDataType<'addUsingPOST_5'>
    
export function postPartnerRelationshipB2b(params: PartnerRelationshipB2bReqParams, config?: any): PartnerRelationshipB2bReqRes

export function putPartnerRelationshipB2b(params: PartnerRelationshipB2bReqParams, config?: any): PartnerRelationshipB2bReqRes

// Partner b2b relationships contact list
// 参数类型
export type PartnerRelationshipB2bContactsReqParams= ReqParamsType<'contactUsingGET'>
// 结果类型
export type PartnerRelationshipB2bContactsReqRes= ReqResType<'contactUsingGET'>
// 结果中的data类型
export type PartnerRelationshipB2bContactsReqData= ReqDataType<'contactUsingGET'>
    
export function getPartnerRelationshipB2bContacts(params: PartnerRelationshipB2bContactsReqParams, config?: any): PartnerRelationshipB2bContactsReqRes

// updatePrimaryContact
// 参数类型
export type PartnerRelationshipB2bPrimaryContactReqParams= ReqParamsType<'updatePrimaryContactUsingPUT'>
// 结果类型
export type PartnerRelationshipB2bPrimaryContactReqRes= ReqResType<'updatePrimaryContactUsingPUT'>
// 结果中的data类型
export type PartnerRelationshipB2bPrimaryContactReqData= ReqDataType<'updatePrimaryContactUsingPUT'>
    
export function putPartnerRelationshipB2bPrimaryContact(params: PartnerRelationshipB2bPrimaryContactReqParams, config?: any): PartnerRelationshipB2bPrimaryContactReqRes

// roles
// 参数类型
export type PartnerRelationshipB2bRolesReqParams= ReqParamsType<'rolesUsingGET'>
// 结果类型
export type PartnerRelationshipB2bRolesReqRes= ReqResType<'rolesUsingGET'>
// 结果中的data类型
export type PartnerRelationshipB2bRolesReqData= ReqDataType<'rolesUsingGET'>
    
export function getPartnerRelationshipB2bRoles(params: PartnerRelationshipB2bRolesReqParams, config?: any): PartnerRelationshipB2bRolesReqRes

// Partner b2b relationships detail
// 参数类型
export type PartnerRelationshipB2bIdReqParams= ReqParamsType<'findByIdUsingGET_4'>
// 结果类型
export type PartnerRelationshipB2bIdReqRes= ReqResType<'findByIdUsingGET_4'>
// 结果中的data类型
export type PartnerRelationshipB2bIdReqData= ReqDataType<'findByIdUsingGET_4'>
    
export function getPartnerRelationshipB2bId(params: PartnerRelationshipB2bIdReqParams, config?: any): PartnerRelationshipB2bIdReqRes

export function deletePartnerRelationshipB2bId(params: PartnerRelationshipB2bIdReqParams, config?: any): PartnerRelationshipB2bIdReqRes

// Partner b2b relationships page list
// 参数类型
export type PartnerRelationshipB2bsReqParams= ReqParamsType<'pageUsingGET_4'>
// 结果类型
export type PartnerRelationshipB2bsReqRes= ReqResType<'pageUsingGET_4'>
// 结果中的data类型
export type PartnerRelationshipB2bsReqData= ReqDataType<'pageUsingGET_4'>
    
export function getPartnerRelationshipB2bs(params: PartnerRelationshipB2bsReqParams, config?: any): PartnerRelationshipB2bsReqRes
