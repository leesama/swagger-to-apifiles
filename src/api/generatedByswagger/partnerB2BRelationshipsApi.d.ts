
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostPartnerRelationshipB2bReqParams= ReqParamsType<'addUsingPOST_8'>
// 返回值类型
export type PostPartnerRelationshipB2bReqData= ReqDataType<'addUsingPOST_8'>
export function postPartnerRelationshipB2b(params: PostPartnerRelationshipB2bReqParams, config?: any): Promise<PostPartnerRelationshipB2bReqData>

// 参数类型
export type PutPartnerRelationshipB2bReqParams= ReqParamsType<'updateUsingPUT_2'>
// 返回值类型
export type PutPartnerRelationshipB2bReqData= ReqDataType<'updateUsingPUT_2'>
export function putPartnerRelationshipB2b(params: PutPartnerRelationshipB2bReqParams, config?: any): Promise<PutPartnerRelationshipB2bReqData>

// 参数类型
export type GetPartnerRelationshipB2bContactsReqParams= ReqParamsType<'contactUsingGET'>
// 返回值类型
export type GetPartnerRelationshipB2bContactsReqData= ReqDataType<'contactUsingGET'>
export function getPartnerRelationshipB2bContacts(params: GetPartnerRelationshipB2bContactsReqParams, config?: any): Promise<GetPartnerRelationshipB2bContactsReqData>

// 参数类型
export type PutPartnerRelationshipB2bPrimaryContactReqParams= ReqParamsType<'updatePrimaryContactUsingPUT'>
// 返回值类型
export type PutPartnerRelationshipB2bPrimaryContactReqData= ReqDataType<'updatePrimaryContactUsingPUT'>
export function putPartnerRelationshipB2bPrimaryContact(params: PutPartnerRelationshipB2bPrimaryContactReqParams, config?: any): Promise<PutPartnerRelationshipB2bPrimaryContactReqData>

// 参数类型
export type GetPartnerRelationshipB2bRolesReqParams= ReqParamsType<'rolesUsingGET'>
// 返回值类型
export type GetPartnerRelationshipB2bRolesReqData= ReqDataType<'rolesUsingGET'>
export function getPartnerRelationshipB2bRoles(params: GetPartnerRelationshipB2bRolesReqParams, config?: any): Promise<GetPartnerRelationshipB2bRolesReqData>

// 参数类型
export type GetPartnerRelationshipB2bsReqParams= ReqParamsType<'pageUsingGET_4'>
// 返回值类型
export type GetPartnerRelationshipB2bsReqData= ReqDataType<'pageUsingGET_4'>
export function getPartnerRelationshipB2bs(params: GetPartnerRelationshipB2bsReqParams, config?: any): Promise<GetPartnerRelationshipB2bsReqData>
