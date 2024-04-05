<template>
  <v-locale-provider :locale="Tr.currentLocale">
    <header-layout><LanguageSwitch /></header-layout>
      <router-view />
    <footer-layout />
  </v-locale-provider>
</template>

<script setup>
  import HeaderLayout from '@/components/layout/HeaderLayout.vue';
  import FooterLayout from '@/components/layout/FooterLayout.vue';
  import LanguageSwitch from '@/components/Lang.vue'
  import Tr from '@/plugins/translation'



</script>
