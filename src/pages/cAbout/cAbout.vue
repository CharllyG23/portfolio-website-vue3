<template>
    <div id="about" class="pages">
        <div class="pages-container">
            <h2 class="title pt-2">{{ data.title }}</h2>
            <div class="pages-container-content">
                <div class="info">
                    <span>{{ data.subTitle }}</span>
                    <p>{{ data.info }}</p>
                    <p>{{ data.info2 }}</p>
                    <p  class="stress" v-html="data.info3"></p>  
                </div>
                <div class="about-img">
                    <div class="wrapper">
                        <div class="img">
                            <img :src="imageDefault" alt="imagen perfil" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="nowadays">
                <h3>{{ data.nowadayTitle }}</h3>
                <p class="stress" v-html="data.nowadaySubTitle"></p>
            </div>            
        </div>
        <section class="pages__wrapper">
           <div class="pages__wrapper--contents">
                <div class="pages__wrapper--skill">
                    <h3>{{ data.skill }}</h3>
                    <p>{{ data.tools }}</p>
                </div>
                <div class="pages__wrapper--iconsContainer" >
                    <div class="align" v-for="item in items" :key="item" >
                        <app-icons :name="item.icon" :size="45"></app-icons>
                        <div class="pt-3">
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    </div>  
</template>
<script setup>
import { ref } from 'vue'
import imageDefault from '../../assets/img/img-perfil.png'
import AppIcons from '../../components/AppIcons/AppIcons.vue';

const data = ref({
    title: 'Escrevo código, Desenho coisas',
    subTitle: 'Quem é charlly', 
    info: 'Uma desenvolvedora front-end  motivada pela curiosidade com habilidades de design.',
    info2: 'Sou apaixonado por dar vida aos aspectos técnicos e visuais dos produtos digitais. Experiência do usuário, belos pixels e escrita acessível e limpa, o código humano é importante para mim, e acredito firmemente que menos é mais.',
    info3: `Sou  <strong> Engenheiro da Informatica </strong> formado em 2020 na <strong>Venezuela,</strong> mas moro em Brasil um país vibrante cheio de pessoas espetacularmente diferentes, gosto de ler, assistir filmes interessantes com uma mensagem inspiradora,também gosto de jogar jogos de Shooter, e claro que sou um <strong>servo de gatos.</strong>`,
    nowadayTitle: 'Atualmente trabalhando em:',
    nowadaySubTitle: 'Melhorar minhas habilidades em JavaScript e estendendo a ideia de microservice <strong>(Microfrontend)</strong> para desenvolvimento frontend.',
    skill: 'Skill & Tools',
    tools: 'Minha caixa de ferramentas e coisas que posso fazer'

})

const items = ref([
	{
		icon: 'scss',
		title: "Scss",
	},
	{
		icon: 'html',
		title: "Html",
	},
    {
		icon: 'vue',
		title: "Vuejs",
	},
    {
		icon: 'css',
		title: "Css",
	},
    {
		icon: 'js',
		title: "Javascript",
	},
    {
		icon: 'react',
		title: "Reactjs",
	},
    {
		icon: 'git-hub',
		title: "GitHub",
	},
    {
		icon: 'bootstrap',
		title: "Bootstrap",
	},
    {
		icon: 'tailwind',
		title: "Tailwind",
	},
    {
		icon: 'vs-code',
		title: "VsCode",
	},
    {
		icon: 'json',
		title: "Json",
	},
    {
		icon: 'npm',
		title: "Npm",
	},

    {
		icon: 'figma',
		title: "Figma",
	},
    {
		icon: 'rest-api',
		title: "Rest Api",
	},
])
</script>
<style lang="scss" scoped>
@import './cAbout-style.scss';
</style>