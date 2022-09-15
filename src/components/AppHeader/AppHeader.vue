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
              <a href="#default" class="logo">Charlly/></a>
            </div>
            <div class="nav">
                <nav>
                    <ul class="navbar">
                        <li><a href="#"  class="header-link">Sobre Mim</a></li>
                        <li><a href="#" class="header-link">Experiências</a></li>
                        <li><a href="#" class="header-link">Trabalhos</a></li>
                        <li class="lang"> 
                            <app-lang-selector/>
                        </li>
                        <li>
                            <button class="btn header-link">A-</button>
                        </li>
                        <li>
                            <button class="btn header-link" >A+</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, onMounted} from 'vue'
import AppLangSelector from '../AppLangSelector/AppLangSelector.vue';
import AppIcons from '../AppIcons/AppIcons.vue';

const scroll = ref(false)
const show = ref(false)
const preShow = ref(false)
const lg = ref(false)

let throttle = false,
scrollPosition = window.scrollY

const toggleMenu = () => {
    if (show.value) {
        show.value = false
        setTimeout(() => preShow.value = false, 300)
    } else {
        preShow.value = true
        setTimeout(() => show.value = true, 100)
    }
}

const onResize = () => {
    lg.value = window.innerWidth >= 1024
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
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)
})

</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
