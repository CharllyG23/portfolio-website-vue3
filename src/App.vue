<template>
  <app-header></app-header>
    <layouts />
  <app-footer></app-footer>
</template>
<script setup>
import AppHeader from './components/AppHeader/AppHeader.vue';
import Layouts from './layouts/Layouts.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';
</script>
<style lang="scss">
html, body {
  font-family: 'Charm', cursive;
  font-family: 'Ubuntu', sans-serif;
}
</style>
