<template>
    <svg 
        viewBox="0 0 54 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
     >
        <g clip-path="url(#clip0_52_170)">
        <path d="M20.4828 48.8727C24.0803 48.8727 27 45.7557 27 41.9152V34.9576H20.4828C16.8852 34.9576 13.9655 38.0746 13.9655 41.9152C13.9655 45.7557 16.8852 48.8727 20.4828 48.8727Z" fill="#0ACF83"/>
        <path d="M13.9655 28C13.9655 24.1594 16.8852 21.0424 20.4828 21.0424H27V34.9576H20.4828C16.8852 34.9576 13.9655 31.8406 13.9655 28Z" fill="#A259FF"/>
        <path d="M13.9655 14.0848C13.9655 10.2443 16.8852 7.12726 20.4828 7.12726H27V21.0424H20.4828C16.8852 21.0424 13.9655 17.9254 13.9655 14.0848Z" fill="#F24E1E"/>
        <path d="M27 7.12726H33.5172C37.1148 7.12726 40.0345 10.2443 40.0345 14.0848C40.0345 17.9254 37.1148 21.0424 33.5172 21.0424H27V7.12726Z" fill="#FF7262"/>
        <path d="M40.0345 28C40.0345 31.8406 37.1148 34.9576 33.5172 34.9576C29.9197 34.9576 27 31.8406 27 28C27 24.1594 29.9197 21.0424 33.5172 21.0424C37.1148 21.0424 40.0345 24.1594 40.0345 28Z" fill="#1ABCFE"/>
        </g>
        <rect x="-0.5" y="0.5" width="53" height="55" rx="3.5" transform="matrix(-1 0 0 1 53 0)" stroke="#6970BE" stroke-opacity="0.3"/>
        <defs>
        <clipPath id="clip0_52_170">
        <rect width="26.069" height="41.7455" fill="white" transform="translate(13.9655 7.12726)"/>
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