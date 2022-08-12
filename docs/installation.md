---
title: Installation
editLink: true
---

# {{ $frontmatter.title }}

::: danger Under development
This package is not yet ready for production use.
:::

Install via npm:

```shell
npm install televue
```

## Basic usage

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
