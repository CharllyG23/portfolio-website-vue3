<template>
    <teleport to="body">
        <transition name="bounce">
            <div v-if="modelValue" class="toast">
                <div class="toast-content">
					<h1>E-mail copiado!</h1>
					<button type="button" @click="close">x</button>
				</div>
            </div>
        </transition>
    </teleport>
</template>
<script setup>
import { computed } from "vue"

const emit = defineEmits(['update:modelValue', false])

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})
const close = () => {
	visibility.value = false
}

const visibility = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	},
})
</script>
<style lang="scss" scoped>
@import './cToast-style.scss';
</style>