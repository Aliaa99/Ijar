<template>
  <section class="d-flex align-center justify-center">
    <!-- tabs -->
    <v-container class="pt-12">
      <v-card
        class="my-12 pointer-section py-sm-12 px-sm-12"
        min-height="320px"
        elevation="0"
      >
        <v-list class="py-0" lines="two">
          <v-list-item :title="$t('pointer.title')">
            <template v-slot:prepend>
              <v-avatar size="54" class="pa-3" color="#F9A23B">
                <v-img src="../../src/assets/images/numbers/03.png" />
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
        <v-card class="filter-card py-8 px-10" elevation="0">
          <v-row>
            <v-col lg="10" md="12" sm="12" cols="12">
              <v-row>
                <v-col lg="3" md="6" sm="6" cols="12">
                  <v-label>{{ $t("select.region.label") }}</v-label>
                  <v-select
                    :items="regions"
                    v-model="payload.region"
                    :placeholder="$t('select.region.placeholder')"
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
                <v-divider
                  vertical
                  class="hidden-xs mt-3"
                  style="height: 80px"
                ></v-divider>
                <v-col lg="3" md="6" sm="6" cols="12">
                  <v-label>{{ $t("select.city.label") }}</v-label>
                  <v-select
                    :items="cities"
                    v-model="payload.city"
                    :placeholder="$t('select.city.placeholder')"
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
                <v-divider
                  vertical
                  class="hidden-md-and-down mt-3"
                  style="height: 80px"
                ></v-divider>
                <v-col lg="3" md="6" sm="6" cols="12">
                  <v-label>{{ $t("select.district.label") }}</v-label>
                  <v-select
                    :items="districts"
                    v-model="payload.district"
                    :placeholder="$t('select.district.placeholder')"
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
                <v-divider
                  vertical
                  class="hidden-xs mt-3"
                  style="height: 80px"
                ></v-divider>
                <v-col lg="3" md="6" sm="6" cols="12">
                  <v-label>{{ $t("select.from.label") }}</v-label>

                  <v-text-field
                    v-model="payload.from"
                    flat
                    type="date"
                    placeholder="من"
                    density="compact"
                    variant="solo-filled"
                    pattern="\d{4}-\d{2}-\d{2}"
                  ></v-text-field>
                  <!-- <VueDatePicker v-model="payload.from"></VueDatePicker> -->
                </v-col>
              </v-row>
            </v-col>
            <v-col
              lg="2"
              md="12"
              sm="12"
              cols="12"
              class="d-flex align-end justify-center"
            >
              <v-btn
                color="primary"
                variant="flat"
                style="box-shadow: none !important"
                height="40px"
              >
                {{ $t("search.search") }}
                <template v-slot:prepend>
                  <v-icon color="white">mdi-magnify</v-icon>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
      <v-card class="filter-tabs pa-4">
        <v-tabs v-model="tab" color="primary">
          <section class="filter-tabs-btns">
            <v-tab value="one">{{ $t("pointer.tabs.housing") }}</v-tab>
            <v-tab value="two">{{ $t("pointer.tabs.commercial") }}</v-tab>
          </section>
          <section class="d-flex align-center">
            <v-chip
              variant="outlined"
              size="small"
              v-if="payload.region != null"
            >
              {{
                $t("select.region.title") +
                " " +
                $t(`select.region.${payload.region}`)
              }}
            </v-chip>
            <v-chip
              class="ms-2"
              variant="outlined"
              size="small"
              v-if="payload.city != null"
            >
              {{
                $t("select.city.title") +
                " " +
                $t(`select.city.${payload.city}`)
              }}
            </v-chip>
            <v-chip
              variant="outlined"
              class="ms-2"
              size="small"
              v-if="payload.district != null"
            >
              {{
                $t("select.district.title") +
                " " +
                $t(`select.district.${payload.district}`)
              }}
            </v-chip>
          </section>
        </v-tabs>

        <v-card-text class="px-0">
          <v-divider class="mb-8"></v-divider>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-row>
                <v-col lg="6" md="7" sm="12" cols="12">
                  <!-- table -->
                  <v-table>
                    <thead>
                      <tr>
                        <th>{{ $t("table.thead.kind") }}</th>
                        <th>{{ $t("table.thead.price") }}</th>
                        <th>{{ $t("table.thead.change") }}</th>
                        <th>{{ $t("table.thead.dealsnum") }}</th>
                        <th>{{ $t("table.thead.chart") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in 3" :key="item">
                        <td>
                          <section class="d-flex">
                            <v-icon class="flat">mdi-arrow-top-right</v-icon>
                            <p>
                              <span>{{ $t("table.tbody.kind") }}</span>
                              <br />
                              <span class="gray-span">{{
                                $t("table.tbody.detales")
                              }}</span>
                            </p>
                          </section>
                        </td>
                        <td class="text-center">
                          {{ $t("table.tbody.price") }}
                        </td>
                        <td class="text-center">
                          {{ $t("table.tbody.change") }}
                        </td>
                        <td class="text-center">
                          {{ $t("table.tbody.dealsnum") }}
                        </td>
                        <td class="text-center">
                          <v-btn
                            @click="dialog = true"
                            class="table-icon"
                            density="compact"
                            icon="mdi-chart-line-variant"
                          ></v-btn>
                          <v-btn
                            class="table-icon"
                            density="compact"
                            icon="mdi-map-marker"
                          ></v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <!-- table -->
                </v-col>
                <v-col lg="6" md="5" sm="12" cols="12">
                  <section class="d-flex justify-space-between pointer-chart">
                    <p>شقة</p>
                    <div>
                      <span>
                        <v-icon color="#5A55D2" size="x-small"
                          >mdi-circle</v-icon
                        >
                        عدد الصفقات
                      </span>
                      <span class="ms-4">
                        <v-icon color="#00DEA3" size="x-small"
                          >mdi-circle</v-icon
                        >
                        متوسط الأسعار
                      </span>
                    </div>
                  </section>
                  <section style="max-height: 160px">
                    <PointerChart />
                  </section>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="two">
              <v-row>
                <v-col lg="6" md="7" sm="12" cols="12">
                  <!-- table -->
                  <v-table>
                    <thead>
                      <tr>
                        <th>{{ $t("table.thead.kind") }}</th>
                        <th>{{ $t("table.thead.price") }}</th>
                        <th>{{ $t("table.thead.change") }}</th>
                        <th>{{ $t("table.thead.dealsnum") }}</th>
                        <th>{{ $t("table.thead.chart") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in 3" :key="item">
                        <td>
                          <section class="d-flex">
                            <v-icon class="flat">mdi-arrow-top-right</v-icon>
                            <p>
                              <span>{{ $t("table.tbody.kind") }}</span>
                              <br />
                              <span class="gray-span">{{
                                $t("table.tbody.detales")
                              }}</span>
                            </p>
                          </section>
                        </td>
                        <td class="text-center">
                          {{ $t("table.tbody.price") }}
                        </td>
                        <td class="text-center">
                          {{ $t("table.tbody.change") }}
                        </td>
                        <td class="text-center">
                          {{ $t("table.tbody.dealsnum") }}
                        </td>
                        <td class="text-center">
                          <v-btn
                            @click="dialog = true"
                            class="table-icon"
                            density="compact"
                            icon="mdi-chart-line-variant"
                          ></v-btn>
                          <v-btn
                            class="table-icon"
                            density="compact"
                            icon="mdi-map-marker"
                          ></v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <!-- table -->
                </v-col>
                <v-col lg="6" md="5" sm="12" cols="12">
                  <section class="d-flex justify-space-between pointer-chart">
                    <p>شقة</p>
                    <div>
                      <span>
                        <v-icon color="#5A55D2" size="x-small"
                          >mdi-circle</v-icon
                        >
                        عدد الصفقات
                      </span>
                      <span class="ms-4">
                        <v-icon color="#00DEA3" size="x-small"
                          >mdi-circle</v-icon
                        >
                        متوسط الأسعار
                      </span>
                    </div>
                  </section>
                  <section style="max-height: 160px">
                    <PointerChart />
                  </section>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-container>
  </section>

  <!-- pop up -->
  <v-dialog v-model="dialog" max-width="600">
    <v-card class="text-center pb-5">
      <template #title>
        <h6 class="mb-3">{{ $t("table.title") }}</h6>
      </template>
      <!-- table -->
      <v-table class="px-6">
        <thead class="pop-up-head">
          <tr>
            <th>{{ $t("table.thead.pricesrange") }}</th>
            <th>{{ $t("table.thead.price") }}</th>
            <th>{{ $t("table.thead.change") }}</th>
            <th>{{ $t("table.thead.dealsnum") }}</th>
          </tr>
        </thead>
        <tbody class="pop-up-body">
          <tr v-for="item in 3" :key="item">
            <td>
              <p>
                <span>{{ $t("table.tbody.pricesrange") }}</span>
              </p>
            </td>
            <td class="text-center">
              {{ $t("table.tbody.price") }}
            </td>
            <td class="text-center">
              {{ $t("table.tbody.change") }}
            </td>
            <td class="text-center">
              {{ $t("table.tbody.dealsnum") }}
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-btn
        class="v-dialog--close"
        icon="mdi-close"
        color="black"
        size="small"
        @click="dialog = false"
      ></v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import PointerChart from "@/components/global/charts/Pointer.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "PointerView",
  components: { PointerChart },

  setup() {
    const tab = ref(null);
    const dialog = ref(false);
    const date = new Date().toISOString().substr(0, 10);
    const payload = ref({
      region: null,
      city: null,
      district: null,
      from: null,
    });
    const { t } = useI18n();

    const regions = computed(() => {
      return [{ title: t("select.region.riyadh"), value: "riyadh" }];
    });
    const cities = computed(() => {
      return [{ title: t("select.city.kharj"), value: "kharj" }];
    });
    const districts = computed(() => {
      return [{ title: t("select.district.alsalam"), value: "alsalam" }];
    });

    return { tab, dialog, date, regions, cities, districts, payload };
  },
});
</script>
