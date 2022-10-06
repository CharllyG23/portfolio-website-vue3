<template>
    <svg
        viewBox="0 0 39 49"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
        >
        <g clip-path="url(#clip0_52_124)">
        <path d="M9.75 49C15.132 49 19.5 45.3414 19.5 40.8334V32.6667H9.75C4.368 32.6667 0 36.3254 0 40.8334C0 45.3414 4.368 49 9.75 49Z" fill="#0ACF83"/>
        <path d="M0 24.5C0 19.992 4.368 16.3333 9.75 16.3333H19.5V32.6667H9.75C4.368 32.6667 0 29.008 0 24.5Z" fill="#A259FF"/>
        <path d="M0 8.16667C0 3.65867 4.368 0 9.75 0H19.5V16.3333H9.75C4.368 16.3333 0 12.6747 0 8.16667Z" fill="#F24E1E"/>
        <path d="M19.5 0H29.25C34.632 0 39 3.65867 39 8.16667C39 12.6747 34.632 16.3333 29.25 16.3333H19.5V0Z" fill="#FF7262"/>
        <path d="M39 24.5C39 29.008 34.632 32.6667 29.25 32.6667C23.868 32.6667 19.5 29.008 19.5 24.5C19.5 19.992 23.868 16.3333 29.25 16.3333C34.632 16.3333 39 19.992 39 24.5Z" fill="#1ABCFE"/>
        </g>
        <defs>
        <clipPath id="clip0_52_124">
        <rect width="39" height="49" fill="white"/>
        </clipPath>
        </defs>
    </svg>
</template>
<script>
export default {
    name: 'icon-figma',
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