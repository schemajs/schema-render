import { isArrayLike } from "mobx";

export function isArray(
  arg: ReadonlyArray<any> | any
): arg is ReadonlyArray<any>;
export default function isArray(value) {
  return isArrayLike(value);
}
