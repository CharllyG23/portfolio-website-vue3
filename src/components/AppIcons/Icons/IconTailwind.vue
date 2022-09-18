<template>
    <svg 
        viewBox="0 0 54 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M27 14C21.1334 14 17.4666 17.2223 16 23.6667C18.2 20.4444 20.7666 19.236 23.7 20.0417C25.3735 20.5012 26.5698 21.8351 27.8939 23.3113C30.051 25.7165 32.5473 28.5 38 28.5C43.8666 28.5 47.5334 25.2777 49 18.8333C46.8 22.0556 44.2334 23.264 41.3 22.4583C39.6265 21.9988 38.4302 20.6649 37.1061 19.1887C34.949 16.7835 32.4527 14 27 14ZM16 28.5C10.1334 28.5 6.46661 31.7223 5 38.1667C7.2 34.9444 9.76661 33.736 12.7 34.5417C14.3735 35.0012 15.5698 36.3351 16.8939 37.8113C19.051 40.2165 21.5473 43 27 43C32.8666 43 36.5334 39.7777 38 33.3333C35.8 36.5556 33.2334 37.764 30.3 36.9583C28.6265 36.4988 27.4302 35.1649 26.1061 33.6887C23.949 31.2835 21.4527 28.5 16 28.5Z" fill="url(#paint0_linear_52_163)"/>
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>
        <defs>
        <linearGradient id="paint0_linear_52_163" x1="3.77768" y1="23.28" x2="43.4752" y2="44.1168" gradientUnits="userSpaceOnUse">
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