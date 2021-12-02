import config from "../config";

// 文件的头部模板
const headTempalte = config.requestImportCode;
// 类型文件的头部模板
const typeHeadTemplate = `
import type {ReqParamsType,ReqDataType,ReqResType} from "./types/serviceUtilGeneric"
  `;
export { headTempalte, typeHeadTemplate };
