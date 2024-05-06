<template>
  <section class="my-12 py-12 prices-section">
    <v-container class="py-5">
      <v-row>
        <v-col md="6" sm="12" cols="12">
          <h1 style="color:#00ab84;text-align: center">على مستوى المملكة</h1>
          <section>
            <HomeChart />
          </section>
        </v-col>
        <v-col md="6" sm="12" cols="12" class="d-flex align-center">
          <section class="ms-12">
            <article>
              <h2 class="text-primary text-36">
                {{ $t("home.prices.title") }}
              </h2>
              <p class="pb-7 pt-4 text-18">{{ $t("home.prices.body") }}</p>
            </article>
            <Chips />
          </section>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import HomeChart from "@/components/global/charts/Home.vue";
import Chips from "@/components/Chips.vue";

export default defineComponent({
  name: "PricesComponent",
  components: { HomeChart, Chips },
  setup() {
    //
  },
});
</script>
