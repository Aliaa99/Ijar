<template>
  <section class="d-flex align-center justify-center">
    <!-- tabs -->
    <v-container class="pt-12">
      <v-card
        class="my-12 pointer-section py-sm-12 px-sm-12"
        min-height="250px"
        elevation="0"
      >
        <p class="fill-height d-flex align-center justify-center text-22 pt-5">
          <b>{{ $t("header.inquiries") }}</b>
        </p>
      </v-card>
      <!-- form -->
      <v-card class="py-8 px-10 form-card filter-tabs" elevation="0">
        <section>
          <article>
            <h6 class="text-primary text-22">
              {{ $t("form.title") }}
            </h6>
            <p class="pb-5">{{ $t("form.details") }}</p>
          </article>
        </section>
        <v-row>
          <v-col lg="6" md="6" sm="12" cols="12">
            <!-- form -->
            <v-form>
              <v-row>
                <v-col lg="12" cols="12" class="pb-0">
                  <v-label>{{ $t("form.inputs.reason") }}</v-label>
                  <v-select
                    :items="reasons"
                    v-model="payload.reason"
                    :placeholder="$t('form.inputs.choose_reason')"
                    variant="solo-filled"
                    item-title="title"
                    item-value="value"
                    density="compact"
                    menu-icon="mdi-chevron-down"
                    clear-icon="mdi-close"
                    flat
                    clearable
                  ></v-select>
                </v-col>
                <v-col lg="6" md="6" sm="12" cols="12" class="pb-0">
                  <v-label>{{ $t("form.inputs.firstname") }}</v-label>
                  <v-text-field
                    v-model="payload.firstname"
                    variant="solo-filled"
                    flat
                    density="compact"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col lg="6" md="6" sm="12" cols="12" class="pb-0">
                  <v-label>{{ $t("form.inputs.lastname") }}</v-label>
                  <v-text-field
                    v-model="payload.lastname"
                    variant="solo-filled"
                    flat
                    density="compact"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col lg="6" md="6" sm="12" cols="12" class="pb-0">
                  <v-label>{{ $t("form.inputs.mobile") }}</v-label>
                  <v-text-field
                    v-model="payload.mobile"
                    variant="solo-filled"
                    flat
                    density="compact"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col lg="6" md="6" sm="12" cols="12" class="pb-0">
                  <v-label>{{ $t("form.inputs.email") }}</v-label>
                  <v-text-field
                    v-model="payload.email"
                    variant="solo-filled"
                    flat
                    density="compact"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col lg="12" cols="12" class="pb-0">
                  <v-label>{{ $t("form.inputs.details") }}</v-label>
                  <v-textarea
                    v-model="payload.details"
                    variant="solo-filled"
                    density="compact"
                    clear-icon="mdi-close"
                    flat
                    clearable
                    rows="4"
                  ></v-textarea>
                </v-col>
                <v-col lg="12" cols="12">
                  <v-btn
                    color="primary"
                    variant="flat"
                    style="box-shadow: none !important"
                    height="40px"
                    width="100%"
                  >
                    {{ $t("form.send") }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12">
            <v-img src="../assets/images/contact.png" />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Inquiries.vue",

  setup() {
    const tab = ref(null);
    const dialog = ref(false);
    const date = new Date().toISOString().substr(0, 10);
    const payload = ref({
      reason: null,
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      details: "",
    });
    const { t } = useI18n();

    const reasons = computed(() => {
      return [{ title: t("1"), value: "1" }];
    });
    return { tab, dialog, date, reasons, payload };
  },
});
</script>
