<template>
    <svg
        viewBox="0 0 54 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
     >
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>
        <path d="M36.2 32.5C34.315 32.5 32.72 33.7 32.14 35.5H26.05C26.05 34.45 25.76 33.55 25.325 32.8L35.62 21.85C36.055 21.85 36.49 22 36.925 22C38.955 22 40.55 20.35 40.55 18.25C40.55 16.15 38.955 14.5 36.925 14.5C34.895 14.5 33.3 16.15 33.3 18.25C33.3 18.7 33.445 19.3 33.59 19.75L23.44 30.55C22.57 29.8 21.41 29.5 20.25 29.5V23.2C21.99 22.6 23.15 20.95 23.15 19C23.15 16.45 21.265 14.5 18.8 14.5C16.335 14.5 14.45 16.45 14.45 19C14.45 20.95 15.61 22.6 17.35 23.2V30.25C15.61 31.3 14.45 33.25 14.45 35.35C14.45 38.65 17.06 41.35 20.25 41.35C22.425 41.35 24.31 40.15 25.18 38.35H31.995C32.575 40 34.17 41.35 36.055 41.35C38.375 41.35 40.405 39.4 40.405 36.85C40.55 34.45 38.52 32.5 36.2 32.5Z" fill="white"/>
    </svg>
</template>
<script>
export default {
    name: 'icon-rest-api',
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