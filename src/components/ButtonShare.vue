<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: '',
  },
  hideText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<Size>,
    default: 'medium' as Size,
    validator: (prop: Size) => ['medium', 'large'].includes(prop),
  },
})

type Size = 'medium' | 'large'

const button = ref()

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?19'
  script.setAttribute('data-size', props.size)
  script.setAttribute('data-telegram-share-url', props.url)
  script.setAttribute('data-comment', props.comment)
  if (props.hideText)
    script.setAttribute('data-text', 'notext')
  button.value.appendChild(script)
})
</script>

<template>
  <div ref="button" />
</template>
