<template>
  <svg class="Icon" :style="style" v-bind="params" v-html="content" ></svg>
</template>

<script setup>
  import { reactive, computed, ref, watch } from 'vue'

  const props = defineProps({
    name: String,
    fill: String,
  });

  const params = reactive({
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`
  })

  let content = ref('')

  watch(() => props.name, (value) => {
    import(`../assets/icons/${value}.js`)
      .then(res => {
        params.width = res.default.width
        params.height = res.default.height
        params.viewBox = `0 0 ${res.default.width} ${res.default.height}`
        content.value = res.default.content
      })
  }, { immediate: true })

  let style = computed(() => props.fill ? `--fill-icon: ${props.fill}` : '');
</script>

<style scoped>
.Icon {
  fill: var(--fill-icon, currentColor);
}
</style>
