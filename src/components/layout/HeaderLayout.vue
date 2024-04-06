<template>
  <div>
    <!-- toolbar -->
    <v-toolbar
      id="header"
      clipped-left
      class="hidden-sm-and-down p-fixed transparent  "
    >
      <v-container>
        <!-- {{ active }} -->
        <v-row>
          <v-col cols="1">
            <v-toolbar-title class="mt-2">
              <router-link to="/">
                <v-img src="../../assets/images/logo.png" />
              </router-link>
            </v-toolbar-title>
          </v-col>

          <v-col
            lg="9"
            md="8"
            cols="8"
            class="d-flex justify-center"
            align-self="center"
          >
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
          <v-col lg="2" cols="3" class="d-flex align-center justify-end">
            <v-btn class="bg-primary" to="/login">
              {{ $t("header.login") }}
            </v-btn>
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
          <v-list-item>
            <v-btn class="bg-primary" to="/login">
              {{ $t("header.login") }}
            </v-btn>
            <slot />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: auto">
        <div class="mobile-style pt-5" id="header2">
          <v-row justify="space-between">
            <v-col cols="2">
              <img
                src="../../assets/images/logo.png"
                class="pr-5"
                style="width: 100px"
              />
            </v-col>

            <v-col cols="2" >
              <v-btn color="primary" @click.stop="drawer = !drawer">
                <v-icon class="hidden-md-and-up" icon="mdi-menu" size="large">
                </v-icon>
              </v-btn>
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
        {
          title: t("header.reports"),
          go: t("/reports"),
        },
        {
          title: t("header.inquiries"),
          go: t("/inquiries"),
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
    return { t, items, drawer, active };
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
