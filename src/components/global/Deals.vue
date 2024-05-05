<template>
  <section class="my-12 py-6 deals_section">
    <v-container class="py-5">
      <v-row>
        <v-col lg="3" md="3" sm="3" xs="2" cols="12">
          <img width="100%" src="../../assets/images/user.png" />
        </v-col>
        <v-col lg="9" md="9" sm="6" xs="10" cols="12">
          <article>
            <h2 class="text-36">{{ $t("home.deals.title") }}</h2>
            <p class="pt-2 text-18">{{ $t("home.deals.body") }}</p>
          </article>

          <v-sheet  class="slide-style">
            <v-slide-group
              v-model="model"
              class="pa-4"
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
                  <article>
                    <span class="text-primary-md">{{n.title}}</span>
                    <br />
                    <span>{{n.text}}</span>
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
      { src: "src/assets/images/stats-1.png" ,title:'15.55' ,text:'ppppppppp'},
      { src: "src/assets/images/stats-2.png" ,title:'15.55' ,text:'ppppppppp'},
      { src: "src/assets/images/stats-3.png" ,title:'15.55' ,text:'ppppppppp'},
      { src: "src/assets/images/stats-4.png" ,title:'15.55' ,text:'ppppppppp'},


    ]);
    return { model, slides };
  },
});
</script>
