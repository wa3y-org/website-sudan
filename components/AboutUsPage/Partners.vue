<template>
  <div class="partners-section py-16">
    <h1 class="text-h2 text-center my-8">
      our partners
    </h1>

    <div class="d-flex justify-center align-center">
      <div class="mx-auto text-center d-inline-block" style="max-width: calc(100vw - 50px);">
        <v-slide-group v-model="model" class="pa-0 mx-auto" selected-class="bg-success" show-arrows center-active>
          <v-slide-group-item v-for="(partner, i) of partners" :key="i + partner.link"
            v-slot="{ isSelected, toggle, selectedClass }">
            <a :href="partner.link" target="_blank">
              <v-card color="transparent" rounded="circle" :class="['elevation-4 my-4 mx-8 pa-0', selectedClass]" height="200"
                width="200">
                <div class="ma-0 pa-0 d-inline-block">
                  <v-img height="200" cover width="200" class="elevation-4  ma-0"
                    :src="partner.image"></v-img>
                </div>
                
              </v-card>
            </a>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
const model = ref(null)

const partners = [
  { name: 'National Endowment for Democracy (NED)', image: '/images/ned.jpeg', Logo: 'mdi-google', link: 'https://www.ned.org/' },
  { name: 'Life and Peace Institute “LPI”', image: '/images/life.jpeg', Logo: 'mdi-facebook', link: 'https://life-peace.org/' },
  { name: 'Norwegian People Aid “NPA”', image: '/images/napid.jpg', Logo: 'mdi-youtube', link: 'https://www.npaid.org/' },

];
</script>

<style></style>