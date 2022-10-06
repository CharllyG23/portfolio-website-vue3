<template>
    <svg 
        viewBox="0 0 74 33" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M0 0V28.1947H20.5466V32.8757H37V28.1947H74V0H0ZM20.5466 23.4713H16.4511V9.37531H12.3326V23.4713H4.11856V4.69426H20.5466V23.4713ZM32.8814 23.4713V28.1947H24.6674V4.69426H41.1209V23.4845H32.8814V23.4713ZM69.893 23.4713H65.786V9.37531H61.6674V23.4713H57.5489V9.37531H53.4534V23.4713H45.214V4.69426H69.893V23.4713ZM32.8814 9.38853H37V18.7903H32.8814V9.38853Z" fill="white"/>
    </svg>
</template>
<script>
export default {
    name: 'icon-npm',
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