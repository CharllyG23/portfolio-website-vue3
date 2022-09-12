<template>
  <component
    v-if="icon" 
    :is="icon"
    v-bind="{ width, height, iconColor }"
  />
</template>
<script setup>
import { ref, watch } from 'vue';
import * as iconsComponents from './Icons'

const icons = Object.values(iconsComponents)
    .reduce((acc, curr) => ({
        ...acc,
        [curr.name]: curr
    }), {})

  const props = defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    },
    size: {
        type: [String, Number],
        default: 'md'
    },
})
  
  const width = ref(0), height = ref(0)
  const iconColor = ref(props.color ? `text-${props.color}` : '')

  watch(props, () => {
      iconColor.value = props.color ? `text-${props.color}` : ''
  })

  const icon = icons[`icon-${props.name}`]

  if (typeof props.size === "number") {
    width.value = +props.size
    height.value = +props.size
  } else {
    switch (props.size) {
      case 'xxs':
        width.value = 16
        height.value = 16
        break

      case 'xs':
        width.value = 20
        height.value = 20
        break

      case 'sm':
        width.value = 24
        height.value = 24
        break

      case 'lg':
        width.value = 38
        height.value = 38
        break

      case 'xl':
        width.value = 46
        height.value = 46
        break

      default:
        width.value = 32
        height.value = 32
        break
    }
  }
         
</script>
<style scoped></style>
