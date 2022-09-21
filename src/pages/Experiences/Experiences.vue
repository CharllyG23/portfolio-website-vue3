<template>
   <div id="experiences" class="experiences">
      <div class="experiences-container">
         <h1 class="title">Experiências</h1>
         <div class="experiences-container-content">
            <div class="steps">
               <h2>Onde trabalhei e cresci profissionalmente, como Desenvolvedora Frontend.</h2>
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
   </div>
</template>
<script setup>

const steps = [
   {
		title: 'Plug Apps',
		time: 'Outubro 2020 - Junho 2021',
      subTitle: 'Colaborei muito de perto com a maioria da equipe codificando e corrigindo bugs em sites internos da empresa usando principalmente Vue e Laravel.',
	},
   {
		title: 'A&M Solutions',
		time: 'Julho 2021 - setembro 2021',
      subTitle: 'Trabalhei principalmente para garantir experiências de usuário satisfatórias e consistência de projeto que os clientes precisam no ReactJs e Bootstrap.',
	},
   {
		title: 'Partyou',
		time: 'Novembro 2021 - 2022',
      subTitle: 'Junto com a equipe de frontend, criamos código moderno, eficiente e de fácil manutenção com o framework Vue 3 para uma ampla gama de projetos internos.',
	},
]
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>