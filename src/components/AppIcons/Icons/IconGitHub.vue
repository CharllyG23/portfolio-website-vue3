<template>
    <svg 
        viewBox="0 0 20 20"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        :width="width" 
        :height="height"
        :class="iconColor"
        >
        <path d="M7.1875 17.8125C7.1875 17.8125 6.5625 15.3125 7.8125 14.0625C7.8125 14.0625 5.3125 14.0625 3.4375 12.1875C1.5625 10.3125 2.1875 6.5625 3.4375 5.3125C2.8125 3.4375 4.0625 2.1875 4.0625 2.1875C4.0625 2.1875 5.9375 2.1875 7.1875 3.4375C8.4375 2.8125 11.5625 2.8125 12.8125 3.4375C14.0625 2.1875 15.9375 2.1875 15.9375 2.1875C15.9375 2.1875 17.1875 3.4375 16.5625 5.3125C17.8125 6.5625 18.4375 10.3125 16.5625 12.1875C14.6875 14.0625 12.1875 14.0625 12.1875 14.0625C13.4375 15.3125 12.8125 17.8125 12.8125 17.8125M6.5625 17.1875C4.6875 17.8125 2.8125 16.5625 2.1875 15.9375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
<script>
export default {
name: 'icon-git-hub',
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