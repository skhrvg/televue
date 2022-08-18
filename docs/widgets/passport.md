---
title: Passport Button
editLink: true
---

<script setup>
  import { ButtonPassport } from '../../src';
  import ComponentDemo from '../components/ComponentDemo.vue';

  const authParameters = {
    public_key: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs+nvfO2n8m3xRJNJZPbY
YaopIXhlEyJ396SzeKLD/tQXeBU3ev6bYhUXKMYH32/Zy9tDVEjXRBkk/h8dQ0PQ
cZiCDb3nrBdGNGGVhSHUziJtk84jpffpG4csM0HQg9xWpElSOcd0QxYw0qP7NgZo
2M96IresSVeiRn6Nzvv15cmr+90HLPG+lq5T0yJCK74jYphw+xb05YRAaR+bNIGL
uTqzekWlXeWev1P2ap9vlnMSevCOAzG6sECNKUpppzjrrIoJ+8V/hoDcZX+nApNk
X5/BeAih5UAEQuLVskl+Oervh0U9EFPrXN3CU400ebGyETYNZBD757ZYQpzu13RF
IQIDAQAB
-----END PUBLIC KEY-----
`,
    nonce: 'demo',
    bot_id: 5532828216,
    scope: { 
      data: [
        { type: 'id_document', selfie: true }, 
        'address_document', 
        'phone_number', 
        'email'
      ], 
      v: 1 
    },
  };
</script>

# {{ $frontmatter.title }}

:::warning WARNING
This component is experimental and may not work as expected.
Do not use in production.
:::

A unified authorization method for services that require personal identification. Upload your documents once, then 
instantly share your data with services that require real-world ID (finance, ICOs, etc.).

> Inspired by [@vchaptsev/vue-telegram-passport](https://github.com/vchaptsev/vue-telegram-passport)

> Official Telegram Documentation:
> 
> [Telegram Passport Manual](https://core.telegram.org/passport)
> 
> [Example](https://core.telegram.org/passport/example)
> 
> [JavaScript SDK](https://core.telegram.org/passport/sdk-javascript)

<video class="mx-auto rounded-lg overflow-hidden" loop muted autoplay poster="https://telegram.org/file/811140300/16ce/SWVsDo8psQo.22197/3bc8c1e5d801f543ff" style="max-width: 480px;" preload="auto">
  <source src="https://telegram.org/file/811140664/1456/KzpQn3LtQMM.1686576.mp4/44d4d55c20a39f0ffc" type="video/mp4" />
</video>

## Overview

From the perspective of a service that requires real-world ID, the process looks like this:

* A user presses "Log in with Telegram" on your website.
* You request the data you need.
* The user accepts your privacy policy and agrees to share their data.
* The user's Telegram app downloads and decrypts the data you requested from the end-to-end encrypted storage on Telegram.
* If some of the data you requested is missing, the user can add it to their Telegram Passport at this point.
* The user's app encrypts the data with your public key and sends it to you.
* You decrypt the data, check it for errors and re-request any missing or invalid information.
* You sign the user up for your service. **Tada!**

## Demo

<ComponentDemo>
  <ButtonPassport 
    :auth-parameters="authParameters"
    :auth-button-options="{ tooltip_position: 'right' }"
  />
</ComponentDemo>

## Usage

```vue
<script setup>
import { ButtonPassport } from 'televue'

const authParameters = {
  bot_id:        XXXXXX, // place id of your bot here
  scope:         { data: [{ type: 'id_document', selfie: true }, 'address_document', 'phone_number', 'email'], v: 1 },
  public_key:    '-----BEGIN PUBLIC KEY----- ...', // place public key of your bot here
  nonce:         'ab2df83746a87d2f3bd6...', // place nonce here
  callback_url:  'https://example.com/callback/', // place callback url here
}
</script>

<template>
  <ButtonPassport
    :auth-parameters="authParameters"
    :auth-button-options="{ tooltip_position: 'right' }"
  />
</template>
```

## Props

| Property          | Type                                    | Required |
|-------------------|-----------------------------------------|----------|
| authParameters    | [AuthParameters](#authparameters)       | ✅        |
| authButtonOptions | [AuthButtonOptions](#authbuttonoptions) | ❌        |

## Setting Up Telegram Passport

To integrate Telegram Passport into your login or verification flow, you need a working Telegram bot.

To request data from Telegram Passport users, your bot will need to generate a pair of encryption keys.

### Generating a private key

First, use a console to generate a **private** key:

```shell
openssl genrsa 2048 > private.key
```

**WARNING: Keep your private key SECRET!**

### Generating a public key

Then use the console to print the corresponding **public** key:

```shell
openssl rsa -in private.key -pubout
```

Use the `/setpublickey` command with [@BotFather](https://t.me/BotFather) to connect this public key with your bot.

### Privacy Policy

Add a link to your Privacy Policy by using the `/setprivacypolicy` command. Users will see this link when offered to 
authorize you to access their data.

## Receiving information

When the user confirms your request by pressing the "Authorize" button, it will be redirected to the URL specified in 
the _callback_url_ with the parameter `tg_passport=success` and the Bot API will send the bot an 
[Update](https://core.telegram.org/bots/api#update) with the field passport_data which contains encrypted 
[Telegram Passport data](https://core.telegram.org/bots/api#passportdata).

If the user cancels your request, it will be redirected to the URL specified in the _callback_url_ with the parameter 
`tg_passport=cancel`.

If an error occurs during the request, the user will be redirected to the URL specified in the _callback_url_ with the 
parameter `tg_passport=error`. The parameter `error` will contain one of the following values: 
* BOT_INVALID
* PUBLIC_KEY_REQUIRED
* PUBLIC_KEY_INVALID
* SCOPE_EMPTY
* NONCE_EMPTY

## Type Declarations

### AuthButtonOptions

```typescript
interface AuthButtonOptions {
  /**
   * Text on the button.
   * @default "Log In With Telegram"
   */
  text?: string
  /**
   * Radius of the button and tooltip in px.
   * @default 23
   */
  radius?: number
  /**
   * Text on the tooltip.
   * @default "Please <u>install Telegram</u> to use this option."
   */
  tooltip_text?: string
  /**
   * Tooltip position.
   * @default "bottom"
   */
  tooltip_position?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * Always show a tooltip.
   * @default false
   */
  tooltip_force?: boolean
}
```

### AuthParameters

```typescript
interface AuthParameters {
  /**
   * Unique identifier for the bot.
   */
  bot_id: number
  /**
   * A JSON-serialized object describing the data you want to request
   */
  scope: PassportScope
  /**
   * Public key of your bot
   */
  public_key: string
  /**
   * Bot-specified nonce
   */
  nonce: string
  /**
   * URL to which the user will be redirected.
   */
  callback_url?: string
}
```

### PassportScope

This object represents the data to be requested.

```typescript
interface PassportScope {
  /**
   * List of requested elements, each type may be used only once in the entire array of PassportScopeElement objects
   */
  data: PassportScopeElement[]
  /**
   * Scope version, must be 1
   */
  v: number
}
```

### PassportScopeElement

This object represents a requested element, should be one of:
* [PassportScopeElementOneOfSeveral](#passportscopeelementoneofseveral) - use to request any one of the documents 
included in the scope.
* [PassportScopeElementOne](#passportscopeelementone) – use to request one particular document.

```typescript
interface PassportScopeElement {}
```

### PassportScopeElementOne

This object represents one particular element that must be provided. If no options are needed, String can be used
instead of this object to specify the type of the element.

```typescript
interface PassportScopeElementOne extends PassportScopeElement {
  /**
   * Element type.
   *
   * One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address",
   * "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration",
   * "phone_number", "email"
   */
  type: 'personal_details' | 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'address' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration' | 'phone_number' | 'email'
  /**
   * Use this parameter if you want to request a selfie with the document as well.
   *
   * Available for "passport", "driver_license", "identity_card" and "internal_passport"
   */
  selfie?: boolean
  /**
   * Use this parameter if you want to request a translation of the document as well.
   *
   * Available for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement",
   * "rental_agreement", "passport_registration" and "temporary_registration".
   *
   * <i>Note: We suggest to only request translations after you have received a valid document that requires one.</i>
   */
  translation?: boolean
  /**
   * Use this parameter to request the first, last and middle name of the user in the language of the user's country
   * of residence.
   *
   * Available for "personal_details"
   */
  native_names?: boolean
}
```

### PassportScopeElementOneOfSeveral

This object represents one of several elements that must be provided.

```typescript
interface PassportScopeElementOneOfSeveral extends PassportScopeElement {
  /**
   * List of elements one of which must be provided;
   * must contain either several of “passport”, “driver_license”, “identity_card”, “internal_passport”
   * or several of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  one_of: PassportScopeElementOne[]
  /**
   * Use this parameter if you want to request a selfie with the document from this list that the user chooses to upload.
   */
  selfie?: boolean
  /**
   * Use this parameter if you want to request a translation of the document from this list that the user chooses to upload.
   * 
   * <i>Note: We suggest to only request translations after you have received a valid document that requires one.</i>
   */
  translation?: boolean
}
```
