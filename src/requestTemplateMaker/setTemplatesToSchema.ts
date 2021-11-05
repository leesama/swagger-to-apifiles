import { camelCase } from "lodash";
import { Schema, ServiceMapValue } from "../data";
import pascalCase from "pascalcase";
import headTempalte from "./headTempalte";

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
    let requestUrl = `${urlPrefix}${url}`;
    if (path.get) {
      const description = path.get.summary;
      let template = "";
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
      currentService = serviceMap.get(path.get.tags![0])!;
      currentService.requestsTemplates.push(template);
    }
    if (path.delete) {
      let param = "";
      requestUrl = requestUrl.replace(/\{.*\}/, (match) => {
        param = match.replace("{", "").replace("}", "");
        return `$${match}`;
      });
      const description = path.delete.summary;
      const template = `
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
      currentService.requestsTemplates.push(template);
    }
    if (path.post) {
      const { summary: description } = path.post;
      const template = `
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
      currentService.requestsTemplates.push(template);
    }
    if (path.put) {
      const { summary: description } = path.put;
      const template = `
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
      currentService.requestsTemplates.push(template);
    }
    currentService.filePath = `${currentService.controllerShortName}.js`;
    const descriptionTemplate = `
// ${currentService.description}
// ${currentService.name}
`;
    currentService.beforeTemplate = descriptionTemplate + headTempalte;
  });
};
export default setTemplatesToSchema;
