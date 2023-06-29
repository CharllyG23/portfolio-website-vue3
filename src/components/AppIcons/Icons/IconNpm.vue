<template>
    <svg 
        viewBox="0 0 77 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path d="M0 0H77V25.7118H38.5V30H21.3861V25.7118H0V0ZM4.27847 21.4294H12.8354V8.57059H17.1139V21.4294H21.3923V4.28824H4.27847V21.4294ZM25.6646 4.28824V25.7118H34.2215V21.4294H42.7785V4.28824H25.6646ZM34.2215 8.57647H38.5V17.1412H34.2215V8.57647ZM47.0569 4.28824V21.4294H55.6139V8.57059H59.8923V21.4294H64.1708V8.57059H68.4493V21.4294H72.7277V4.28824H47.0569Z" fill="#CB3837"/>
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