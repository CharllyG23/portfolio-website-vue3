<template>
  <c-header></c-header>
    <c-hero />
    <c-about />
    <c-experiences />
    <c-works />
  <c-footer></c-footer>
</template>
<script setup>
import cHeader from './components/cHeader/cHeader.vue';
import cFooter from './components/cFooter/cFooter.vue';
import cHero from './pages/cHero/cHero.vue';
import cAbout from './pages/cAbout/cAbout.vue';
import cWorks from './pages/cWorks/cWorks.vue';
import cExperiences from './pages/cExperiences/cExperiences.vue';
</script>
