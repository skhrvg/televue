---
title: Login Widget
editLink: true
---

<script setup>
  import ButtonLogin from '../../src/components/ButtonLogin.vue';
  import ComponentDemo from '../components/ComponentDemo.vue';
</script>

![Login widget](https://core.telegram.org/img/Widget_Login.svg)

# {{ $frontmatter.title }}

The Telegram **login widget** is a simple way to authorize users on your website.
Check out [this post](https://telegram.org/blog/login) for a general overview of the widget.

> [Official Telegram documentation](https://core.telegram.org/widgets/login)

> Inspired by [@vchaptsev/vue-telegram-login](https://github.com/vchaptsev/vue-telegram-login)

## Demo

<ComponentDemo 
  v-slot="{ onOutput }" 
  output 
  output-placeholder="Log in to see your user data"
>
  <ButtonLogin 
    mode="callback" 
    size="large"
    bot-username="televuebot" 
    @callback="onOutput" 
  />
</ComponentDemo>

## Usage

After a successful authorization, the widget can return data in two ways:

- by redirecting the user to the URL specified in the `redirect-url` property;
- by emitting a `callback` event:

```vue
<script setup>
import { ButtonLogin } from 'televue'

const loginWithTelegram = async (user) => {
  // Follow this link to see how you can verify user data on backend
  // https://core.telegram.org/widgets/login#checking-authorization
}
</script>

<template>
  <ButtonLogin 
    mode="callback" 
    size="large"
    bot-username="televuebot" 
    @callback="loginWithTelegram" 
  />
</template>
```

## Props

| Property       | Type    | Default           | Options                            |
|----------------|---------|-------------------|------------------------------------|
| mode           | string  | **Required prop** | `'callback'` or `'redirect'`       |
| bot-username   | string  | **Required prop** |                                    |
| size           | string  | `'medium'`        | `'small'`, `'medium'` or `'large'` |
| redirect-url   | string  | `''`              |                                    |
| request-access | string  | `'read'`          | `'read'` or `'write'`              |
| radius         | string  | `''`              |                                    |
| hide-user-pic  | boolean | `false`           |                                    |

> [Try an official configurator to learn more about widget options](https://core.telegram.org/widgets/login#widget-configuration)

## Setting up a bot

To use the login widget, you'll need a [Telegram bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

We strongly recommend that the **profile picture** of the bot you use for authorization corresponds with your website‘s 
logo, and that the bot’s **name** reflects that connection.

Users will see this message when they log into your website:

![Login message](https://core.telegram.org/file/811140220/1a02/WFoFUXRl_C8.20012/170c02fae7a0c638aa)

It is more likely that users will log in if your bot has a name and logo they expect to see.

Once you have chosen a bot, send the `/setdomain` command to [@botfather](https://t.me/botfather) to link your website's domain to the bot.
