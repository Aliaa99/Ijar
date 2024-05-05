<template>
    <v-chip-group class="chips-style"
    selected-class=""
    column
  >
    <v-chip
      v-for="tag in tags"
      :key="tag"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const tags = [
      t("work"),
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing",
    ];

    return { t, tags };
  },
});
</script>
