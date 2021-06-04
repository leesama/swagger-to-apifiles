import { readJSONSync } from "fs-extra";
import path from "path";
// 文件的头部模板
const getHeadTempalte = () => {
  const packageInfo = readJSONSync(path.resolve("./package.json"));
  const commonHead = `
import type {ReqParamsType,ReqDataType,ReqResType} from "../types/serviceUtilGeneric"
  `;
  let headTempalte = `
import { request } from 'umi';
  `;
  if (packageInfo.dependencies) {
    const isTaro = Object.keys(packageInfo.dependencies).find((i) =>
      i.includes("@tarojs")
    );
    if (isTaro) {
      headTempalte = `
import request from "@/utils/request";
  `;
    }
  }

  return headTempalte + commonHead;
};

export default getHeadTempalte;
