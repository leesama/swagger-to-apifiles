#!/usr/bin/env node

import path from "path";
import { outputFileSync } from "fs-extra";
import openapiTS from "openapi-typescript";
import getConfig from "./getConfig";
import makeServiceFile from "./requestTemplateMaker";
import getSchemaData from "./getSchemaData";

async function main() {
  try {
    const { swaggerUrl: url, outDir, serviceFileDir } = getConfig();
    const schemaData = await getSchemaData(url);
    outputFileSync(path.resolve(outDir), openapiTS(schemaData));
    if (serviceFileDir) {
      makeServiceFile(schemaData);
    }
  } catch (error) {
    console.log(error);
  }
}
main();
