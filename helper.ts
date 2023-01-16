import isArray from "lodash/isArray";
import camelCase from "lodash/camelCase";

export class RequestTransformer {
  public static toCamelCase(snakeCase: object): object {
    
    if (this.isObject(snakeCase)) {
      const n: any = {};

      Object.keys(snakeCase).forEach((k) => {
        n[this.toCamel(k)] = this.toCamelCase((snakeCase as any)[k]);
      });

      return n;
    } else if (isArray(snakeCase)) {
      return snakeCase.map((i) => {
        return this.toCamelCase(i);
      });
    }

    return snakeCase;
  }

  private static toCamel(s: string) {
    return camelCase(s).replace("_", "");
  }

  private static isObject(o: any) {
    return o === Object(o) && !isArray(o) && typeof o !== "function";
  }
}
