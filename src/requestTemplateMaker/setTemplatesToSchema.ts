import { Schema, ServiceMapValue } from "../data";
import pascalCase from "pascalcase";

import { headTempalte } from "./headTempalte";
const getTemplateType = (
  method: string,
  methodName: string,
  pascalCaseMethodName: string,
  operationId: string,
  reqParamsType: string
) => {
  const typePrefix = `${pascalCase(method)}${pascalCaseMethodName}`;
  return `
// 参数类型
export type ${typePrefix}ReqParams= ${reqParamsType}
// 返回值类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
export function ${method}${methodName}(params: ${typePrefix}ReqParams, config?: any): Promise<${typePrefix}ReqData>
`;
};
// 组装Service数据
const makeService = (
  description: string,
  methodName: string,
  requestUrl: string,
  currentService: ServiceMapValue,
  pascalCaseMethodName: string,
  operationId: string,
  method: string,
  pathObj: any
) => {
  let template = `
// ${description}
`;
  let typeTemplate = getTemplateType(
    method,
    methodName,
    pascalCaseMethodName,
    operationId,
    `ReqParamsType<'${operationId}'>`
  );
  if (method === "get") {
    // 如果是restRul get
    if (requestUrl.includes("{")) {
      let param = "";
      requestUrl = requestUrl.replace(/\{.*\}/, (match) => {
        param = match.replace("{", "").replace("}", "");
        return `$${match}`;
      });
      typeTemplate = getTemplateType(
        method,
        methodName,
        pascalCaseMethodName,
        operationId,
        `ReqParamsType<'${operationId}'>['${param}']`
      );
      template += `
export function get${methodName}(${param},config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'GET',
      ...config
    }
  )
}`;
    } else if (pathObj.parameters) {
      // 如果有参数
      template += `
export function get${methodName}(params,config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'GET',
      params,
      ...config
    }
  )
}`;
    } else {
      template += `
export function get${methodName}(config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'GET',
      ...config
    }
  )
}`;
    }
  }
  if (method === "delete") {
    // 如果是restRul get
    if (requestUrl.includes("{")) {
      let param = "";
      requestUrl = requestUrl.replace(/\{.*\}/, (match) => {
        param = match.replace("{", "").replace("}", "");
        return `$${match}`;
      });
      typeTemplate = getTemplateType(
        method,
        methodName,
        pascalCaseMethodName,
        operationId,
        `ReqParamsType<'${operationId}'>['${param}']`
      );
      template += `
export function delete${methodName}(${param},config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'DELETE',
      ...config
    }
  )
}`;
    } else if (pathObj.parameters) {
      // 如果有参数
      template += `
export function delete${methodName}(data,config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'DELETE',
      data,
      ...config
    }
  )
}`;
    } else {
      template += `
export function delete${methodName}(config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'DELETE',
      ...config
    }
  )
}`;
    }
  }
  if (method === "post") {
    template += `
export function post${methodName}(data,config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'POST',
      data,
      ...config
    }
  )
}`;
  }
  if (method === "put") {
    template += `
export function put${methodName}(data,config = {}){
  return request(
    {
      url: \`${requestUrl}\`,
      method: 'PUT',
      data,
      ...config
    }
  )
}`;
  }
  currentService.requestsTemplates.push(template);
  currentService.typeTemplates.push(typeTemplate);
  currentService.fileName = currentService.controllerShortName;
  const descriptionTemplate = `
// ${currentService.description}
// ${currentService.name}
`;
  currentService.beforeTemplate = descriptionTemplate + headTempalte;
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
    const pascalCaseMethodName = pascalCase(methodName);
    const requestUrl = `${urlPrefix}${url}`;
    for (const [method, pathObj] of Object.entries(path)) {
      const { operationId, summary: description } = pathObj;
      currentService = serviceMap.get(pathObj.tags![0])!;
      makeService(
        description,
        methodName,
        requestUrl,
        currentService,
        pascalCaseMethodName,
        operationId,
        method,
        pathObj
      );
    }
  });
};
export default setTemplatesToSchema;
