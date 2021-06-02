import path from "path";
import { outputFileSync, readJsonSync, writeJsonSync } from "fs-extra";
import { Schema } from "../data";
import getSchemaMap from "./getSchemaMap";
import { getTemplate } from "./getTemplate";
import setTemplatesToSchema from "./setTemplatesToSchema";
import { success } from "../utils";

/**
 * @description: 生成service请求文件
 * @param {Schema} schema
 * @return {*}
 */
const makeServiceFile = (schema: Schema) => {
  success("写入文件数据");
  const serviceMap = getSchemaMap(schema);
  setTemplatesToSchema(schema, serviceMap);
  // 遍历Map 将数据写入到service文件中
  serviceMap.forEach((value) => {
    outputFileSync(
      value.filePath,
      value.beforeTemplate + value.requestsTemplates.join("")
    );
  });
  // 写入工具泛型
  outputFileSync(path.resolve("services.d.ts"), getTemplate("type"));
  const tsconfigObj = readJsonSync(path.resolve("tsconfig.json"));
  if (!tsconfigObj?.include?.find((i: string) => i === "services.d.ts")) {
    writeJsonSync(path.resolve("tsconfig.json"), {
      ...tsconfigObj,
      include: [...(tsconfigObj.include ?? []), "services.d.ts"],
    });
  }
  success("文件写入成功");
};
export default makeServiceFile;
