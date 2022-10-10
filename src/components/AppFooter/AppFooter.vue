<template>    
    <footer>
        <div class="footer">
            <div class="footer-container">
                <h2 class="title">Vamos conversar?</h2>
                <div class="footer-container-info">
                    <div class="footer-container-info-subTitle">
                        <p>Contate-me, podemos construir algo incrível juntos? Eu adoraria ouvir de você!</p>
                        <div class="flex items-center ">
                            <app-icons name="location" :size="20" class="mr-3"/>
                            <span>Curitiba, Brasil</span>
                        </div>
                    </div>
                    <div class="footer-container-info-email">
                        bvfdhbdhbdfhdfhdfhdfhdfh
                    </div>
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
import AppIcons from '../AppIcons/AppIcons.vue'
</script>
<style lang="scss" scoped>
@import './style';
</style>