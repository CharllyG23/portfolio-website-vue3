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
                                <a :href="cecoguayUrl" target="_blank"><app-icons name="link" :size="25" /></a>
                            </div>
                        </div>
                        <div v-for="card in cards" :key="card" class="gridCards-cards-contents">
                            <app-icons :name="card.icon" class="mb-4" />
                            <h5>{{ card.title }}</h5>
                            <p>{{ card.subTitle }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import AppIcons from '../../components/AppIcons/AppIcons.vue';

const cecoguayUrl = import.meta.env.VITE_APP_CECOGUAY_URL

const cards = ref([
    {   
        icon: 'file',
        title: 'Em breve',
        subTitle: 'Go to this step by step guideline process on how to certify for your weekly benefits.',
    },
    {   
        icon: 'file',
        title: 'Em breve',
        subTitle: 'Go to this step by step guideline process on how to certify for your weekly benefits.',
    }
])

</script>

<style lang="scss" scoped>
@import './cWork-style.scss';
</style>