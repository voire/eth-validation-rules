# @voire/eth-validation-rules
A bunch of additional [VeeValidate](https://vee-validate.logaretm.com/v4/guide/) rules for eth addresses' validation.

## Provided rules
| export | description |
|--|--|
| `hex` | If value is a hex string, e.g. `ab12AB` |
| `hexPrefixed` | If value is a `0x`-prefixed hex string, e.g. `0xab12AB` |
| `ethAddress` | If value is a valid ethereum address, i.e. is a `0x`-prefixed hex string and 42 symbols long |
| `nullEthAddress` | If value is an ethereum zero address, i.e. `0x000..00` |
| `notNullEthAddress` | If value is an ethereum address, but **not** zero address, e.g. `0xABC..90` |

> All checks are case-insensitive.

## Usage

1. Define validators for the app.
  ```ts
  import { defineRule } from 'vee-validate'
  import { ethAddress } from '@voire/eth-validation-rules'

  // Use any key you find suitable
  defineRule('eth_address', ethAddress)
  ```
2. Use it within vee Field's rules
  ```html
  <script setup lang="ts">
  import { Field } from 'vee-validate'
  </script>
  
  <template>
    <Field name="address" rules="eth_address" />
  </template>
  ```

[See detailed VeeValidate docs](https://vee-validate.logaretm.com/v4/guide/global-validators#defining-global-validators) about custom rules' defining and usage.
