#!/usr/bin/env node

import path from "path";
import { outputFileSync } from "fs-extra";
import openapiTS, { SchemaObject } from "openapi-typescript";
import getConfig from "./getConfig";
import makeServiceFile from "./requestTemplateMaker";
import getSchemaData from "./getSchemaData";

import makeFiles from "./makeFiles";

async function main() {
  try {
    const { generateConfig } = getConfig();
    generateConfig.forEach(async (generateConfigItem) => {
      await makeFiles(generateConfigItem);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
