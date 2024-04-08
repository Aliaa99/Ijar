<template>
  <section class="my-12 py-6 deals_section">
    <v-container class="py-5">
      <v-row>
        <v-col lg="3" md="3" sm="3" xs="2" cols="12">
          <img width="100%" src="../../assets/images/user.png" />
        </v-col>
        <v-col lg="7" md="9" sm="6" xs="10" cols="12">
          <article>
            <h2 class="text-36">{{ $t("home.deals.title") }}</h2>
            <p class="pt-2 text-18">{{ $t("home.deals.body") }}</p>
          </article>
        </v-col>

        <v-col lg="2" cols="12">
          <section class="d-flex align-center justify-sm-end h-100">
            <v-btn color="primary" variant="flat" size="large" to="/">
              {{ $t("home.deals.contact") }}
            </v-btn>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    //
  },
});
</script>
