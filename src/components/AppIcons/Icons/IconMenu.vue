<template>
    <svg 
        viewBox="0 0 18 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M3.09375 13.7812H14.9062M3.09375 9.28125H14.9062M3.09375 4.78125H14.9062" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
<script>
export default {
    name: 'icon-menu',
    props: {
        width: {
            type: Number,
            required: true
        },

        height: {
            type: Number,
            required: true
        },

        iconColor: {
            type: String,
            required: true
        }
    }
}
</script>