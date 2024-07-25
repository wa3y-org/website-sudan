<template>
  <div class="partners-section py-16">
    <h1 class="text-h2 text-center my-8">
      our partners
    </h1>

    <div class="d-flex justify-center align-center">
      <div class="mx-auto text-center d-inline-block" style="max-width: calc(100vw - 50px);">
        <v-slide-group v-model="model" class="pa-4 mx-auto" selected-class="bg-success" show-arrows center-active> 
          <v-slide-group-item v-for="(partner, i) of partners" :key="i + partner.link"
            v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="transparent" flat :class="['mt-4 mx-8', selectedClass]" height="200" width="200" @click="toggle">
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <span v-if="isSelected" size="48" class="font-weight-black text-indigo">{{ partner.name }}</span>
                  <v-icon color="#12095a" size="150">{{partner.Logo}}</v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
const model = ref(null)

const partners = [
  { name: 'Google', Logo: 'mdi-google', link: 'https://google.com' },
  { name: 'Facebook', Logo: 'mdi-facebook', link: 'https://google.com' },
  { name: 'Youtube', Logo: 'mdi-youtube', link: 'https://google.com' },
  { name: 'Instagram', Logo: 'mdi-instagram', link: 'https://google.com' },
  { name: 'UN', Logo: 'mdi-earth', link: 'https://google.com' },
];
</script>

<style></style>