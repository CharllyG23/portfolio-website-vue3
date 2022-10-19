<template>
    <h1 class="text-white">{{ t('helloy') }}</h1>
    <div class="select">
        <!-- <select v-model="$i18n.locale">
            <option v-for="(lang, i) in languages" :key="i" :value="lang">{{ lang}}</option>
        </select> -->
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // use as global scope
</script>
 <style lang="scss" scoped>
@import './cLangSelector-style.scss';
</style> 
