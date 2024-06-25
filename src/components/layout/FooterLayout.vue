<template>
  <footer class="text-center pt-7">
    <div class="footer-links">
      <v-container>
        <v-row>
          <v-col md="4" sm="12" cols="12">
            <div class="logo-footer">
              <v-img height="60px" src="../../assets/images/f3.png" />
              <span>المؤشر الايجاري</span>
            </div>
          </v-col>
          <v-col md="8" sm="12" cols="12">
            <v-row>
              <v-col md="4" sm="12" cols="12">
                <v-list>
                  <v-list-subheader>{{
                    $t("footer.links.relation")
                  }}</v-list-subheader>

                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="primary"
                    rounded="xl"
                    class="py-0"
                    density="compact"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <router-link to="/">
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col md="4" sm="12" cols="12">
                <v-list>
                  <v-list-subheader>{{
                    $t("footer.links.reborts")
                  }}</v-list-subheader>

                  <v-list-item
                    v-for="(item, i) in secitems"
                    :key="i"
                    :value="item"
                    color="primary"
                    rounded="xl"
                    class="py-0"
                    density="compact"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <router-link to="/">
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col md="4" sm="12" cols="12">
                <v-list>
                  <v-list-subheader>{{
                    $t("footer.links.help")
                  }}</v-list-subheader>

                  <v-list-item
                    v-for="(item, i) in thirditems"
                    :key="i"
                    :value="item"
                    color="primary"
                    rounded="xl"
                    class="py-0"
                    density="compact"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <router-link to="/">
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bottom-footer">
      <v-container>
        <v-row>
          <v-col md="6" sm="12" cols="12" class="d-flex align-center">
            <p class="text-15">{{ $t("footer.text") }} @2024</p>
          </v-col>
          <v-col md="6" sm="12" cols="12">
            <section class="d-flex">
              <v-img
                width="60px"
                height="60px"
                src="../../assets/images/f2.png"
              />
              <v-img src="../../assets/images/f1.png" />
            </section>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
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
          text: t("footer.links.relations.ijar"),
          icon: "mdi-arrow-right",
        },
        {
          text: t("footer.links.relations.public"),
          icon: "mdi-arrow-right",
        },
      ];
    });
    const secitems = computed(() => {
      return [
        {
          text: t("footer.links.relations.reborts"),
          icon: "mdi-arrow-right",
        },
      ];
    });
    const thirditems = computed(() => {
      return [
        {
          text: t("footer.links.relations.ask"),
          icon: "mdi-arrow-right",
        },
        {
          text: t("footer.links.relations.service"),
          icon: "mdi-arrow-right",
        },
      ];
    });

    return { t, items, secitems, thirditems };
  },
});
</script>
