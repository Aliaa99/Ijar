<template>
  <section class="mt-12 py-6 deals_section">
    <v-container class="py-5">
      <v-row>
        <v-col lg="4" md="3" sm="3" xs="2" cols="12">
          <img width="100%" src="../../assets/images/user.png" />
        </v-col>
        <v-col lg="8" md="9" sm="6" xs="10" cols="12">
          <article class=" px-4">
            <h2 class="text-36" style="color:#00ab84">{{ $t("home.deals.title") }}</h2>
            <p class="pt-2 text-18">{{ $t("home.deals.body") }} <span style="color:#00ab84">{{ $t("home.deals.body2") }}</span> <span>{{ $t("home.deals.body3") }}</span> <span style="color:#00ab84">{{ $t("home.deals.body4") }}</span></p>
          </article>

          <v-sheet  class="slide-style">
            <v-slide-group
              v-model="model"
              class="py-4"
              show-arrows

            >
              <v-slide-group-item
                v-for="n in slides"
                :key="n"
              >
                <v-card
                  :class="['ma-4', selectedClass]"
                  color="grey-lighten-1"
                  @click="toggle"
                >

                <v-card-title class="d-flex">
                  <v-avatar size="30" >
                    <v-img alt="icon" :src="n.src"></v-img>
                  </v-avatar>
                  <article class="pa-3">
                    <h2 class="text-primary-md">{{n.title}}</h2>
                    <p>{{n.text}} <br /> <span>{{n.text2}} </span> <span style="color:#00ab84">{{n.text3}}</span> </p>
                  </article>
                  <v-spacer />
                </v-card-title>
    
                  <!-- <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon
                        v-if="isSelected"
                        color="white"
                        icon="mdi-close-circle-outline"
                        size="48"
                      ></v-icon>
                    </v-scale-transition>
                  </div> -->
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-col>

        <!-- <v-col lg="2" cols="12">
          <section class="d-flex align-center justify-sm-end h-100">
            <v-btn color="primary" variant="flat" size="large" to="/">
              {{ $t("home.deals.contact") }}
            </v-btn>
          </section>
        </v-col> -->
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const model = ref(null);
    const slides = ref([
      { src: "src/assets/images/stats-1.png" ,title:'77.589' ,text:'صفقات تجارية ',text2:' لعام ',text3:'2024'},
      { src: "src/assets/images/stats-2.png" ,title:'105.258' ,text:'صفقات سكنية  ',text2:' لعام' ,text3:'2024'},
      { src: "src/assets/images/stats-3.png" ,title:'319.451' ,text:'صفقات تجارية ',text2:'لشهر',text3:'مايو'},
      { src: "src/assets/images/stats-4.png" ,title:'84.268' ,text:'صفقات سكنية ',text2:'لشهر ',text3:'مايو'},


    ]);
    return { model, slides };
  },
});
</script>
