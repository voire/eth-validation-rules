import { isEthAddress, isHex, isNullEthAddress, isPrefixedHex, makeValidationRule } from './utils'

export const hex = makeValidationRule(
  isHex,
  'The value is not a hex string',
)

export const hexPrefixed = makeValidationRule(
  isPrefixedHex,
  'The value is not a 0x-prefixed hex string',
)

export const ethAddress = makeValidationRule(
  isEthAddress,
  'The value is not a valid ethereum address',
)

export const nullEthAddress = makeValidationRule(
  isNullEthAddress,
  'The value is not the null ethereum address',
)

export const notNullEthAddress = makeValidationRule(
  (value: string) => isEthAddress(value) && !isNullEthAddress(value),
  'The value cannot be the null ethereum address!',
)
