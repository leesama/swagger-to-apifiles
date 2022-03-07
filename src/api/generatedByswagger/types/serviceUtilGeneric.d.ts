import type {operations  as requestOperations} from "./request"
import type {operations  as responseOperations} from "./response"

// 请求的结果数据类型
export type ReqResType<T extends keyof responseOperations> = Required<
  responseOperations[T]["responses"][200] extends {
    schema: infer S;
  }
    ? S
    : unknown
>;
// 请求的Data数据类型
export type ReqDataType<T extends keyof responseOperations> = ReqResType<T> extends {
  context: infer D;
}
  ? D
  : any;
// 请求的参数类型
export type ReqParamsType<T extends keyof requestOperations> =
  requestOperations[T] extends {
    parameters: infer P;
  }
    ? P extends {
        path: infer PATH;
      }
      ? PATH
      : P extends {
          query: infer QUERY;
        }
      ? QUERY
      : P extends {
          body: infer B;
        }
      ? B[keyof B]
      : undefined
    : undefined;
