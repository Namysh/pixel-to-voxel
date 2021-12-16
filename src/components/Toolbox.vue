<template>
    <div class="flex flex-col overflow-hidden rounded-md" style="background-color: #383838;">
        <div class="relative flex">
            <button
                class="p-2 cursor-pointer"
                :class="selectedTool === 'shape' ? 'text-white ' : ' text-gray-400'"
                @click="selectedTool = 'shape'"
            >
                <Icon class="w-5 h-5" name="shapes"></Icon>
            </button>
            <button
                class="p-2 text-white cursor-pointer"
                :class="selectedTool === 'color' ? 'text-white ' : ' text-gray-400'"
                @click="selectedTool = 'color'"
            >
                <Icon class="w-5 h-5" name="palette"></Icon>
            </button>
        </div>

        <div
            class="flex p-4 space-x-4"
            v-if="selectedTool === 'shape'"
            style="background-color: #383838;"
        >
            <svg
                @click="selectedShape = shape"
                class="w-4 h-4 cursor-pointer"
                viewBox="0 0 1 1"
                v-for="(shape, index) in shapes"
                :fill="selectedShape == shape ? 'white' : 'white text-opacity-50'"
                :key="index"
            >
                <component :is="shape.type" v-bind="shape.buildAttributes(0, 0, 1)" />
            </svg>
        </div>
        <div
            class="flex p-4 space-x-4"
            v-if="selectedTool === 'color'"
            style="background-color: #383838;"
        >
            <div
                v-for="color in colors"
                @click="emit('update:color', color)"
                :key="color"
                class="w-4 h-4 rounded-full cursor-pointer"
                :style="`background-color: ${color}`"
            ></div>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import { ref } from 'vue'

import useShapes from '@/composables/useShapes.js'

const emit = defineEmits(['update:color'])

const selectedTool = ref('shape')

const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f', '#fff', '#000']

const { shapes, selectedShape } = useShapes()

</script>

<style>
</style>
