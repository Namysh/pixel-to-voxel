import { ref, reactive } from 'vue'
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from 'three';

const shapes = reactive([])

const registerShape = (type, buildAttributes) => {
    const loader = new SVGLoader()
    const html = `<${type} ${Object.entries(buildAttributes(0, 0, 1)).map(entry => `${entry[0]}="${entry[1]}"`).join(' ')} />`
    const svgData = loader.parse(html);

    shapes.push({
        type,
        buildAttributes,
        buildGeometry: () =>
            new THREE.ExtrudeGeometry(svgData.paths[0].toShapes()[0], {
                depth: 1,
                bevelEnabled: false
            })

    })
}

registerShape('rect', (x, y, size) => ({
    x: x,
    y: y,
    width: size,
    height: size
}))

const defaultShape = {
    type: 'rect',
    buildAttributes: (x, y, size) => ({
        x: x,
        y: y,
        width: size,
        height: size
    }),
    buildGeometry: () => null
}

registerShape('circle', (x, y, size) => ({
    cx: x + size / 2,
    cy: y + size / 2,
    r: size / 2,
}))

registerShape('path', (x, y, size) => ({
    d: "M0 1C0 0.447715 0.447715 0 1 0V0V1H0V1Z",
    transform: `translate(${x},${y}) scale(${size})`
}))

registerShape('path', (x, y, size) => ({
    d: "M0.5 0L0.496774 0.00645187L1 1H0L0.5 0Z",
    transform: `translate(${x},${y}) scale(${size})`

}))


registerShape('path', (x, y, size) => ({
    d: 'M1 0V1H0L1 0Z',
    transform: `translate(${x},${y}) scale(${size})`

}))


registerShape('path', (x, y, size) => ({
    d: 'M0 0V1H1L0 0Z',
    transform: `translate(${x},${y}) scale(${size})`

}))

registerShape('path', (x, y, size) => ({
    d: 'M0 0V1H1V1C1 0.447715 0.552285 0 0 0V0Z',
    transform: `translate(${x},${y}) scale(${size})`

}))

registerShape('path', (x, y, size) => ({
    d: 'M1 0V1H0V1C0 0.447715 0.447715 0 1 0V0Z',
    transform: `translate(${x},${y}) scale(${size})`

}))

registerShape('path', (x, y, size) => ({
    d: 'M1 0.5V1H0V0.5H1Z',
    transform: `translate(${x},${y}) scale(${size})`
}))

registerShape('path', (x, y, size) => ({
    d: 'M1 0.5V0H0V0.5H1Z',
    transform: `translate(${x},${y}) scale(${size})`

}))

const selectedShape = ref(shapes[0])


const useShapes = () => {
    return {
        selectedShape,
        defaultShape,
        shapes
    }
}

export default useShapes