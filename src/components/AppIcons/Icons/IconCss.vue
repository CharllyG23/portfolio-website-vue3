<template>
    <svg 
        fill="none" 
        viewBox="0 0 54 56"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M15.0086 42.0013L12.3415 10.5H41.6585L38.9878 41.9963L26.9822 45.5L15.0086 42.0013Z" fill="#1572B6"/>
        <path d="M27 42.8225L36.7019 39.9912L38.9842 13.0762H27V42.8225Z" fill="#33A9DC"/>
        <path d="M27 24.4888H31.8569L32.1917 20.5325H27V16.6688H36.2031L36.1153 17.705L35.2139 28.3525H27V24.4888V24.4888Z" fill="white"/>
        <path d="M27.0225 34.5225L27.0059 34.5275L22.9185 33.365L22.6573 30.2838H18.9725L19.4867 36.35L27.0047 38.5475L27.0225 38.5425V34.5225V34.5225Z" fill="#EBEBEB"/>
        <path d="M31.5446 28.1887L31.1028 33.3625L27.0095 34.525V38.545L34.5335 36.35L34.5893 35.6975L35.227 28.1887H31.5446V28.1887Z" fill="white"/>
        <path d="M27.013 16.6688V20.5325H18.1472L18.0735 19.6638L17.9061 17.705L17.8182 16.6688H27.013V16.6688ZM27 24.4888V28.3525H22.9637L22.89 27.4838L22.7238 25.525L22.6359 24.4888H27V24.4888Z" fill="#EBEBEB"/>
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>
    </svg>
</template>
<script>
export default {
name: 'icon-css',
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