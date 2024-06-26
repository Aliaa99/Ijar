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
            <p class="pt-2 text-18">{{ $t("home.deals.body") }} <span style="color:#00ab84">{{ $t("home.deals.body2") }}</span> <span>{{ $t("home.deals.body3") }}</span> <span class="serif" style="color:#00ab84">{{ $t("home.deals.body4") }}</span></p>
          </article>

          
          <v-carousel
          height="auto"
          show-arrows="hover"
          
          hide-delimiter-background
          class="px-4 py-4"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              height="100%"
            >
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">
                  <v-row>
                    <v-col cols="12" lg="3" md="6" sm="6" xs="12" v-for="(item, i) in slide" :key="i">
                      <v-card>
    
                    <v-card-title class="d-flex " >
                      <v-avatar size="52" class="mt-2" >
                        <v-img alt="icon" :src="item.src"></v-img>
                      </v-avatar>
                      <article >
                        <h2 class=" serif text-primary-md" style="line-height:1">{{item.title}}</h2>
                        <p>{{item.text}} <br />  <span class="serif" style="color:#00ab84">{{item.text3}}</span> </p>
                      </article>
                      <v-spacer />
                    </v-card-title>
        
                    </v-card>
    
                    </v-col>
                  </v-row>

                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      
        </v-col>

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
      [
      { src: "src/assets/images/stats-1.png" ,title:'77.589' ,text:'صفقات تجارية ',text2:' لعام ',text3:'2024'},
      { src: "src/assets/images/stats-2.png" ,title:'10.258' ,text:'صفقات سكنية  ',text2:' لعام' ,text3:'2024'},
      { src: "src/assets/images/stats-3.png" ,title:'39.451' ,text:'صفقات تجارية ',text2:'لشهر',text3:'مايو'},
      { src: "src/assets/images/stats-4.png" ,title:'84.268' ,text:'صفقات سكنية ',text2:'لشهر ',text3:'مايو'},
    ],
    [
      { src: "src/assets/images/stats-1.png" ,title:'77.589' ,text:'صفقات تجارية ',text2:' لعام ',text3:'2024'},
      { src: "src/assets/images/stats-2.png" ,title:'15.258' ,text:'صفقات سكنية  ',text2:' لعام' ,text3:'2024'},
      { src: "src/assets/images/stats-3.png" ,title:'39.451' ,text:'صفقات تجارية ',text2:'لشهر',text3:'مايو'},
      { src: "src/assets/images/stats-4.png" ,title:'84.268' ,text:'صفقات سكنية ',text2:'لشهر ',text3:'مايو'},
    ],

  ]);
    return { model, slides };
  },
});
</script>
