<template>
    <svg 
        viewBox="0 0 54 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M8 20V33.7218H18.5509V36H27V33.7218H46V20H8ZM18.5509 31.4231H16.4479V24.5628H14.3329V31.4231H10.1149V22.2846H18.5509V31.4231ZM24.8851 31.4231V33.7218H20.6671V22.2846H29.1161V31.4295H24.8851V31.4231ZM43.891 31.4231H41.782V24.5628H39.6671V31.4231H37.5521V24.5628H35.4491V31.4231H31.218V22.2846H43.891V31.4231ZM24.8851 24.5692H27V29.1449H24.8851V24.5692Z" fill="white"/>
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>        
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