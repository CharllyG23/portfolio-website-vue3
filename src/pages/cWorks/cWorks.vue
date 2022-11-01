<template>
   <div id="works" class="pages">
      <div class="pages-container">
            <h1 class="title">Projetos</h1>
            <h2 class="subTitle">Algumas coisas eu construí e outras para fazer.</h2>
            <div class="wrapper">
                <div class="card">
                    <img :src="prototype" alt="Projeto Cecoguay">
                    <div class="info">
                        <h2 >Cecoguay</h2>
                        <p >Homepage desenhada por mim, para um prestador de serviços funerários.</p>
                        <a :href="cecoguayUrl" target="_blank" class="card__button">Ver projeto</a>
                    </div>
                </div>
                <div  v-for="card in cards" :key="card" class="card" >
                    <img :src="developer" alt="Desenvolvedor">
                    <div class="info">
                        <h2>{{ card.title }}</h2>
                        <p>{{ card.subTitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import prototype from '../../assets/img/prototype.jpg'
import developer from '../../assets/img/dev.svg'

const cecoguayUrl = import.meta.env.VITE_APP_CECOGUAY_URL

const cards = ref([
    {   
        title: 'Em breve',
        subTitle: 'Pegue o café e espere um pouco, estou desenvolvendo o projeto.',
    },

    {   
        title: 'Em breve',
        subTitle: 'Pegue o café e espere um pouco, estou desenvolvendo o projeto.',
    }
])
</script>
<style lang="scss" scoped>
@import './cWork-style.scss';
</style>