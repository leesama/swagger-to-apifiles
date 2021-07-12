import { camelCase } from "lodash";
import { join, resolve } from "path";
import pascalCase from "pascalcase";
import { Schema, ServiceMapValue } from "../data";
import getConfig from "../getConfig";
import getHeadTempalte from "./headTempalte";

const setTemplatesToSchema = (
  urlPrefix: string,
  schema: Schema,
  serviceMap: Map<string, ServiceMapValue>
) => {
  // 添加requestsTemplates到Map中

  let currentService: ServiceMapValue;
  Object.keys(schema.paths).forEach((url) => {
    const path = schema.paths[url];
    const methodName = camelCase(url.replace(".json", ""));
    const typePrefix = pascalCase(methodName);
    const requestUrl = `${urlPrefix}${url}`;
    if (path.get) {
      const operationId = path.get.operationId;
      const description = path.get.summary;
      // 是否有参数
      const hasParam = path.get.parameters;
      let template = "";
      if (!hasParam) {
        template = `
// ${description}
// 结果类型
export type ${typePrefix}ReqRes= ReqResType<'${operationId}'>
// 结果中的data类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
export function ${methodName}(config:Record<string, any> = {}){
  return request<${typePrefix}ReqRes>(
    '${requestUrl}',
    {
      method: 'GET',
      ...config
    }
  )
}`;
      } else {
        template = `
// ${description}
// 参数类型
export type ${typePrefix}ReqParams= ReqParamsType<'${operationId}'>
// 结果类型
export type ${typePrefix}ReqRes= ReqResType<'${operationId}'>
// 结果中的data类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
export function ${methodName}(params: ${typePrefix}ReqParams,config:Record<string, any> = {}){
  return request<${typePrefix}ReqRes>(
    '${requestUrl}',
    {
      method: 'GET',
      params,
      ...config
    }
  )
}`;
      }
      currentService = serviceMap.get(path.get.tags![0])!;
      currentService.requestsTemplates.push(template);
    }
    if (path.post) {
      const { operationId, summary: description } = path.post;
      const requestType =
        (path.post as any)?.consumes[0] === "application/json"
          ? "json"
          : "form";
      const template = `
// ${description}
// 参数类型
export type ${typePrefix}ReqParams= ReqParamsType<'${operationId}'>
// 结果类型
export type ${typePrefix}ReqRes= ReqResType<'${operationId}'>
// 结果中的data类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
export function ${methodName}(data: ${typePrefix}ReqParams,config:Record<string, any> = {}){
  return request<${typePrefix}ReqRes>(
    '${requestUrl}',
    {
      method: 'POST',
      data,
      requestType:'${requestType}',
      ...config
    }
    )
  }`;
      currentService = serviceMap.get(path.post.tags![0])!;
      currentService.requestsTemplates.push(template);
    }
    currentService.filePath = `${currentService.controllerShortName}.ts`;

    const descriptionTemplate = `
// ${currentService.description}
// ${currentService.name}
        `;
    currentService.beforeTemplate = descriptionTemplate + getHeadTempalte();
  });
};
export default setTemplatesToSchema;
