<template>
    <svg 
        viewBox="0 0 54 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <g clip-path="url(#clip0_52_162)">
        <path d="M39.6 14H48L27 45.971L6 14H22.065L27 21.4136L31.83 14H39.6Z" fill="#41B883"/>
        <path d="M6 14L27 42.7179L48 14H39.6L27 31.2308L14.295 14H6Z" fill="#41B883"/>
        <path d="M14.295 14L27 33.2753L39.6 14H31.83L27 21.4136L22.065 14H14.295Z" fill="#35495E"/>
        </g>
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>
        <defs>
        <clipPath id="clip0_52_162">
        <rect width="42" height="32" fill="white" transform="translate(6 14)"/>
        </clipPath>
        </defs>
    </svg>
</template>
<script>
export default {
    name: 'icon-vue',
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