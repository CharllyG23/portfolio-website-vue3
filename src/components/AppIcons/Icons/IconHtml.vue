<template>
    <svg 
        viewBox="0 0 54 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M15.0086 43.0013L12.3403 11.5H41.6597L38.9878 42.9963L26.9822 46.5L15.0086 43.0013Z" fill="#E44F26"/>
        <path d="M27 43.8225L36.7019 40.9912L38.9843 14.0762H27V43.8225Z" fill="#F1662A"/>
        <path d="M27 25.7587H22.1431L21.8083 21.8025H27V17.9387H17.7969L17.8848 18.9762L18.7861 29.6225H27V25.7587V25.7587ZM27 35.7925L26.9834 35.7975L22.896 34.6362L22.6348 31.555H18.9499L19.4641 37.62L26.9834 39.8175L27 39.8125V35.7925Z" fill="#EBEBEB"/>
        <path d="M26.9869 25.7587V29.6225H31.5066L31.0814 34.6337L26.9869 35.7962V39.8162L34.5121 37.62L34.5668 36.9675L35.4289 26.7962L35.5191 25.7587H26.9869V25.7587ZM26.9869 17.9387V21.8025H35.8528L35.9264 20.935L36.0939 18.9762L36.1818 17.9387H26.9869V17.9387Z" fill="white"/>
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>
    </svg>
</template>
<script>
export default {
    name: 'icon-html',
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