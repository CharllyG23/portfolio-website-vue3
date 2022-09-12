<template>
    <p class="letters">{{ name }}</p>
</template>
<script setup>
defineProps({
	name: {
		type: String,
		required: true,
	},
})
</script>
<style scoped>
@import './style.scss';
</style>
