<template>
    <div id="about" class="pages">
        <div class="pages-container">
            <h2 class="title">Escrevo código, Desenho coisas</h2>
            <div class="pages-container-content">
                <div class="info">
                    <span>Quem é charlly</span>
                    <p>Uma desenvolvedora front-end  motivada pela curiosidade com habilidades de design.</p>
                    <p>Sou apaixonado por dar vida aos aspectos técnicos e visuais dos produtos digitais. Experiência do usuário, 
                        belos pixels e escrita acessível e limpa, o código humano é importante para mim. 
                        e acredito firmemente que menos é mais.</p>
                    <p>Sou Engenheiro em Informatica formado em 2020 na <strong class="stress">Venezuela,</strong> mas moro em Brasil um país vibrante cheio de pessoas espetacularmente diferentes,
                        gosto de ler, assistir filmes interessantes com uma mensagem inspiradora, 
                        também gosto de jogar jogos de Shooter, minha banda de música favorita é Imagine Dragons e claro que sou um <strong class="stress">servo de gatos.</strong></p>  
                </div>
                <div class="image">
                    <img :src="imageDefault" alt="imagen perfil" />
                </div>
            </div>
            <div class="skill">
                <h3>Habilidades e ferramentas</h3>
                <p>Minha caixa de ferramentas e coisas que posso fazer</p>
            </div>
           <div class="iconsContainer">
                <app-icons name="scss" :size="50"></app-icons>
                <app-icons name="html" :size="50"></app-icons>
                <app-icons name="css" :size="50"></app-icons>
                <app-icons name="vue" :size="50"></app-icons>
                <app-icons name="tailwind" :size="50"></app-icons>
                <app-icons name="js" :size="50"></app-icons>
                <app-icons name="vs-code" :size="50"></app-icons>
                <app-icons name="xd" :size="50"></app-icons>
                <app-icons name="git" :size="50"></app-icons>
                <app-icons name="json" :size="50"></app-icons>
                <app-icons name="npm" :size="50"></app-icons>
                <app-icons name="bootstrap" :size="50"></app-icons>
                <app-icons name="figma" :size="50"></app-icons>
                <app-icons name="react" :size="50"></app-icons>
                <app-icons name="rest-api" :size="50"></app-icons>
                <app-icons name="git-cmd" :size="50"></app-icons>
           </div>
            <div class="nowadays">
                <h3>Atualmente trabalhando em:</h3>
                <p>Melhorar minhas habilidades em JavaScript e estendendo a ideia de microservice <strong class="stress">{Microfrontend}</strong> 
                para desenvolvimento frontend.</p>
            </div>
        </div>
        <!-- <app-letters :name="'CREATIVE'"/> -->
    </div>  
</template>
<script setup>
// import AppLetters from '../../components/AppLetters/AppLetters.vue';
import imageDefault from '../../assets/img/img-perfil.png'
import AppIcons from '../../components/AppIcons/AppIcons.vue';
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>