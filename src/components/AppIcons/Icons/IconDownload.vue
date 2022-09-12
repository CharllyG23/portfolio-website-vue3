<template>
  <svg 
      viewBox="0 0 21 19" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      :width="width" 
      :height="height"
      :class="iconColor"
  >  
      <path d="M9.62499 3.95834C9.62499 3.74838 9.71717 3.54701 9.88127 3.39855C10.0454 3.25008 10.2679 3.16667 10.5 3.16667C10.732 3.16667 10.9546 3.25008 11.1187 3.39855C11.2828 3.54701 11.375 3.74838 11.375 3.95834V9.62509L14.2126 7.05771L15.4499 8.17713L10.5 12.6556L5.55011 8.17792L6.78736 7.05851L9.62499 9.62509V3.95834Z" fill="white"/>
      <path d="M3.5 11.0833H5.25V14.25H15.75V11.0833H17.5V14.25C17.5 14.6699 17.3156 15.0727 16.9874 15.3696C16.6592 15.6665 16.2141 15.8333 15.75 15.8333H5.25C4.78587 15.8333 4.34075 15.6665 4.01256 15.3696C3.68437 15.0727 3.5 14.6699 3.5 14.25V11.0833Z" fill="white"/>
  </svg>
</template>
<script>
export default {
    name: 'icon-download',
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