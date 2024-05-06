<template>

  <v-btn color="primary" variant="flat" size="large" 
  @click="show = !show">
    اختر مدينة لعرض مؤشر التغيير
  </v-btn>

    <v-chip-group class="chips-style" v-if="show"
    selected-class="chip-selected"
    column
  >
    <v-chip
      v-for="tag in tags"
      :key="tag"
      class="ma-2"
      size="small"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
import { defineComponent , ref} from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const tags = [
      'الكل',
      "تبوك",
      "الدمام",
      "الخبر",
      "حايل",
      "أبها",
      "نجران",
      "عرعر",
      "الدمام",
      "تبوك",
      "الدمام",
      "المدينة المنورة",
      "مكة المكرمة",
      "بريدة",
      "جازان",
      "نجران",
      "عرعر",
      "الدمام",
      "تبوك",
      "الدمام",
    ];
const show = ref (false);
    return { t, tags ,show};
  },
});
</script>
