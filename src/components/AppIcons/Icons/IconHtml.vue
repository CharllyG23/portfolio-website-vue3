<template>
    <svg 
        viewBox="0 0 58 58" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M10.6973 49.3018L6.62463 3.625H51.3753L47.2971 49.2946L28.9728 54.375L10.6973 49.3018Z" fill="#E44F26"/>
        <path d="M29 50.4926L43.8081 46.3873L47.2917 7.36057H29V50.4926Z" fill="#F1662A"/>
        <path d="M29 24.3002H21.5869L21.0758 18.5636H29V12.9612H14.9531L15.0873 14.4656L16.4629 29.9026H29V24.3002ZM29 38.8491L28.9746 38.8564L22.736 37.1726L22.3373 32.7047H16.7131L17.4979 41.499L28.9746 44.6854L29 44.6781V38.8491Z" fill="#EBEBEB"/>
        <path d="M28.9801 24.3002V29.9026H35.8785L35.2296 37.1689L28.9801 38.8546V44.6836L40.4659 41.499L40.5493 40.5529L41.8652 25.8046L42.0029 24.3002H28.9801ZM28.9801 12.9612V18.5636H42.5122L42.6246 17.3057L42.8802 14.4656L43.0143 12.9612H28.9801Z" fill="white"/>
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