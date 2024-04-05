<template>
  <section class="mt-12 pb-12 prices-section">
    <v-container class="py-5">
      <v-row>
        <v-col lg="6" class="d-flex align-center">
          <section>
            <article>
              <h2 class="text-primary">{{ $t("home.prices.title") }}</h2>
              <p class="py-3">{{ $t("home.prices.body") }}</p>
            </article>
            <v-btn color="primary" variant="flat" size="large" to="/pointer">
              {{ $t("home.prices.more") }}
            </v-btn>
          </section>
        </v-col>

        <v-col lg="6">
          <Chart />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import Chart from "@/components/global/Chart.vue";
</script>
