import config from "../config";
// 文件的头部模板
const getHeadTempalte = () => {
  const { requestImportCode } = config;
  return requestImportCode;
};
const headTempalte = getHeadTempalte();

export default headTempalte;
