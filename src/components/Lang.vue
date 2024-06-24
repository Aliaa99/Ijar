<template>
  <v-menu location="start">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        <v-icon>mdi-web</v-icon>
        <span v-if="locale == 'ar'" class="ms-1">العربية</span>
        <span v-else class="ms-1">الانجليزية</span>
      </v-btn>
    </template>

    <v-list class="py-0">
      <v-list-item
        v-for="(item, index) in supportedLocales"
        :key="index"
        @click="switchLanguage(item)"
        density="compact"
      >
        <v-list-item-title>
          <v-icon v-if="locale == item" size="small">mdi-check</v-icon>
          <small v-if="item == 'ar'" class="ms-1">العربية</small>
          <small v-else class="ms-1">الانجليزية</small>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "@/plugins/translation";

export default defineComponent({
  setup() {
    const { t, locale } = useI18n();
    const supportedLocales = Tr.supportedLocales;
    const switchLanguage = async (event) => {
      // <--- 1
      const newLocale = event; // <--- 2
      await Tr.switchLanguage(newLocale); // <--- 3
    };
    return { t, locale, supportedLocales, switchLanguage }; // <--- 4
  },
});
</script>
