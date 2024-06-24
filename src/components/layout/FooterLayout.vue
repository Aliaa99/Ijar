<template>
    <footer class="text-center py-7">
        <div class="footer-links">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <div>
                            <v-img src="../../assets/images/logo.png"/>
                            <span>المؤشر الايجاري</span>      
                        </div>
                    </v-col>
                    <v-col cols="8" offset="2">
                      <v-row>
                        <v-col cols="4">
                            <v-list>
                                <v-list-subheader>{{$t("footer.links.relation")}}</v-list-subheader>
                          
                                <v-list-item
                                  v-for="(item, i) in items"
                                  :key="i"
                                  :value="item"
                                  color="primary"
                                  rounded="xl"
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
                        <v-col cols="4">
                            <v-list>
                                <v-list-subheader>{{$t("footer.links.reborts")}}</v-list-subheader>
                          
                                <v-list-item
                                  v-for="(item, i) in secitems"
                                  :key="i"
                                  :value="item"
                                  color="primary"
                                  rounded="xl"
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
                        <v-col cols="4">
                            <v-list>
                                <v-list-subheader>{{$t("footer.links.help")}}</v-list-subheader>
                          
                                <v-list-item
                                  v-for="(item, i) in thirditems"
                                  :key="i"
                                  :value="item"
                                  color="primary"
                                  rounded="xl"
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
          <v-col cols="6">
            <p class="text-15 py-3">{{ $t('footer.text') }} @2024</p>
          </v-col>
          <v-col cols="6">
            <!-- <v-img src="../../assets/images/contact.png"/> -->
          </v-col>
        </v-row>
      </v-container>
      </div>

    </footer>
</template>

<script>
import { defineComponent, computed} from "vue";
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
        }
       
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

    
    
    return { t, items ,secitems ,thirditems};
  },
});



</script>
    