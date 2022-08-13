<script setup>
import { ref } from 'vue'
import { TelegramIcon, useShareURL } from '../../src'

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
