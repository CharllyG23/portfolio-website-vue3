<template>
   <div id="experiences" class="pages ">
      <div class="pages-container">
         <h1 class="title">Experiências</h1>
         <h2 class="_subTitle">Onde trabalhei profissionalmente, como Desenvolvedora.</h2>
         <div class="pages-container-content">
            <div class="steps">
               <div class="steps__list">
                  <div class="steps__list--item" v-for="(step, index) in steps" :key="step">
                     <span></span>
                     <div class="steps__list--item__info">
                        <p class="__titleInfo">{{ step.title }}</p>
                        <p class="__timeInfo">{{ step.time }}</p>
                        <p class="__timeWork">{{ step.work }}</p>
                        <div class="__timeList">
                           <p class="__resp">Responsabilidades</p>
                          <ul class="ml-2">
                              <li>{{ step.subTitle }}</li>
                              <li>{{ step.first }}</li>
                              <li>{{ step.second }}</li>
                           </ul>
                        </div>
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
		time: 'Agosto 2020 - Julho 2021',
      work: 'Desenvolvedor frontend Junior',
      subTitle: 'Projetar, e criar layout de um painel administrativo para organizar sorteios.',
      first: 'Refatorar e melhorar o código existente.',
      second: 'Eliminar bugs e Implementar verificações na API.'
	},
   {
		title: 'A&M Solutions',
		time: 'Junho 2021 - Novembro 2021',
      subTitle: 'Produzir estimativas de desenvolvimento.',
      work: 'Desenvolvedor frontend',
      first: 'Padronizar e organizar o código desenvolvido (Clean code, clean arch).',
      second: 'Crie componentes de IU de usuário final com tecnologia ReactJS e Bootstrap.'
	},
   {
		title: 'Partyou',
		time: 'Novembro 2021 - Atual',
      subTitle: 'Responsavel junto a equipe de criar toda base do projeto front-end.',
      work: 'Desenvolvedor frontend',
      first: 'Criando estrutura de microfrontend, design system com Tailwindcss, SASS e Storybook, clean code.',
      second: 'Autenticação JWT para manter o controle de acesso seguro.',
	},
]
</script>
<style lang="scss" scoped>
@import './cExperiences-style.scss';
</style>