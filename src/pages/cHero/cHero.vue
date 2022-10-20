<template>
  <section id="home" class="pages">
    <div class="pages-wrapper">
      <div class="pages-wrapper-content">
        <div class="hero">
          <div class="content">
            <div class="content-header">
              <h1>Oiê</h1>
              <app-icons name="hands" :size="34" class="ml-5"></app-icons>
            </div>
              <h1>Sou Charlly</h1>
              <h1 class="content-degraded">Frontend Developer</h1>
              <div class="content-subTitle">
                <p>Sou uma pessoa que adora criar coisas para a web. Uma desenvolvedora front-end motivada pela curiosidade com habilidades de design.</p>
              </div>
            <div class="btnDownload">
              <a :href="Cv" download>Download CV<app-icons name="download" :size="24" class="ml-2" /></a>
            </div>
          </div>
          <div class="hero-svg">
            <app-icons name="larger-smaller" :size="280"></app-icons>
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