<template>
  <div class="flex h-full p-4 m-auto">
    <Editor :size="size" :voxelGrid="voxelGrid"></Editor>
    <Preview :size="size" :voxelGrid="voxelGrid" />
  </div>
</template>

<script setup>
import Preview from '@/components/Preview.vue'
import Editor from '@/components/Editor.vue'
import { ref, reactive } from 'vue'

const size = ref(16)
const voxelGrid = reactive([])
</script>

<style>
html,
body {
  @apply h-full;
}

body {
  background-color: #716f71;
}

#app {
  @apply h-full;
}
</style>
