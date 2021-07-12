export const hasDuplicates = (arr: unknown[]) => {
  return new Set(arr).size !== arr.length;
};

export { default as log } from "./colorConsole";
