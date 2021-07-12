// 提取数组中数组项的类型
type ArrayItemType<T extends any[]> = T extends (infer U)[] ? U : never;
