import { camelCase } from "camel-case";
import { error } from "../utils";
const getSchemaMap = (schema) => {
    const serviceMap = new Map();
    // 根据tags的name作为key构造出Map
    schema.tags.forEach((s) => {
        const controllerShortName = camelCase(s.description.replace("Controller", ""));
        if (serviceMap.has(s.name)) {
            error(`有重复的ctroller,${s.name} ${s.description},请修改`);
            process.exit(1);
        }
        serviceMap.set(s.name, {
            ...s,
            filePath: "",
            beforeTemplate: "",
            controllerShortName,
            requestsTemplates: [],
        });
    });
    return serviceMap;
};
export default getSchemaMap;
//# sourceMappingURL=getSchemaMap.js.map