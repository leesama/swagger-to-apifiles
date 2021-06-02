import got from "got";
import { error, success } from "../utils";
const getSchemaData = async (url) => {
    try {
        success("请求接口数据");
        const { body, statusCode } = await got(url, { timeout: 2000 });
        if (statusCode !== 200) {
            error(`请求失败${statusCode}`);
            process.exit(1);
        }
        success("接口数据请求成功");
        return JSON.parse(body);
    }
    catch (err) {
        error("请求接口失败,检查服务器是否异常");
        process.exit(1);
    }
};
export default getSchemaData;
//# sourceMappingURL=index.js.map