<template>    
    <footer>
        <div id="contact" class="footer">
            <div class="footer-container">
                <h2 class="footer-container-titleF">Vamos conversar?</h2>
                <div class="footer-container-info">
                    <div class="footer-container-info-subTitle">
                        <p>Contate-me, podemos construir algo incrível juntos? Eu adoraria ouvir de você!</p>
                        <div class="footer-container-location">
                            <div class="flex items-center">
                                <app-icons name="location" :size="20" class="mr-3"/>
                                <span>Curitiba, Brasil</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer-container-email">
                        <div class="footer-container-email-icon">
                           <div class="flex items-center">
                                <app-icons name="email" class="mr-3" :size="25"/>
                                <span>Mande-me um email</span>
                           </div>
                        </div>
                        <div @click="copyEmail">
                            <h2>{{ email }}</h2>
                        </div>
                    </div>
                    <div id="toast"></div>
                </div>
            </div>
            <div class="footer-socials">
                <div class="footer-socials-icons">
                    <a href="#"><app-icons name="git-hub" :size="25" class="mr-3"></app-icons></a>
                    <a href="#"><app-icons name="linkedin" :size="25" class="mr-3"></app-icons></a>
                    <a href="#"><app-icons name="instagram" :size="25"></app-icons></a>
                </div>
                <span>Projetado e codificado por Charlly <strong> ©Copyright 2022</strong></span>
            </div>
            <div class="footer-line"></div>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue'
import AppIcons from '../AppIcons/AppIcons.vue'

const email = ref('charllyfiguera21@gmail.com')
// const show = ref(false)

// function showToast(text){
//   var x=document.getElementById("toast");
//   x.classList.add("show");
//   x.innerHTML=text;
//   setTimeout(function(){
//     x.classList.remove("show");
//   },3000);
// }

const copyEmail = () => {
	navigator.clipboard.writeText(email.value)
	console.log('email copiado!')
}
</script>
<style lang="scss" scoped>
@import './cFooter-style.scss';
</style>