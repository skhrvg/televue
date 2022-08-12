<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  mode: {
    type: String as PropType<Mode>,
    required: true,
    validator: (prop: Mode) => ['callback', 'redirect'].includes(prop),
  },
  botUsername: {
    type: String,
    required: true,
    validator: (prop: String) => prop.endsWith('bot') || prop.endsWith('Bot'),
  },
  redirectUrl: {
    type: String,
    default: '',
  },
  requestAccess: {
    type: String as PropType<Access>,
    default: 'read' as Access,
    validator: (prop: Access) => ['read', 'write'].includes(prop),
  },
  size: {
    type: String as PropType<Size>,
    default: 'medium' as Size,
    validator: (prop: Size) => ['small', 'medium', 'large'].includes(prop),
  },
  hideUserPic: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: String,
  },
})

const emit = defineEmits(['callback'])

type Mode = 'callback' | 'redirect'
type Access = 'read' | 'write'
type Size = 'small' | 'medium' | 'large'

const button = ref()

const onTelegramAuth = (user: any) => {
  emit('callback', user)
}

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?3'
  script.setAttribute('data-size', props.size)
  script.setAttribute('data-userpic', (!props.hideUserPic).toString())
  script.setAttribute('data-telegram-login', props.botUsername)
  script.setAttribute('data-request-access', props.requestAccess)
  if (props.radius)
    script.setAttribute('data-radius', props.radius)
  if (props.mode === ('callback' as Mode)) {
    (window as any).onTelegramAuth = onTelegramAuth
    script.setAttribute('data-onauth', 'window.onTelegramAuth(user)')
  }
  else {
    script.setAttribute('data-auth-url', props.redirectUrl)
  }
  button.value.appendChild(script)
})
</script>

<template>
  <div ref="button" />
</template>

<style scoped>

</style>
