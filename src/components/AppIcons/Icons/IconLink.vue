<template>
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
        >
        <path d="M18.3782 4.9425L19.057 5.6217L11.8618 12.8169L11.183 12.1382L18.3782 4.9425Z" fill="white"/>
        <path d="M19.2 9.60005H18.24V5.76005H14.4V4.80005H19.2V9.60005ZM16.8 18.24H7.20001C6.38401 18.24 5.76001 17.616 5.76001 16.8V7.20005C5.76001 6.38405 6.38401 5.76005 7.20001 5.76005H12.48V6.72005H7.20001C6.91201 6.72005 6.72001 6.91205 6.72001 7.20005V16.8C6.72001 17.088 6.91201 17.28 7.20001 17.28H16.8C17.088 17.28 17.28 17.088 17.28 16.8V11.52H18.24V16.8C18.24 17.616 17.616 18.24 16.8 18.24Z" fill="white"/>
    </svg>
</template>
<script >
export default {
    name: 'icon-link',

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