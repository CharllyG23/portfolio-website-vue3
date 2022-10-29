<template>
  <section id="home" class="pages">
    <div class="pages-wrapper">
      <div class="pages-wrapper-content">
          <div class="content">
            <div class="content-header">
              <h1>Oiê</h1>
              <app-icons name="hands" :size="34" class="ml-5"></app-icons>
            </div>
              <h1>Eu sou Charlly</h1>
              <h2 class="content-degraded"><span class="underline">Front-end Developer</span></h2>
              <div class="content-subTitle">
                <p>Sou uma Engenheira da Informatica, dedicada ao Desenvolvimento Frontend(ocasionalmente faço UI design) criando experiências digitais intuitivas e adaptáveis ​​para os usuários.</p>
              </div>
            <div class="btnDownload">
              <a :href="Cv" download>Download CV<app-icons name="download" :size="24" class="ml-2" /></a>
            </div>
          </div>
      </div> 
    </div>
    <div class="icons">
      <ul>
        <li>
          <a :href="gitHubUrl" target="_blank"><app-icons name="git-hub" :size="25"></app-icons></a>
        </li>
        <li>
          <a :href="linkedinUrl" target="_blank"><app-icons name="linkedin" :size="25"></app-icons></a>
        </li>
        <li>
          <a :href="instagramUrl" target="_blank"><app-icons name="instagram" :size="25"></app-icons></a>
        </li>
      </ul>   
    </div>
  </section>
</template>
<script setup>
import AppIcons from '../../components/AppIcons/AppIcons.vue';
import Cv from '../../assets/file/CV-Charlly-Garcia.pdf'

const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM_URL
const gitHubUrl = import.meta.env.VITE_APP_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN_URL

</script>
<style lang="scss" scoped>
  @import './cHero-style.scss';
</style>