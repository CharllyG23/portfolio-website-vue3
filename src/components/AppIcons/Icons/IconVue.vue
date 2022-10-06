<template>
    <svg 
         viewBox="0 0 60 44" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
         :width="width"
        :height="height"
        :iconColor="iconColor"
         >
        <g clip-path="url(#clip0_52_111)">
        <path d="M48 0H60L30 43.9602L0 0H22.95L30 10.1937L36.9 0H48Z" fill="#41B883"/>
        <path d="M0 0L30 39.4872L60 0H48L30 23.6923L11.85 0H0Z" fill="#41B883"/>
        <path d="M11.85 0L30 26.5035L48 0H36.9L30 10.1937L22.95 0H11.85Z" fill="#35495E"/>
        </g>
        <defs>
        <clipPath id="clip0_52_111">
        <rect width="60" height="44" fill="white"/>
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