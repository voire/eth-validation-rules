import { describe, expect, test } from 'vitest'
import { isEnsName, isEthAddress, isHex, isNullEthAddress, isPrefixedHex } from './checks'

describe('isHex', () => {
  test('should accept valid string', () => {
    expect(isHex('ABC123')).toBe(true)
  })

  test('should work case-insensitively', () => {
    expect(isHex('abc123ABC')).toBe(true)
  })

  test('should not pass random string', () => {
    expect(isHex(',dsf#0- -sa.')).toBe(false)
  })

  test('should not pass string with not hexagonal symbols', () => {
    expect(isHex('ABCDEFG')).toBe(false)
  })
})

describe('isPrefixedHex', () => {
  test('should accept valid string', () => {
    expect(isPrefixedHex('0x123ABC')).toBe(true)
  })

  test('should not pass just prefix without any data', () => {
    expect(isPrefixedHex('0x')).toBe(false)
  })

  test('should not pass random but prefixed string', () => {
    expect(isPrefixedHex('0xp.afsdf0_=')).toBe(false)
  })

  test('should not pass hex string without prefix', () => {
    expect(isPrefixedHex('ABC123')).toBe(false)
  })
})

describe('isEthAddress', () => {
  test('should accept valid address', () => {
    expect(isEthAddress('0xABC123ABCDABC123ABCDABC123ABCDABC123ABCD')).toBe(true)
  })

  test('should not pass too short address', () => {
    expect(isEthAddress('0xABC123ABCDABC123ABCDABC123ABCDABC123ABC')).toBe(false)
  })

  test('should not pass too long address', () => {
    expect(isEthAddress('0xABC123ABCDABC123ABCDABC123ABCDABC123ABCDE')).toBe(false)
  })
})

describe('isNullEthAddress', () => {
  test('should recognize ethereum zero address', () => {
    expect(isNullEthAddress('0x0000000000000000000000000000000000000000')).toBe(true)
  })

  test('should not accept not zero address', () => {
    expect(isNullEthAddress('0xABC0000000000000000000000000000000000000')).toBe(false)
  })

  test('should not accept zero but short address', () => {
    expect(isNullEthAddress('0x00000000000000')).toBe(false)
  })
})

describe('isEnsName', () => {
  test('should accept valid ENS name', () => {
    expect(isEnsName('eth.eth')).toBe(true)
  })

  test('shoud accept an ENS name with an emoji', () => {
    expect(isEnsName('🇺🇸22221.eth')).toBe(true)
  })

  test('shoud accept an ENS name with dots in label', () => {
    expect(isEnsName('some.name.eth')).toBe(true)
  })

  test('should not accept a name with random symbols', () => {
    expect(isEnsName('&#$4s.eth')).toBe(false)
  })

  test('should accept a name with unusual extensions', () => {
    expect(isEnsName('eth.com')).toBe(true)
  })
})
