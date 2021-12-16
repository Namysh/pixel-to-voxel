<template>
    <div class="flex flex-col w-2/5 space-y-4">
        <Toolbox v-model:color="color"></Toolbox>
        <Grid :color="color" :voxelGrid="voxelGrid" :size="size"></Grid>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Grid from '@/components/Grid.vue'
import Toolbox from '@/components/Toolbox.vue'

const props = defineProps({
    voxelGrid: Array,
    size: Number
})
const color = ref('#ff0000')
</script>

<style>
</style>
