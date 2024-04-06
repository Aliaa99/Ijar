<template>
  <section class="my-12 py-12 prices-section">
    <v-container class="py-5">
      <v-row>
        <v-col md="6" sm="12" cols="12" class="d-flex align-center">
          <section>
            <article>
              <h2 class="text-primary text-36">
                {{ $t("home.prices.title") }}
              </h2>
              <p class="pb-7 pt-4 text-18">{{ $t("home.prices.body") }}</p>
            </article>
            <v-btn color="primary" variant="flat" size="large" to="/pointer">
              {{ $t("home.prices.more") }}
            </v-btn>
          </section>
        </v-col>

        <v-col md="6" sm="12" cols="12">
          <Chart />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import Chart from "@/components/global/Chart.vue";
</script>
