#!/usr/bin/env node

import getConfig from "./getConfig";
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
