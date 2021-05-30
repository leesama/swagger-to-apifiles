#!/usr/bin/env node
import r from "request";
import { promisify } from "util";
import path from "path";
import write from "write";
import openapiTS from "openapi-typescript";
import getConfig from "./libs/getConfig";

const request = promisify(r);

async function main() {
  const { swaggerUrl: url, outDir } = getConfig();
  const { body, statusCode } = await request({
    url,
  });
  if (statusCode === 200) {
    const output = openapiTS(JSON.parse(body as string));
    write.sync(path.resolve(outDir), output);
  }
}
main();
