<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'
import sdk from './telegram-passport.cjs?url'
import type { AuthButtonOptions, AuthParameters } from './types'

const props = defineProps({
  authParameters: {
    type: Object as PropType<AuthParameters>,
    required: true,
    validator(value: AuthParameters | Object) {
      const required_fields = ['bot_id', 'scope', 'public_key', 'nonce']
      const isValid = required_fields.every(key => Object.keys(value).includes(key))
      if (!isValid)
        console.error(`You must provide required fields: ${required_fields}`)
      return isValid
    },
  },
  authButtonOptions: {
    type: Object as PropType<AuthButtonOptions>,
    default: () => ({} as AuthButtonOptions),
  },
})

const button = ref<HTMLElement | undefined>()

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = sdk
  script.onload = () => {
    (window as any).Telegram.Passport.createAuthButton(
      'passportButton',
      { ...props.authParameters },
      { ...props.authButtonOptions },
    )
  }
  if (button.value)
    button.value.appendChild(script)
})
</script>

<template>
  <div id="passportButton" ref="button" />
</template>

<style scoped>

</style>
