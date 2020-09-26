export function assertDefined<Value extends unknown>(
  key: string,
  value: Value,
): asserts value {
  if (!value) {
    throw new Error(
      `${key} is expected to be defined but "${value}" was provided`,
    );
  }
}

export function assertTruthyValues<O extends Record<string, unknown>>(
  object: O,
): asserts object is Required<O> {
  Object.entries(object).forEach(([key, value]) => assertDefined(key, value));
}
