<template>
  <div>
    <!-- toolbar -->
    <v-toolbar
      id="header"
      clipped-left
      class="hidden-sm-and-down p-fixed transparent"
    >
      <v-container>
        <!-- {{ active }} -->
        <v-row>
          <v-col cols="3" lg="3" md="3">
            <v-toolbar-title class="mt-2">
              <v-row>
                <v-col cols="5">
                  <router-link to="/">
                    <v-img src="../../assets/images/logo.png" />
                  </router-link>
                </v-col>
                <v-col cols="7">
                  <span class="logotitle">المؤشر الايجاري</span>
                </v-col>
              </v-row>
            </v-toolbar-title>
          </v-col>

          <v-col lg="8" md="8" cols="8" class="d-flex" align-self="center">
            <v-toolbar-items>
              <v-list class="d-flex py-0 transparent">
                <v-list-item
                  flat
                  :to="item.go"
                  v-for="(item, i) in items"
                  :key="i"
                  >{{ item.title }}</v-list-item
                >
              </v-list>
            </v-toolbar-items>
          </v-col>
          <v-col lg="1" cols="1" class="d-flex align-center justify-end">
            <!-- <v-btn color="primary" variant="flat" to="/login">
              {{ $t("header.login") }}
            </v-btn> -->
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>

    <!-- navigation  -->

    <v-layout class="hidden-md-and-up">
      <v-navigation-drawer class="nav-dr" v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-list-item
            :to="item.go"
            v-for="(item, i) in items"
            :key="i"
            :title="item.title"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: auto">
        <div class="mobile-style pt-5" id="header2">
          <v-row justify="space-between">
            <v-col cols="8">
              <img
                src="../../assets/images/logo.png"
                class="pr-5"
                style="width: 100px"
              />
              <span class="logotitle mx-5">المؤشر الايجاري</span>
            </v-col>

            <v-col cols="2" class="lang-btn-style">
              <slot />
            </v-col>

            <v-col cols="2">
              <v-menu transition="scale-transition" v-model="menu">
                <template v-slot:activator="{ props }">
                  <v-btn color="primary" class="menu-btn" style="min-width: 36px" v-bind="props">
                    <v-icon
                      class="hidden-md-and-up"
                      :icon="menu ? 'mdi-close' : 'mdi-menu'"
                    />
                  </v-btn>
                </template>

                <v-list class="redponsive-menu py-0">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.go"
                    density="compact"
                  >
                    <v-list-item-title
                      ><small>{{ item.title }}</small></v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>

              <!-- <v-btn color="primary" @click.stop="drawer = !drawer">
                <v-icon class="hidden-md-and-up" icon="mdi-menu" size="large" />
              </v-btn> -->
            </v-col>
          </v-row>
        </div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const drawer = ref(null);
    const active = ref(false);
    const menu = ref(false);
    const items = computed(() => {
      return [
        {
          title: t("header.home"),
          go: "/",
        },
        {
          title: t("header.pointer"),
          go: "/pointer",
        },
        {
          title: t("header.comparison"),
          go: "/comparison",
        },
        {
          title: t("header.search"),
          go: "/search",
        },
        // {
        //   title: t("header.inquiries"),
        //   go: t("/inquiries"),
        // },
        {
          title: t("header.reports"),
          go: t("/reports"),
        },
        {
          title: t("header.Services"),
          go: t("/Services"),
        },
      ];
    });

    // const headerBg = () => {
    //   console.log(window.scrollY, "yy");

    // if (window.scrollY > 50) {
    //   const element = document.getElementsByClassName("v-toolbar");
    //   element.style.backgroundColor = "red";
    // }

    // if (
    //   document.body.scrollTop > 50 ||
    //   document.documentElement.scrollTop > 50
    // ) {
    //   document.getElementById("header").style.background = "transparent";
    // } else {
    //   document.getElementById("header").style.background = "red";
    // }

    // window.document.onscroll = () => {
    //   let navBar = document.getElementsByClassName("header");
    //   if (window.scrollY > navBar.offsetTop) {
    //     active.value = true;
    //   } else {
    //     active.value = false;
    //   }
    // };
    // };

    // const toggleNavClass = () => {
    //   if (active.value == false) {
    //     return "nav";
    //   } else {
    //     return "sticky-nav";
    //   }
    // };

    // onMounted(async () => {
    //   await headerBg();
    // });

    // watch(
    //   window.scrollY,
    //   () => {
    //     headerBg();
    //   },
    //   { deep: true, immediate: true }
    // );
    return { t, items, drawer, active, menu };
  },
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("changecolor");
    document.getElementById("header2").classList.add("changecolor");
  } else {
    document.getElementById("header").classList.remove("changecolor");
    document.getElementById("header2").classList.remove("changecolor");
  }
}
</script>
