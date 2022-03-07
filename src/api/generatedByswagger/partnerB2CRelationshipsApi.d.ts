
import type {ReqParamsType,ReqDataType} from "./types/serviceUtilGeneric"
  
// 参数类型
export type PostPartnerRelationshipB2cReqParams= ReqParamsType<'addUsingPOST_9'>
// 返回值类型
export type PostPartnerRelationshipB2cReqData= ReqDataType<'addUsingPOST_9'>
export function postPartnerRelationshipB2c(params: PostPartnerRelationshipB2cReqParams, config?: any): Promise<PostPartnerRelationshipB2cReqData>

// 参数类型
export type PutPartnerRelationshipB2cReqParams= ReqParamsType<'updateUsingPUT_3'>
// 返回值类型
export type PutPartnerRelationshipB2cReqData= ReqDataType<'updateUsingPUT_3'>
export function putPartnerRelationshipB2c(params: PutPartnerRelationshipB2cReqParams, config?: any): Promise<PutPartnerRelationshipB2cReqData>

// 参数类型
export type GetPartnerRelationshipB2cContactsReqParams= ReqParamsType<'contactUsingGET_1'>
// 返回值类型
export type GetPartnerRelationshipB2cContactsReqData= ReqDataType<'contactUsingGET_1'>
export function getPartnerRelationshipB2cContacts(params: GetPartnerRelationshipB2cContactsReqParams, config?: any): Promise<GetPartnerRelationshipB2cContactsReqData>

// 参数类型
export type GetPartnerRelationshipB2csReqParams= ReqParamsType<'pageUsingGET_5'>
// 返回值类型
export type GetPartnerRelationshipB2csReqData= ReqDataType<'pageUsingGET_5'>
export function getPartnerRelationshipB2cs(params: GetPartnerRelationshipB2csReqParams, config?: any): Promise<GetPartnerRelationshipB2csReqData>
