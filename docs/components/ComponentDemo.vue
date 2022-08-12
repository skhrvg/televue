<script setup>
import { ref } from 'vue'
defineProps({
  output: {
    type: Boolean,
    default: false,
  },
  outputPlaceholder: {
    type: String,
    default: '',
  },
})

const stdout = ref('')

const onOutput = data => stdout.value = data
</script>

<template>
  <div class="flex flex-col divide-y rounded-lg bg-white overflow-hidden w-full border text-black">
    <div class="p-4">
      <slot name="default" :on-output="onOutput" />
    </div>
    <div v-if="output" class="p-4 whitespace-pre-wrap text-xs font-mono">
      {{ stdout || outputPlaceholder }}
    </div>
  </div>
</template>

<style scoped>

</style>
