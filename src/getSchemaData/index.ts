import got from "got";
import { Schema } from "../data";
import { log } from "../utils";
const getSchemaData = async (url: string) => {
  try {
    log.success("请求接口数据");
    const { body, statusCode } = await got(url, { timeout: 2000 });
    if (statusCode !== 200) {
      log.error(`请求失败${statusCode}`);
      process.exit(1);
    }
    log.success("接口数据请求成功");
    return JSON.parse(body) as Schema;
  } catch (err) {
    log.error("请求接口失败,检查服务器是否异常");
    process.exit(1);
  }
};
export default getSchemaData;
