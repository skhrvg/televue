---
title: Installation
editLink: true
---

# {{ $frontmatter.title }}

::: tip Compatibility
To use TeleVue, you need to have this version of Vue or higher:
<br>
<br>
<img src="https://img.shields.io/npm/dependency-version/televue/peer/vue?style=for-the-badge&logo=vue.js&label=Vue&color=4FC08D&">
:::

Install with npm:

```shell
npm install televue
```

Install with yarn:

```shell
yarn add televue
```

Or if you just want to try it out with unpkg:

```html
<script src="https://unpkg.com/televue"></script>
```
## Basic usage

Just import TeleVue component in `<script setup>` of your SFCs and use it in `<template>`:

```vue
<script setup>
import { WidgetPost } from 'televue'
</script>

<template>
  <WidgetPost post="televuenews/3" />
</template>
```

Same thing with TeleVue composables:

```vue
<script setup>
import { useShareURL } from 'televue'
import { ref } from 'vue'

const href = ref(location.href)
const shareURL = useShareURL(href, 'Your comment')
</script>

<template>
  <a
    :href="shareURL"
    target="_blank"
    rel="noreferrer"
  >
    Share on Telegram
  </a>
</template>
```
