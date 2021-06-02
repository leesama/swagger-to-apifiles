# openapi-generate-config

根据 swagger api-doc 自动生成类型文件
根据 controller 自动生成请求文件
请求的入参、返回值类型引用类型定义文件中的类型
再也不必自己定义请求类型 请求方法

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
  "swaggerUrl": "https://petstore.swagger.io/v2/swagger.json",

  "outDir": "./src/types/request.d.ts",
  "serviceFileDir": "src/services"
}
```

### 配置参数说明：

### swaggerUrl

swagger 链接

### outDir

输出的目录

如果项目根目录有配置文件,直接读取配置文件内容并根据配置生成文件

### swaggerUrl

service 文件目录

#### 感谢使用
