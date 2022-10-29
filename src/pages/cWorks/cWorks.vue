<template>
   <div id="works" class="pages">
      <div class="pages-container">
            <h1 class="title">Projetos</h1>
            <div class="container">
                <div class="card">
                    <figure class="card__thumb">
                        <img :src="cecoguay" alt="Imagem do projeto cecoguay " class="card__image">
                        <figcaption class="card__caption">
                            <h2 class="card__title">Cecoguay</h2>
                            <p class="card__snippet">Homepage desenhada por mim e codificada por um amigo, para um prestador de serviços funerários.</p>
                            <a :href="cecoguayUrl" class="card__button">Ver projeto</a>
                        </figcaption>
                    </figure>
                </div>
                <div  v-for="card in cards" :key="card" class="card" >
                    <figure class="card__thumb">
                        <img :src="developer" alt="developer" class="card__image">
                        <figcaption class="card__caption">
                            <h2 class="card__title">{{ card.title }}</h2>
                            <p class="card__snippet">{{ card.subTitle }}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import AppIcons from '../../components/AppIcons/AppIcons.vue';
import cecoguay from '../../assets/img/cecoguay.jpg'
import developer from '../../assets/img/dev.svg'

const cecoguayUrl = import.meta.env.VITE_APP_CECOGUAY_URL

const cards = ref([
    {   
        icon: 'file',
        title: 'Em breve',
        subTitle: 'Pegue o café e espere um pouco, estou desenvolvendo o projeto.',
    },
    {   
        icon: 'file',
        title: 'Em breve',
        subTitle: 'Pegue o café e espere um pouco, estou desenvolvendo o projeto.',
    }
])

</script>

<style lang="scss" scoped>
@import './cWork-style.scss';
</style>