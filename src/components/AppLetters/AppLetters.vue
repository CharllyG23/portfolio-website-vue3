<template>
    <div class="letters"><p>{{ name }}</p></div>
</template>
<script setup>
defineProps({
	name: {
		type: String,
		required: true,
	},
})
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
