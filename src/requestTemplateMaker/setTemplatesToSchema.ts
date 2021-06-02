import { takeRight } from "lodash";
import { join, resolve } from "path";
import { pascalCase, camelCase } from "change-case";
import { Schema, ServiceMapValue } from "../data";
import getConfig from "../getConfig";
import getHeadTempalte from "./headTempalte";

const setTemplatesToSchema = (
  schema: Schema,
  serviceMap: Map<string, ServiceMapValue>
) => {
  const { serviceFileDir } = getConfig();
  const basePath = resolve(serviceFileDir);
  // 添加requestsTemplates到Map中

  let currentService: ServiceMapValue;
  Object.keys(schema.paths).forEach((requestUrl) => {
    const path = schema.paths[requestUrl];
    const [firstUrlItem, secondUrlItem] = takeRight(requestUrl.split("/"), 2);
    const methodName =
      camelCase(firstUrlItem) + pascalCase(secondUrlItem.replace(".json", ""));
    const typePrefix = pascalCase(methodName);
    if (path.get) {
      const operationId = path.get.operationId;
      const description = path.get.summary;
      const template = `
// ${description}
// ${description}参数类型
export type ${typePrefix}ReqParams= ReqParamsType<'${operationId}'>
// ${description}结果类型
export type ${typePrefix}ReqRes= ReqResType<'${operationId}'>
//  ${description}结果中的data类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
export function ${methodName}(params: ${typePrefix}ReqParams){
  return request<${typePrefix}ReqRes>(
    '${requestUrl}',
    {
      method: 'get',
      params
    }
  )
}`;
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
// ${description}参数类型
export type ${typePrefix}ReqParams= ReqParamsType<'${operationId}'>
// ${description}结果类型
export type ${typePrefix}ReqRes= ReqResType<'${operationId}'>
//  ${description}结果中的data类型
export type ${typePrefix}ReqData= ReqDataType<'${operationId}'>
export function ${methodName}(data: ${typePrefix}ReqParams){
  return request<${typePrefix}ReqRes>(
    '${requestUrl}',
    {
      method: 'post',
      data,
      requestType:'${requestType}'
    }
    )
  }`;
      currentService = serviceMap.get(path.post.tags![0])!;
      currentService.requestsTemplates.push(template);
    }
    currentService.filePath = join(
      basePath,
      `${currentService.controllerShortName}.ts`
    );

    const descriptionTemplate = `
    // ${currentService.description}
    //   ${currentService.name}
        `;
    currentService.beforeTemplate = descriptionTemplate + getHeadTempalte();
  });
};
export default setTemplatesToSchema;
