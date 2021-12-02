
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  
// Add partner b2c relationships
// 参数类型
export type PartnerRelationshipB2cReqParams= ReqParamsType<'addUsingPOST_6'>
// 结果类型
export type PartnerRelationshipB2cReqRes= ReqResType<'addUsingPOST_6'>
// 结果中的data类型
export type PartnerRelationshipB2cReqData= ReqDataType<'addUsingPOST_6'>
    
export function postPartnerRelationshipB2c(params: PartnerRelationshipB2cReqParams, config?: any): PartnerRelationshipB2cReqRes

export function putPartnerRelationshipB2c(params: PartnerRelationshipB2cReqParams, config?: any): PartnerRelationshipB2cReqRes

// Partner b2c relationships contact list
// 参数类型
export type PartnerRelationshipB2cContactsReqParams= ReqParamsType<'contactUsingGET_1'>
// 结果类型
export type PartnerRelationshipB2cContactsReqRes= ReqResType<'contactUsingGET_1'>
// 结果中的data类型
export type PartnerRelationshipB2cContactsReqData= ReqDataType<'contactUsingGET_1'>
    
export function getPartnerRelationshipB2cContacts(params: PartnerRelationshipB2cContactsReqParams, config?: any): PartnerRelationshipB2cContactsReqRes

// Partner b2c relationships detail
// 参数类型
export type PartnerRelationshipB2cIdReqParams= ReqParamsType<'findByIdUsingGET_5'>
// 结果类型
export type PartnerRelationshipB2cIdReqRes= ReqResType<'findByIdUsingGET_5'>
// 结果中的data类型
export type PartnerRelationshipB2cIdReqData= ReqDataType<'findByIdUsingGET_5'>
    
export function getPartnerRelationshipB2cId(params: PartnerRelationshipB2cIdReqParams, config?: any): PartnerRelationshipB2cIdReqRes

export function deletePartnerRelationshipB2cId(params: PartnerRelationshipB2cIdReqParams, config?: any): PartnerRelationshipB2cIdReqRes

// Partner b2c relationships page list
// 参数类型
export type PartnerRelationshipB2csReqParams= ReqParamsType<'pageUsingGET_5'>
// 结果类型
export type PartnerRelationshipB2csReqRes= ReqResType<'pageUsingGET_5'>
// 结果中的data类型
export type PartnerRelationshipB2csReqData= ReqDataType<'pageUsingGET_5'>
    
export function getPartnerRelationshipB2cs(params: PartnerRelationshipB2csReqParams, config?: any): PartnerRelationshipB2csReqRes
