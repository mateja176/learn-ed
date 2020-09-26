export function assertDefined<Value extends unknown>(
  value: Value,
): asserts value {
  if (!value) {
    throw new Error(
      `Value is expected to be truthy but "${value}" was provided`,
    );
  }
}

export function assertTruthyValues<O extends Record<string, unknown>>(
  object: O,
): asserts object is Required<O> {
  Object.values(object).forEach(assertDefined);
}
