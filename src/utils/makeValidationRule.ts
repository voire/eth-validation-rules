import type { CheckFunction, RuleFunction } from '../models'

export function makeValidationRule(
  check: CheckFunction,
  errorMessage?: string,
): RuleFunction {
  return (value?: string) => {
    // Field is empty, should pass
    if (!value || !value.length) {
      return true
    }

    if (!check(value)) {
      return errorMessage ?? false
    }

    return true
  }
}
