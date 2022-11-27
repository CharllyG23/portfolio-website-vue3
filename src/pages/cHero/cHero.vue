<template>
  <section id="home" class="pages">
    <div class="hero-section">
      <transition name="fade" mode="out-in">
        <div v-if="display" class="letter">
          <h3>FRONT</h3>
          <h3>END</h3>
        </div>
      </transition>
      <div class="pages-wrapper">
        <div class="pages-wrapper-content">
          <transition  name="nested">
            <div v-if="display" class="content">
              <div class="content-header">
                <h1>Oiê</h1>
                <app-icons name="hands" :size="34" class="ml-5"></app-icons>
              </div>
              <div class="content-coffee">
                <h1 >Sou Charlly,</h1>
                <app-icons name="coffee" :size="80"></app-icons>
              </div>
                <h2 class="content-degraded"><span class="underline">Frontend Developer</span></h2>
              <div class="content-subTitle">
                <p>Sou uma Engenheira da Informatica, dedicada ao Desenvolvimento Frontend (ocasionalmente faço UI design) criando experiências digitais intuitivas e adaptáveis ​​para os usuários.</p>
              </div>
              <div class="content-download">
                <a :href="Cv" download>Download CV<app-icons name="download" :size="24" class="ml-2" /></a>
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
import Cv from '../../assets/file/CV-Charlly-Garcia.pdf';
import { onMounted, ref } from 'vue';

const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM_URL
const gitHubUrl = import.meta.env.VITE_APP_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN_URL

const display = ref(false)

onMounted(() =>{
  display.value = false
  setTimeout(() =>{
    display.value = true
  }, 500)
})
</script>
<style lang="scss" scoped>
  @import './cHero-style.scss';
</style>