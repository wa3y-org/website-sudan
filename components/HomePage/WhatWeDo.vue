<template>
  <div class="what-we-do-section pb-12">
    <v-container class="mt-0 pt-0">
      <v-row class="mt-0 pt-0">
        <v-col class="py-8 px-4" cols="12" xl="4"  md="5" sm="12">
          <h1 class="text-h4 font-weight-bold">What We Do</h1>
          <hr class="mt-4 mb-6"
            style="width: 6rem; height: 0.4rem; background-color: #009edb; border: 0px; border-radius: 1rem;">

          <p class="my-4 text-justify">{{ whatWeDo.text }}</p>
          <ul class="px-8">
            <li v-for="pullet of whatWeDo.pullets">{{ pullet }}</li>
          </ul>
        </v-col>
        <v-col class="mt-0 pt-0">
          <v-carousel cycle color="black" height="520" class="mt-0 pt-0" :show-arrows="false" hide-delimiter-background>

            <v-carousel-item v-for="(item, i) in whatWeDo['carousel-items']" :key="item.src + i">
              <v-img :src="item.src" cover style="width: 100%; height: 25rem;"></v-img>
              <p class="ma-2 text-h6 font-weight-black">{{ item.text }}</p>
              <hr class="mt-2 mb-6"
                style="width: 6rem; height: 0.3rem; background-color: #959595; border: 0px; border-radius: 1rem;">

            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const whatWeDo = {
  text: `
  Our work priorities from 2024 to 2027:
  `,
  pullets: [
    'Supporting Sudanese communities inside and outside Sudan humanitarianly, socially and legally through direct and indirect interventions.',
    'Contributing to stopping the war in Sudan, building peace, and promoting peaceful coexistence',
    'Strengthening modern civil society and enhancing processes of resistance to the classification of Sudanese civil space.',
    'Building and strengthening regional, local and international partnerships',
  ],
  'carousel-items': [
    // {
    //   src: '/images/youth capacity.jpeg',
    //   text: 'Represents Something',
    // },
    {
      src: '/images/society.jpeg',
      text: 'Represents Something',

    },
    {
      src: '/images/training.jpeg',
      text: 'Represents Something',

    },
    {
      src: '/images/peace.jpeg',
      text: 'Represents Something',

    },
  ]

}
</script>

<style scoped>
.what-we-do-section {
  background-color: #e4effb;
}
</style>