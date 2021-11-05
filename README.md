# swagger-to-service-js

根据 swagger api-doc 自动生成 jsapi 文件、请求函数

# 特性

1. 根据 controller 自动生成请求文件目录
2. 根据请求路径生成请求函数
3. 可自定义文件生成目录

再也不必自己定义请求方法 请求文件

# Step 1

安装插件

```bash
# Yarn
yarn add swagger-to-service-js --dev

# Npm
npm install swagger-to-service-js --save-dev
```

# Step 2

生成、读取文件

```bash
npx make-api

```

如果项目根目录没有配置文件,执行命令后会会生成一个`generateTypeBySwagger.json`的文件，内容如下：

```js
{
  "doc":"请参考README.md,https://www.npmjs.com/package/swagger-to-service-js",
  "requestImportCode":"import request from '../utils/request';",
  // 根据数组配置生成文件
  "generateConfig": [
    {
      // 目录名
      "dirName": "api/generatedByswagger",
      // 请求url的前缀
      "urlPrefix": "/api",
      "swaggerUrl": "https://petstore.swagger.io/v2/swagger.json"
    },
   {
      "dirName": "api/generatedByswagger1",
      "swaggerUrl": "https://petstore.swagger.io/v2/swagger.json"
    },
  ]
}
```

### 生成的 api 文件支持传入配置覆盖原有配置

### 建议搭配 tampermonkey 插件

https://greasyfork.org/zh-CN/scripts/435022-copy-method-swagger-to-service-js

可直接复制请求函数名

#### 感谢使用
