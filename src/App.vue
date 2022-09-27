<template>
  <app-header></app-header>
    <hero />
    <about />
    <experiences />
    <works />
  <app-footer></app-footer>
</template>
<script setup>
import AppHeader from './components/AppHeader/AppHeader.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';
import Hero from './pages/Hero/Hero.vue';
import About from './pages/About/About.vue';
import Works from './pages/Works/Works.vue';
import Experiences from './pages/Experiences/Experiences.vue';
</script>
