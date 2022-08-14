---
title: Custom Sharing Button
editLink: true
---

<script setup>
import CustomShareButton from '../components/CustomShareButton.vue';
import { TelegramIcon, TelegramRoundIcon } from '../../src';
</script>

![Sharing button](https://core.telegram.org/img/Widget_Share.svg)

# {{ $frontmatter.title }}

Feel free to create your own custom UI for the button. The only thing you need to make it work is to point the user to 
this URL on click:

```plaintext
https://t.me/share/url?url={url}&text={text}
```

where `{url}` is the URL the user will be sharing and `{text}` is an optional description that will be included with 
the link. Both values should be URL-encoded.

TeleVue provides Telegram icons as components and composable function for creating sharing URL for your custom button.

## Usage

Here's an example of using this tools and [Tailwind CSS](https://tailwindcss.com) to create custom sharing button 
component:

```vue
<script setup>
import { ref } from 'vue'
import { TelegramIcon, useShareURL } from 'televue'

const props = defineProps({
  shareText: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
})

const href = ref(location.href)
const shareURL = useShareURL(href, props.shareText)
</script>

<template>
  <a
    :href="shareURL"
    target="_blank"
    rel="noreferrer"
  >
    <TelegramIcon class="w-5" />
    <span
      v-if="props.buttonText"
      class="ml-3"
    >
      {{ props.buttonText }}
    </span>
  </a>
</template>

<style scoped>
a {
  @apply bg-sky-500 text-white flex whitespace-nowrap font-semibold
  items-center px-5 py-3 justify-center rounded-full w-min border
  border-sky-400 shadow-md hover:text-white hover:bg-sky-600
  duration-200 transition-colors hover:border-sky-500;
}
</style>
```

And this is how this custom sharing button component looks like:

<ClientOnly>
  <CustomShareButton 
    button-text="Share on Telegram" 
    share-text="Check out this cool custom sharing button made with Vue, Tailwind and TeleVue!" 
  />
</ClientOnly>

## useShareURL

With this function you can create a share URL for your custom button:

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

### Type Declarations

```typescript
export function useShareURL(
  url: Ref<string> | string,
  text?: Ref<string> | string,
): ComputedRef<string>

export declare type UseShareURL = ReturnType<typeof useShareURL>
```

## Icons

TeleVue provides two Telegram icons, which you can use in your custom button:

<div class="text-sky-500 flex items-center space-x-5">
  <TelegramIcon class="w-8" />
  <TelegramRoundIcon class="w-8" />
</div>

```vue
<script setup>
import { TelegramIcon, TelegramRoundIcon } from 'televue'
</script>

<template>
  <div class="text-sky-500 flex items-center space-x-5">
    <TelegramIcon class="w-8" />
    <TelegramRoundIcon class="w-8" />
  </div>
</template>
```
