# openapi-generate-config

通过配置文件使用 openapi-typescript
`https://github.com/drwpow/openapi-typescript`

# Step 1

安装插件

```bash
# Yarn
yarn add openapi-generate-config --dev

# Npm
npm install openapi-generate-config --save-dev
```

# Step 2

生成、读取文件

```bash
npx openapi-make

```

如果项目根目录没有配置文件,执行命令后会会生成一个`generateTypeBySwagger.json`的文件，内容如下：

```json
{
  // swagger链接
  "swaggerUrl": "https://petstore.swagger.io/v2/swagger.json",
  // 输出的目录
  "outDir": "./src/types/request.d.ts"
}
```

如果项目根目录有配置文件,直接读取配置文件内容并根据配置生成文件

#### 感谢使用
