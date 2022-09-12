<template>
    <div class="layout">
        <Hero />
        <About />
        <Experiences />
        <Works />
    </div>
</template>
<script setup>
import Hero from '../pages/Hero/Hero.vue';
import About from '../pages/About/About.vue';
import Experiences from '../pages/Experiences/Experiences.vue';
import Works from '../pages/Works/Works.vue';
</script>
<style lang="scss">
@import './style.scss';
</style>
