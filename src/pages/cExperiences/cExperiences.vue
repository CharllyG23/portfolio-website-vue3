<template>
   <div id="experiences" class="pages ">
      <div class="pages-container">
         <h1 class="title">Experiências</h1>
         <div class="pages-container-content">
            <div class="steps">
               <h2 class="subTitle">Onde trabalhei e cresci profissionalmente, como Desenvolvedora Frontend.</h2>
               <div class="steps__list">
                  <div class="steps__list--item" v-for="(step, index) in steps" :key="step">
                     <span>{{ index + 1 }}</span>
                     <div class="steps__list--item__info">
                        <p class="__titleInfo">{{ step.title }}</p>
                        <p class="__timeInfo">{{ step.time }}</p>
                        <p class="__subTitleInfo">{{ step.subTitle }}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="pages__lettersAnimation">
         <div class="pages__lettersAnimation--animate">
            <h5 data-text="CRIATIVA">CRIATIVA</h5>
         </div>
         <h3>EU SOU</h3>
         <div class="pages__lettersAnimation--animate">
            <h5 data-text="PROACTIVA">PROACTIVA</h5>
         </div>
      </div>
   </div>
</template>
<script setup>

const steps = [
   {
		title: 'Plug Apps',
		time: 'Outubro 2020 - Junho 2021',
      subTitle: 'Colaborei de perto com a maioria da equipe codificando e corrigindo bugs em sites internos da empresa.',
	},
   {
		title: 'A&M Solutions',
		time: 'Julho 2021 - Setembro 2021',
      subTitle: 'Trabalhei principalmente para garantir experiências de usuário satisfatórias e consistente.',
	},
   {
		title: 'Partyou',
		time: 'Novembro 2021 - Atual',
      subTitle: 'Junto com a equipe de frontend, criamos código moderno e de fácil manutenção com o framework Vue 3.',
	},
]
</script>
<style lang="scss" scoped>
@import './cExperiences-style.scss';
</style>