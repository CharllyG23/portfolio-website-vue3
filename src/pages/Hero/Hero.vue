<template>
  <section id="home" class="pages">
    <div class="pages-container">
      <div class="pages-container-content">
          <div class="hero">
            <div class="hero-header">
              <h1>Oiê</h1>
              <app-icons name="hands" :size="34" class="ml-5"></app-icons>
            </div>
            <h1>Sou Charlly</h1>
            <h1 class="hero-degraded">Frontend Developer</h1>
            <div class="hero-subTitle">
              <p>Sou uma pessoa que adora criar coisas para a web. Uma desenvolvedora front-end motivada pela curiosidade com habilidades de design.</p>
            </div>
            <div>
              <button>Download CV
                <app-icons name="download" :size="24" class="ml-2"></app-icons>
              </button>
              <!-- <div class="hero-container-socialIcons">
                <a href="#"><app-icons name="git-hub" :size="18"></app-icons></a>
                <a href="#"><app-icons name="instagram" :size="18"></app-icons></a>
                <a href="#"><app-icons name="linkedin" :size="18"></app-icons></a>
              </div> -->
            </div>
          </div>
        </div> 
    </div>
  </section>
</template>
<script setup>
import AppIcons from '../../components/AppIcons/AppIcons.vue';
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>