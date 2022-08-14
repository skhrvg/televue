<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  post: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  authorPhoto: {
    type: String as PropType<AuthorPhoto>,
    default: 'auto' as AuthorPhoto,
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

type AuthorPhoto = 'auto' | 'show' | 'hide'

const widget = ref<HTMLElement | undefined>()

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?19'
  script.setAttribute('data-width', props.width)
  script.setAttribute('data-telegram-post', props.post.replace('https://t.me/', ''))
  switch (props.authorPhoto) {
    case 'show':
      script.setAttribute('data-userpic', 'true')
      break
    case 'hide':
      script.setAttribute('data-userpic', 'false')
      break
  }
  if (props.darkMode)
    script.setAttribute('data-dark', '1')
  if (props.accent)
    script.setAttribute('data-color', props.accent)
  if (props.darkAccent)
    script.setAttribute('data-dark-color', props.darkAccent)
  if (widget.value)
    widget.value.appendChild(script)
})
</script>

<template>
  <div ref="widget" />
</template>
