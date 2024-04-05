<template>
  <section class="intro">
    <v-container class="py-5">
      <v-row>
        <v-col lg="7" md="6" cols="12">
          <section class="d-flex align-center justify-end h-100">
            <article>
              <h1 class="text-45">
                <span>{{ $t("home.intro.title") }}</span>
                <br>
                <span class="text-primary">{{ $t("home.intro.sub_title") + ' ' }}</span>
                <span>{{ $t("home.intro.private") }}</span>
              </h1>
              <p class="py-8">{{ $t("home.intro.body") }}</p>
              <v-btn color="primary" variant="flat" size="large">
                {{ $t("home.intro.more") }}
              </v-btn>
            </article>
          </section>
        </v-col>
        <v-col lg="5" md="6" cols="12">
          <img width="100%" src="../../assets/images/intro-v.png" />
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
