import { camelCase } from "lodash";
import { Schema, ServiceMapValue } from "../data";
import { log } from "../utils";

const getSchemaMap = (schema: Schema) => {
  const serviceMap = new Map<string, ServiceMapValue>();
  // 根据tags的name作为key构造出Map
  schema.tags.forEach((s) => {
    const controllerShortName = camelCase(
      s.description.replace("Controller", "")
    );
    if (serviceMap.has(s.name)) {
      log.error(`有重复的ctroller,${s.name} ${s.description},请修改`);
      process.exit(1);
    }
    serviceMap.set(s.name, {
      ...s,
      fileName: "",
      beforeTemplate: "",
      controllerShortName,
      typeTemplates: [],
      requestsTemplates: [],
    });
  });
  return serviceMap;
};
export default getSchemaMap;
