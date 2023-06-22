<template>
    <div id="about" class="pages">
        <div class="pages-container">
            <h2 class="title pt-2">{{ data.title }}</h2>
            <div class="pages-container-content">
                <div class="info">
                    <span>{{ data.subTitle }}</span>
                    <p  class="stress" v-html="data.info"></p>
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
        </div>
        <section class="pages__wrapper">
            <div class="pages__wrapper--skill">
                <h3>{{ data.skill }}</h3>
                <p>{{ data.tools }}</p>
            </div>
            <div class="pages__wrapper--iconsContainer" >
                <div class="align" v-for="item in items" :key="item" >
                    <app-icons :name="item.icon" :size="60"></app-icons>
                    <div class="pt-3">
                        <span>{{item.title}}</span>
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
    info: 'Tenho uma paixão profunda por criar experiências digitais excepcionais. Com um desejo incessante de aprendizado, mantenho-me constantemente atualizada sobre as últimas tendências e tecnologias em desenvolvimento front-end e design de interface do usuário (UI Design).',
    info2: 'Acredito firmemente que uma interface de usuário bem projetada é a chave para o sucesso de qualquer produto digital. Meu objetivo é combinar habilidades técnicas avançadas com conceitos de design inovadores, a fim de criar interfaces bonitas, intuitivas e altamente funcionais.',
    info3: `Minha formação em Engenharia da Informática me forneceu uma base sólida em programação e resolução de problemas complexos. Compreender as necessidades dos usuários e as metas do negócio é fundamental para mim. Ao longo da minha carreira, adquiri experiência em projetos diversos, desde sites institucionais até aplicações web complexas. Valorizo ​​a escrita de código limpo (Clean Code), modular e bem documentado, o que facilita a manutenção e escalabilidade dos projetos.`,
    skill: 'Skill & Tools',
    tools: 'Minha caixa de ferramentas e coisas que posso fazer'

})

const items = ref([
	{
		icon: 'scss',
		title: "Sass",
	},
	{
		icon: 'html',
		title: "Html",
	},
    {
		icon: 'css',
		title: "Css",
	},
    {
		icon: 'vue',
		title: "Vuejs",
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
		icon: 'npm',
		title: "Npm",
	},
    {
		icon: 'figma',
		title: "Figma",
	},
])
</script>
<style lang="scss" scoped>
@import './cAbout-style.scss';
</style>