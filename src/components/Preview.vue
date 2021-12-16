<template>
    <div ref="parent" class="flex items-end justify-end w-3/5">
        <canvas class ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import useShapes from '@/composables/useShapes.js'

const canvas = ref()
const parent = ref()

const props = defineProps({
    color: String,
    voxelGrid: Array,
    size: Number
})

onMounted(() => {
    const scene = new THREE.Scene();

    scene.background = new THREE.Color('#716f71')

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 21
    scene.add(camera)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas.value,
        antialias: true
    });

    let min = Math.min(parent.value.clientWidth, parent.value.clientHeight)

    renderer.setSize(min, min);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    window.addEventListener('resize', () => {
        const min = Math.min(parent.value.clientWidth, parent.value.clientHeight)
        renderer.setSize(min, min)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const grid = new THREE.Object3D()

    const { defaultShape } = useShapes()

    for (let y = 0; y < props.size; y++) {
        props.voxelGrid.push([])
        for (let x = 0; x < props.size; x++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshStandardMaterial({ opacity: 0, transparent: true });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = x
            cube.position.y = y
            grid.add(cube)
            props.voxelGrid[y].push({ mesh: cube, shape: defaultShape })
        }
    }

    grid.rotation.z = Math.PI
    grid.rotation.y = Math.PI
    grid.position.x = - props.size / 2
    grid.position.y = props.size / 2
    scene.add(grid);

    {
        let geometry = new THREE.BoxGeometry(props.size, props.size, props.size);
        let edges = new THREE.EdgesGeometry(geometry);
        let line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial());
        scene.add(line);
    }

    const controls = new OrbitControls(camera, canvas.value)
    controls.enableDamping = true
    controls.autoRotate = true
    controls.enablePan = false
    controls.enableZoom = false


    const tick = () => {
        controls.update()
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick)
    }

    tick()
})

</script>

<style>
</style>
