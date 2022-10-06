<template>
    <svg 
         viewBox="0 0 69 46" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
         :width="width"
        :height="height"
        :iconColor="iconColor"
         >
        <path d="M34.5 1.53334C25.7001 1.53334 20.1999 6.47418 18 16.3556C21.3 11.4147 25.1499 9.56195 29.55 10.7972C32.0603 11.5019 33.8547 13.5472 35.8409 15.8107C39.0764 19.4986 42.8209 23.7667 51 23.7667C59.7999 23.7667 65.3001 18.8258 67.5 8.94445C64.2 13.8853 60.3501 15.7381 55.95 14.5028C53.4397 13.7981 51.6453 11.7529 49.6591 9.48928C46.4236 5.80139 42.6791 1.53334 34.5 1.53334ZM18 23.7667C9.20009 23.7667 3.69991 28.7075 1.5 38.5889C4.8 33.6481 8.64991 31.7953 13.05 33.0306C15.5603 33.7352 17.3547 35.7805 19.3409 38.0441C22.5764 41.732 26.3209 46 34.5 46C43.2999 46 48.8001 41.0592 51 31.1778C47.7 36.1186 43.8501 37.9714 39.45 36.7361C36.9397 36.0315 35.1453 33.9862 33.1591 31.7226C29.9236 28.0347 26.1791 23.7667 18 23.7667Z" fill="url(#paint0_linear_52_109)"/>
        <defs>
        <linearGradient id="paint0_linear_52_109" x1="-0.33348" y1="15.7627" x2="59.7712" y2="46.6251" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2298BD"/> 
        <stop offset="1" stop-color="#0ED7B5"/>
        </linearGradient>
        </defs>
    </svg>
</template>
<script>
export default {
name: 'icon-tailwind',
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