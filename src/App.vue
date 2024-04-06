<template>
  <div v-if="isLoading">
    <v-overlay :model-value="overlay" class="align-center justify-center">
      <v-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
  <template v-else>
    <v-locale-provider :locale="Tr.currentLocale">
      <header-layout><LanguageSwitch /></header-layout>
      <router-view />
      <footer-layout />
    </v-locale-provider>
  </template>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick } from "vue";
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import LanguageSwitch from "@/components/Lang.vue";
import Tr from "@/plugins/translation";

export default defineComponent({
  name: "AppView",
  components: { HeaderLayout, FooterLayout, LanguageSwitch },
  setup() {
    const tab = ref(null);
    const isLoading = ref(true);

    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 500);
      });
    });

    return { tab, isLoading, Tr };
  },
});
</script>
