---
title: Post Widget
editLink: true
---

<script setup>
  import WidgetPost from '../../src/components/WidgetPost.vue';
  import ComponentDemo from '../components/ComponentDemo.vue';
</script>

![Post Widget](https://core.telegram.org/img/Widget_Post.svg)

# {{ $frontmatter.title }}


You can **embed messages from public groups and channels** anywhere.

> [Official Telegram documentation](https://core.telegram.org/widgets/post)

## Demo

<ComponentDemo>
  <WidgetPost
    post="televuenews/3"
  />
</ComponentDemo>


## Usage

```vue
<script setup>
import { WidgetPost } from 'televue'
</script>

<template>
  <WidgetPost post="televuenews/3" />
</template>
```

## Props

| Property     | Type    | Default           | Options                        |
|--------------|---------|-------------------|--------------------------------|
| post         | string  | **Required prop** |                                |
| width        | string  | `'100%'`          |                                |
| author-photo | string  | `'auto'`          | `'auto'`, `'show'` or `'hide'` |
| dark-mode    | boolean | `false`           |                                |
| accent       | string  |                   | Color in hex format            |
| dark-accent  | string  |                   | Color in hex format            |

> [Try an official configurator to learn more about widget options](https://core.telegram.org/widgets/post#configure-widget)

