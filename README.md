<div align="center">
  <h1>TeleVue</h1>
  <p>Vue 3 components for Telegram widgets</p>
  <a href="https://github.com/skhrvg/televue">
    <img src="https://raw.githubusercontent.com/skhrvg/televue/master/docs/public/logo.svg" height="256">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/televue">
    <img src="https://img.shields.io/npm/v/televue?style=for-the-badge&logo=npm&label=latest&color=CB3837">
  </a>
  <a href="http://github.com/skhrvg/televue">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/skhrvg/televue?color=181717&logo=github&style=for-the-badge">
  </a>
  <br>
  <img src="https://img.shields.io/npm/dependency-version/televue/peer/vue?style=for-the-badge&logo=vue.js&label=Vue&color=4FC08D&">
  <img src="https://img.shields.io/github/license/skhrvg/televue?style=for-the-badge">

  <br>
  <br>
  <a href="https://televue.skhr.vg">
    <img src="https://img.shields.io/badge/-interactive%20docs%20%26%20demos-black?style=for-the-badge">
  </a>
</div>

# What is it?
This package provides Vue 3 components for Telegram widgets.
- [Login button](https://televue.skhr.vg/widgets/login)
- [Share button](https://televue.skhr.vg/widgets/share)
  - [Custom share button](https://televue.skhr.vg/widgets/custom-share)
- [Post widget](https://televue.skhr.vg/widgets/post)
- [Discussion widget](https://televue.skhr.vg/widgets/discussion)
- [Passport widget [WIP]](https://televue.skhr.vg/widgets/passport)

**Check out [interactive demos and docs](https://televue.skhr.vg) for more info.**

## Installation

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
