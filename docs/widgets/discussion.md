---
title: Discussion Widget
editLink: true
---

<script setup>
  import WidgetDiscussion from '../../src/components/WidgetDiscussion.vue';
  import ComponentDemo from '../components/ComponentDemo.vue';
</script>

![Discussion Widget](https://core.telegram.org/img/Widget_Comments.svg)

# {{ $frontmatter.title }}

You can **embed discussions from any public channel** on your website. You only need a link to a post with comments to 
embed it together with all discussion.

If you have a website with articles and a telegram channel where you post links to these articles, you can use this 
widget to show discussions from that channel on your website. In this case you only need a link to the channel. 
Discussions will be available on your website as soon as you post a link into the channel. For this to work, you should 
add the `<link rel="canonical" href="%page_url%">` tag to the page header where `%page_url%` is the canonical URL 
of the current page.

> [Official Telegram documentation](https://core.telegram.org/widgets/discussion)

## Demo

<ComponentDemo>
  <WidgetDiscussion
    post="televuenews/3"
    :limit="20"
    colorful
  />
</ComponentDemo>


## Usage

```vue
<script setup>
import { WidgetDiscussion } from 'televue'
</script>

<template>
  <WidgetDiscussion
    post="televuenews/3"
    :limit="20"
    colorful
  />
</template>
```

## Props

| Property    | Type    | Default           | Options                                                      |
|-------------|---------|-------------------|--------------------------------------------------------------|
| post        | string  | **Required prop** |                                                              |
| height      | number  | `0`               | Pixels. Must be more than `300`, `0` to disable fixed height |
| limit       | number  | `5`               |                                                              |
| colorful    | boolean | `false`           |                                                              |
| dark-mode   | boolean | `false`           |                                                              |
| accent      | string  |                   | Color in hex format                                          |
| dark-accent | string  |                   | Color in hex format                                          |

>[Try an official configurator to learn more about widget options](https://core.telegram.org/widgets/discussion#configure-widget)

