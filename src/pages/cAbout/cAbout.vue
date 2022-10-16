<template>
    <div id="about" class="pages">
        <div class="pages-container">
            <h2 class="title pt-2">Escrevo código, Desenho coisas</h2>
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
                <div class="about-img">
                    <div class="wrapper">
                        <div class="img">
                            <img :src="imageDefault" alt="imagen perfil" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="nowadays">
                <h3>Atualmente trabalhando em:</h3>
                <p>Melhorar minhas habilidades em JavaScript e estendendo a ideia de microservice <strong class="stress">{Microfrontend}</strong> 
                para desenvolvimento frontend.</p>
            </div>            
        </div>
        <section class="pages__wrapper">
           <div class="pages__wrapper--contents">
                <div class="pages__wrapper--skill">
                    <h3>Skill & Tools</h3>
                    <p>Minha caixa de ferramentas e coisas que posso fazer</p>
                </div>
                <div class="pages__wrapper--iconsContainer">
                    <div class="text-center">
                        <app-icons name="scss" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Scss</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="html" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Html</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="vue" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Vuejs</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="css" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Css</span>
                        </div>
                    </div>
                    <div class="text-center inline-block">
                        <app-icons name="js" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="react" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Reactjs</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="git" :size="55"></app-icons>
                        <div class="pt-3">
                            <span>GitHub</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="bootstrap" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Bootstrap</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="tailwind" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Tailwind</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="vs-code" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>VsCode</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="json" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Json</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="npm" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Npm</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <app-icons name="figma" :size="60"></app-icons>
                        <div class="pt-3">
                            <span>Figma</span>
                        </div>
                    </div>

                    <div class="text-center">
                        <app-icons name="rest-api" :size="55"></app-icons>
                        <div class="pt-3">
                            <span>Rest Api</span>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    </div>  
</template>
<script setup>
import imageDefault from '../../assets/img/img-perfil.png'
import AppIcons from '../../components/AppIcons/AppIcons.vue';
</script>
<style lang="scss" scoped>
@import './cAbout-style.scss';
</style>