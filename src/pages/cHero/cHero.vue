<template>
  <section id="home" class="pages">
    <div class="hero-section">
      <transition name="fade" mode="out-in">
        <div v-if="display" class="letter">
          <h3>ENGINEER &</h3>
          <h3>DEVELOPER</h3>
        </div>
      </transition>
      <div class="pages-wrapper">
        <div class="pages-wrapper-content">
          <transition  name="nested">
            <div v-if="display" class="content">
              <div class="content-header">
                <h1 class="pb-2">Oiê</h1>
                <app-icons name="hands" :size="40" class="ml-5 hand"></app-icons>
              </div>
                <h1 class="pb-3">Sou Charlly,</h1>
                <h2 class="content-degraded"><span class="underline">{{ currentText }}</span></h2>
              <div class="content-subTitle">
                <p>Engenheira em Informática, dedicada ao Desenvolvimento Front-end, com mais de <strong class="text-lg">3+</strong> anos de experiência.</p>
              </div>
            </div>
          </transition>
        </div> 
      </div>
    </div>
    <transition name="slide-fade" >
      <div v-if="display" class="icons">
        <ul>
          <li>
            <a :href="gitHubUrl" target="_blank"><app-icons name="git-hub" :size="28"></app-icons></a>
          </li>
          <li>
            <a :href="linkedinUrl" target="_blank"><app-icons name="linkedin" :size="28"></app-icons></a>
          </li>
          <li>
            <a :href="instagramUrl" target="_blank"><app-icons name="instagram" :size="28"></app-icons></a>
          </li>
        </ul>   
      </div>
    </transition>  
  </section>
</template>
<script setup>
import AppIcons from '../../components/AppIcons/AppIcons.vue';
import { onMounted, ref } from 'vue';

const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM_URL
const gitHubUrl = import.meta.env.VITE_APP_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN_URL

const display = ref(false)
const currentText = ref('FRONTEND DEVELOPER')

onMounted(() =>{
  display.value = false
  setTimeout(() =>{
    display.value = true
  }, 300)
})
</script>
<style lang="scss" scoped>
  @import './cHero-style.scss';
</style>