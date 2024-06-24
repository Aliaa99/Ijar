<template>
  <section class="my-12 py-12 prices-section">
    <v-container class="py-5">
      <v-row>
        <v-col md="6" sm="12" cols="12">
          <section class="d-flex align-center">
            <span class="dotstyle">المؤشر العام :</span>
            <h1
              style="color: #00ab84; text-align: center; display: inline-block"
            >
              على مستوى المملكة
            </h1>
            <v-spacer />
            <v-tabs v-model="tab" class="newtabstyle" align-tabs="end">
              <v-tab value="one" density="compact" size="small">سكني</v-tab>
              <v-tab value="two" class="ms-2">تجاري</v-tab>
            </v-tabs>
          </section>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <section>
                  <HomeChart />
                </section>
              </v-tabs-window-item>

              <v-tabs-window-item value="two">
                <section>
                  <HomeChart />
                </section>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>

          <!-- <section>
            <HomeChart />
          </section> -->
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
import { defineComponent, ref } from "vue";
import HomeChart from "@/components/global/charts/Home.vue";
import Chips from "@/components/Chips.vue";

export default defineComponent({
  name: "PricesComponent",
  components: { HomeChart, Chips },
  setup() {
    const tab = ref(null);
    return {
      tab,
    };
  },
});
</script>
