<template>
  <select class="app-language ms-2" v-model="locale">
    <option
      v-for="optionLocale in supportedLocales"
      :key="`locale-${optionLocale}`"
      :value="optionLocale">{{ optionLocale }}
    </option>
  </select>
</template>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/plugins/translation'

export default defineComponent({
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales
    const switchLanguage = async (event) => { // <--- 1
      const newLocale = event.target.value // <--- 2
      await Tr.switchLanguage(newLocale) // <--- 3
    }
    return { t, locale, supportedLocales, switchLanguage } // <--- 4
  }
})
</script>
