#!/usr/bin/env node

import config from "./config";
import makeFiles from "./makeFiles";
async function main() {
  try {
    const { generateConfig } = config;
    generateConfig.forEach(async (generateConfigItem) => {
      await makeFiles(generateConfigItem);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
