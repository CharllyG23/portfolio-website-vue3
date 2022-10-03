<template>
   <div id="works" class="pages">
      <div class="pages-container">
            <h1 class="title">Projetos</h1>
            <h2 class="subTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <div class="pages-container-content">
                <div class="gridCards">
                    <div class="gridCards-cards">
                        <div class="gridCards-cards-contents">
                            <app-icons name="file" class="mb-4"></app-icons>
                            <h5>Cecoguay</h5>
                            <p>Homepage desenhada por mim e codificada por um amigo, para um prestador de serviços funerários. </p>
                            <div class="gridCards-cards-contents-tools">
                                <span>Vuejs</span>
                                <span>Nuxtjs</span>
                                <span>Vuetify</span>
                                <app-icons :size="25" name="link"></app-icons>
                            </div>
                        </div>
                        <div class="gridCards-cards-contents">
                            <app-icons name="file" class="mb-4"></app-icons>
                            <h5>Em breve</h5>
                            <p>Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                        </div>
                        <div class="gridCards-cards-contents">
                            <app-icons name="file" class="mb-4"></app-icons>
                            <h5>Em breve</h5>
                            <p>Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="repository">
               <a href="#">Repositorio de GitHub</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import AppIcons from '../../components/AppIcons/AppIcons.vue';
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>