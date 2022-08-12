<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  post: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    default: 5,
  },
  height: {
    type: Number,
    default: 0,
  },
  colorful: {
    type: Boolean,
    default: false,
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  accent: {
    type: String,
    default: '',
  },
  darkAccent: {
    type: String,
    default: '',
  },
})

const widget = ref()

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?19'
  script.setAttribute('data-comments-limit', props.limit.toString())
  script.setAttribute('data-telegram-discussion', props.post.replace('https://t.me/', ''))
  if (props.height)
    script.setAttribute('data-height', props.height.toString())
  if (props.darkMode)
    script.setAttribute('data-dark', '1')
  if (props.colorful)
    script.setAttribute('data-colorful', '1')
  if (props.accent)
    script.setAttribute('data-color', props.accent)
  if (props.darkAccent)
    script.setAttribute('data-dark-color', props.darkAccent)
  widget.value.appendChild(script)
})
</script>

<template>
  <div ref="widget" />
</template>
