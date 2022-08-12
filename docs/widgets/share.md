---
title: Sharing Button
editLink: true
---

<script setup>
  import ButtonShare from '../../src/components/ButtonShare.vue';
  import ComponentDemo from '../components/ComponentDemo.vue';
  
  const pageUrl = 'https://televue.skhr.vg/widgets/share';
  const pageTitle = 'Telegram Sharing Button Widget for Vue 3';
</script>

![Sharing button](https://core.telegram.org/img/Widget_Share.svg)

# {{ $frontmatter.title }}

A Telegram Sharing Button is an easy way to let users forward content from your website or app to their **friends**, 
**Channels** or **Saved Messages** on Telegram.

When a user presses the button, Telegram asks them to choose a chat, group or channel where your link will be shared. 
You can also add some text that describes the link – the user will be able to edit it before sending the message.

> [Official Telegram documentation](https://core.telegram.org/widgets/share)

## Demo

<ComponentDemo>
  <ButtonShare
    :url="pageUrl"
    size="large"
    :comment="pageTitle"
  />
</ComponentDemo>


## Usage

```vue
<script setup>
import { ButtonShare } from 'televue'

const pageUrl = location.href
</script>

<template>
  <ButtonShare
    :url="pageUrl"
    size="large"
    comment="Check this out!"
  />
</template>
```

## Props

| Property       | Type    | Default           | Options                 |
|----------------|---------|-------------------|-------------------------|
| url            | string  | **Required prop** |                         |
| size           | string  | `'medium'`        | `'medium'` or `'large'` |
| comment        | string  | `''`              |                         |
| hide-text      | boolean | `false`           |                         |

> [Try an official configurator to learn more about widget options](https://core.telegram.org/widgets/share#widget-constructor)
