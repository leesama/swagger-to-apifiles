import {
  OpenAPI2,
  OpenAPI3,
  SchemaObject,
  SwaggerToTSOptions,
} from "openapi-typescript/dist/cjs/types";
export type Schema = Required<
  OpenAPI2 & {
    tags: { name: string; description: string }[];
  }
>;
export type ServiceMapValue = {
  // 名字
  name: string;
  // 描述
  description: string;
  // controller简写名 用于service文件名
  controllerShortName: string;
  fileName: string;
  beforeTemplate: string;
  // 请求的模板
  requestsTemplates: string[];
  // 类型模板
  typeTemplates: string[];
};

export type ServiceMapType = Map<string, ServiceMapValue>;
