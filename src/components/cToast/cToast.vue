<template>
    <teleport to="body">
        <transition name="bounce">
            <div v-if="modelValue" class="toast">
				<h1>E-mail copiado!</h1>
            </div>
        </transition>
    </teleport>
</template>
<script setup>
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

</script>
<style lang="scss" scoped>
@import './cToast-style.scss';
</style>