<template>
  <v-container class="py-12 numbers">
    <article class="text-center">
      <h2 class="text-primary-md mb-5">{{ $t("home.numbers.title") }}</h2>
      <p>{{ $t("home.numbers.body") }}</p>
    </article>

    <section class="my-12">
      <v-row>
        <v-col
          lg="3"
          md="6"
          sm="6"
          cols="12"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card
            variant="flat"
            :class="`numbers-card numbers-card--${item.class}`"
          >
            <v-card-title class="d-flex">
              <article>
                <span class="text-primary-md">{{ item.header }}</span>
                <br />
                <span>{{ item.num }}</span>
              </article>
              <v-spacer />
              <v-avatar size="54" >
                <v-img alt="icon" :src="item.icon"></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-text>
              <p>{{ item.body }}</p>
              <p>{{ item.average }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const items = computed(() => {
      return [
        {
          header: t("home.numbers.house.title"),
          num: "143",
          body: t("home.numbers.house.body"),
          average: t("home.numbers.house.average"),
          icon: "src/assets/images/numbers/01.png",
          class: "house",
        },
        {
          header: t("home.numbers.commercial.title"),
          num: "1.112",
          body: t("home.numbers.commercial.body"),
          average: t("home.numbers.commercial.average"),
          icon: "src/assets/images/numbers/02.png",
          class: "commercial",
        },
        {
          header: t("home.numbers.buildings.title"),
          num: "1.555",
          body: t("home.numbers.buildings.body"),
          average: t("home.numbers.buildings.average"),
          icon: "src/assets/images/numbers/03.png",
          class: "buildings",
        },
        {
          header: t("home.numbers.deals.title"),
          num: "1.112",
          body: t("home.numbers.deals.body"),
          average: t("home.numbers.deals.average"),
          icon: "src/assets/images/numbers/04.png",
          class: "deals",
        },
      ];
    });
    return { t, items };
  },
});
</script>
