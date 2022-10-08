const ETH_ADDRESS_LENGTH = 42 // 20 bytes with `0x` prefix

export function isHex(value: string): boolean {
  return /^[a-fA-F0-9]+$/.test(value)
}

export function isPrefixedHex(value: string): boolean {
  return /^0x[a-fA-F0-9]+$/.test(value)
}

export function isEthAddress(value: string): boolean {
  return value.length === ETH_ADDRESS_LENGTH && isPrefixedHex(value)
}

export function isNullEthAddress(value: string): boolean {
  return isEthAddress(value) && !(+value)
}
