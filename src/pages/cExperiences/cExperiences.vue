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
            <h5 data-text="PROATIVA">PROATIVA</h5>
         </div>
      </div>
   </div>
</template>
<script setup>
const steps = [
   {
		title: 'Plug Apps',
		time: 'Agosto 2020 - Julho 2021',
      subTitle: 'Projetar, e criar layout de um painel administrativo para organizar sorteios. Além de refatorar e melhorar o código, eliminando bugs que surgiam de projetos que já existiam. .',
	},
   {
		title: 'A&M Solutions',
		time: 'Junho 2021 - Novembro 2021',
      subTitle: 'Garantir experiências satisfatórias e consistentes do usuário no projeto assistencial para prescrições médicas, atestados médicos e consultas.',
	},
   {
		title: 'Partyou',
		time: 'Novembro 2021 - Atual',
      subTitle: 'Responsavel junto a equipe de criar toda base do projeto front-end. Criando estrutura de microfrontend, design system com Tailwindcss, SASS e Storybook, clean code.',
	},
]
</script>
<style lang="scss" scoped>
@import './cExperiences-style.scss';
</style>