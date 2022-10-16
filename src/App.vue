<template>
  <c-header></c-header>
    <hero />
    <about />
    <experiences />
    <works />
  <c-footer></c-footer>
</template>
<script setup>
import cHeader from './components/cHeader/cHeader.vue';
import cFooter from './components/cFooter/cFooter.vue';
import Hero from './pages/Hero/Hero.vue';
import About from './pages/About/About.vue';
import Works from './pages/Works/Works.vue';
import Experiences from './pages/Experiences/Experiences.vue';
</script>
