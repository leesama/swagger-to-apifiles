import { Schema, ServiceMapValue } from "../data";
import pascalCase from "pascalcase";

import { headTempalte } from "./headTempalte";
import { PathItemObject } from "openapi-typescript";
const getOperationIdAndDescription = (path: PathItemObject) => {
  const { operationId, summary: description } = Object.values(path)[0];
  return { operationId, description };
};
const setTemplatesToSchema = (
  urlPrefix: string,
  schema: Schema,
  serviceMap: Map<string, ServiceMapValue>
) => {
  // 添加requestsTemplates到Map中

  let currentService: ServiceMapValue;
  Object.keys(schema.paths).forEach((url) => {
    const path = schema.paths[url];
    //请求函数名
    const methodName = pascalCase(url.replace(".json", ""));
    const typePrefix = pascalCase(methodName);
    const { operationId, description } = getOperationIdAndDescription(path);
    let template = "";
    let typeTemplate = `
// ${description}
// 参数类型
export type ${typePrefix}ReqParams= ReqParamsType<'${operationId}'>
// 结果类型
export type ${typePrefix}ReqRes= ReqResType<'${operationId}'>
// 结果中的data类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
    `;
    let requestUrl = `${urlPrefix}${url}`;
    if (path.get) {
      const isRestful = requestUrl.includes("{");
      if (isRestful) {
        let param = "";
        requestUrl = requestUrl.replace(/\{.*\}/, (match) => {
          param = match.replace("{", "").replace("}", "");
          return `$${match}`;
        });
        template = `
// ${description}
export function get${methodName}(${param},config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'GET',
      ...config
    }
  )
}`;
      } else {
        // 是否有参数
        if (path.get.parameters) {
          template = `
// ${description}
export function get${methodName}(params,config = {}){
  return request(
    {
      url: '${requestUrl}',
      method: 'GET',
      params,
      ...config
    }
  )
}`;
        } else {
          template = `
// ${description}
export function get${methodName}(config = {}){
  return request(
    {
      url: '${requestUrl}',
      method: 'GET',
      ...config
    }
  )
}`;
        }
      }
      typeTemplate =
        typeTemplate +
        `
export function get${methodName}(params: ${typePrefix}ReqParams, config?: any): ${typePrefix}ReqRes
`;
      currentService = serviceMap.get(path.get.tags![0])!;
    }
    if (path.delete) {
      let param = "";
      requestUrl = requestUrl.replace(/\{.*\}/, (match) => {
        param = match.replace("{", "").replace("}", "");
        return `${match}`;
      });
      template = `
// ${description}
export function delete${methodName}(${param},config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'DELETE',
      ...config
    }
  )
}`;
      currentService = serviceMap.get(path.delete.tags![0])!;
      typeTemplate =
        typeTemplate +
        `
export function delete${methodName}(params: ${typePrefix}ReqParams, config?: any): ${typePrefix}ReqRes
`;
    }
    if (path.post) {
      template = `
// ${description}
export function post${methodName}(data,config = {}){
  return request(
    {
      url: '${requestUrl}',
      method: 'POST',
      data,
      ...config
    }
  )
}`;
      currentService = serviceMap.get(path.post.tags![0])!;
      typeTemplate =
        typeTemplate +
        `
export function post${methodName}(params: ${typePrefix}ReqParams, config?: any): ${typePrefix}ReqRes
`;
    }
    if (path.put) {
      template = `
// ${description}
export function put${methodName}(data,config = {}){
  return request(
    {
      url: '${requestUrl}',
      method: 'PUT',
      data,
      ...config
    }
  )
}`;
      currentService = serviceMap.get(path.put.tags![0])!;
      typeTemplate =
        typeTemplate +
        `
export function put${methodName}(params: ${typePrefix}ReqParams, config?: any): ${typePrefix}ReqRes
`;
    }
    currentService.requestsTemplates.push(template);
    currentService.typeTemplates.push(typeTemplate);
    currentService.fileName = currentService.controllerShortName;
    const descriptionTemplate = `
// ${currentService.description}
// ${currentService.name}
`;
    currentService.beforeTemplate = descriptionTemplate + headTempalte;
  });
};
export default setTemplatesToSchema;
