<template>
    <header :class="{ 'show': show, 'pre-show': preShow, 'scroll': scroll }">
        <div class="header">
            <div class="nav-button">
                <button v-if="show" @click="toggleMenu">
                  <app-icons name="close" :size="28"></app-icons>
                </button>
                <button v-else @click="toggleMenu">
                  <app-icons name="menu" :size="28"></app-icons>
                </button>
            </div>
            <div class="logo" >
              <a href="#home" class="logo">_charlly</a>
            </div>
            <div class="nav">
                <nav>
                    <ul class="navbar">
                        <li><a href="#about" class="header-link">Sobre Mim</a></li>
                        <li><a href="#experiences" class="header-link">Experiências</a></li>
                        <li><a href="#works" class="header-link">Trabalhos</a></li>
                        <li><a href="#contact" class="header-link">Contate-me</a></li>
                        <li class="header-link">
                            <!-- <c-lang-selector/> -->
                        </li>
                    </ul>    
                </nav>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import cLangSelector from '../cLangSelector/cLangSelector.vue';
import AppIcons from '../AppIcons/AppIcons.vue';

const scroll = ref(false)
const show = ref(false)
const preShow = ref(false)

let throttle = false,
scrollPosition = window.scrollY

const toggleMenu = () => {
    if (show.value) {
        setTimeout(() => preShow.value = false, 300)
    } else {
        preShow.value = true
        setTimeout(() => show.value = true, 100)
    }
    window.addEventListener('click', () => show.value = false )
}

const setHeaderHeight = () => {
    scroll.value = scrollPosition > 48
}

const onScroll = () => {
    scrollPosition = window.scrollY

    if (!throttle) {
        window.requestAnimationFrame(() => {
            setHeaderHeight()
            throttle = false
        })
    }
    throttle = true
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

</script>
<style lang="scss" scoped>
@import './cHeader-style.scss';
</style>
