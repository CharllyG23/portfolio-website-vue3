<template>
    <svg 
        viewBox="0 0 58 58" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
        >
        <path d="M10.6973 49.3018L6.62646 3.625H51.3735L47.2971 49.2946L28.9728 54.375L10.6973 49.3018Z" fill="#1572B6"/>
        <path d="M29 50.4926L43.8081 46.3873L47.2917 7.36057H29V50.4926Z" fill="#33A9DC"/>
        <path d="M29 23.9087H36.4131L36.9242 18.1721H29V12.5697H43.0469L42.9128 14.0722L41.5371 29.5111H29V23.9087V23.9087Z" fill="white"/>
        <path d="M29.0345 38.4576L29.0091 38.4649L22.7705 36.7792L22.3717 32.3114H16.7476L17.5324 41.1075L29.0073 44.2939L29.0345 44.2866V38.4576V38.4576Z" fill="#EBEBEB"/>
        <path d="M35.9365 29.2737L35.2622 36.7756L29.0145 38.4612V44.2902L40.4985 41.1075L40.5837 40.1614L41.557 29.2737H35.9365V29.2737Z" fill="white"/>
        <path d="M29.0199 12.5697V18.1721H15.4878L15.3754 16.9124L15.1198 14.0722L14.9857 12.5697H29.0199V12.5697ZM29 23.9087V29.5111H22.8393L22.7269 28.2514L22.4732 25.4112L22.339 23.9087H29V23.9087Z" fill="#EBEBEB"/>
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