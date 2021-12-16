<template>
  <div class="space-y-4 overflow-hidden rounded-md shadow-md Editor">
    <svg
      @contextmenu.prevent
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseLeave"
      width="100%"
      height="100%"
      :viewBox="`0 0 ${size * ratio} ${size * ratio}`"
      style="background-color: #383838"
    >
      <template v-for="(row, y) in voxelGrid" :key="y">
        <template v-for="(voxel, x) in row" :key="x">
          <component
            :is="voxel.shape.type"
            v-bind="voxel.shape.buildAttributes(x * ratio, y * ratio + 1, ratio - 1) ?? {}"
            class="cell"
            @mouseover="handleMouseOver(voxel)"
            :fill="voxel.mesh.material.transparent ? 'transparent' : voxel.mesh.material.color.getStyle()"
          />
        </template>
      </template>

      <defs>
        <!-- Grid pattern -->
        <pattern id="grid" :width="ratio" :height="ratio" patternUnits="userSpaceOnUse">
          <path stroke="#2d2d2d" :d="`M 0 0 H ${ratio} V ${ratio}`" stroke-width="2" fill="none" />
        </pattern>
      </defs>

      <!-- Overlay with the grid attern -->
      <rect
        class="pointer-events-none"
        :width="size * ratio"
        :height="size * ratio"
        fill="url(#grid)"
      />

      <!-- Missing left and bottom border -->
      <path
        stroke="#2d2d2d"
        :d="`M 0 0 V ${size * ratio} H ${size * ratio}`"
        stroke-width="2"
        fill="none"
      />

      <!-- Center axes -->
      <path
        :d="
          `M ${(size * ratio) / 2 - 0.5} 0 V ${size * ratio} M 0 ${(size * ratio) /
          2 + 0.5} H ${size * ratio}`
        "
        stroke-width="1"
        :stroke-dasharray="size % 2 === 0 ? '0' : '7, 2'"
        stroke="#232323"
        fill="none"
      />
    </svg>
  </div>
</template>

<script setup>
import useShapes from '@/composables/useShapes.js'


const {  selectedShape} = useShapes()

const props = defineProps({
  voxelGrid: Array,
  size: Number,
  color: String
})

let ratio = 50

let rightClick = false
let mouseDown = false
let hoveredVoxel = undefined

const add = () => {
  if (hoveredVoxel === undefined) return
  hoveredVoxel.mesh.material.color.set(props.color)
  hoveredVoxel.mesh.material.opacity = 1
  hoveredVoxel.mesh.material.transparent = false

  if (hoveredVoxel.shape === selectedShape.value) {
    hoveredVoxel.mesh.scale.z = hoveredVoxel.mesh.scale.z + 1
    hoveredVoxel.mesh.position.z = hoveredVoxel.mesh.position.z - 0.5

  } else {
    hoveredVoxel.shape = selectedShape.value
    hoveredVoxel.mesh.geometry = selectedShape.value.buildGeometry()
  }
}

const remove = () => {
  if (hoveredVoxel === undefined) return

  hoveredVoxel.mesh.material.opacity = 0
  hoveredVoxel.mesh.material.transparent = true
  hoveredVoxel.mesh.scale.z = 0
  hoveredVoxel.mesh.position.z = 1 / 2
}

const handleMouseOver = (voxel) => {
  hoveredVoxel = voxel

  if (!mouseDown) return

  if (rightClick)
    remove()
  else {
    add()
  }
}

const handleMouseUp = () => {

  rightClick = false
  mouseDown = false
}



const handleMouseDown = (event) => {
  mouseDown = true

  if (event.button === 0) {
    add()
  }
  else if (event.button === 2) {
    rightClick = true
    remove()
  }
}

const handleMouseLeave = () => {
  hoveredVoxel = undefined
  rightClick = false
  mouseDown = false
}


</script>

<style>
</style>
