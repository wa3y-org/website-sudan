<template>
  <div class="our-org-in-numbers-section">
    <div class="py-16 content">

      <h2 class="mt-16 my-4 mb-16 text-h3 text-center">
        Wa3y In Numbers
      </h2>
      <v-container class="my-16">
        <v-row>
          <v-col v-for="item of counterItems" cols="12" xl="4" lg="4" md="4" sm="12" xs="12" class="mb-12">
            <div class="text-center py-12 ma-2 rounded-xl" style="border: 2px solid white;">
              <ClientOnly>
                <AnimatedCounter :value="item.count" :duration="counterDuration" class="text-h1 font-weight-black" />
              </ClientOnly>
              <p class="text-h3 mt-2" >{{ item.title }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
const counterDuration = 1000;

const counterItems = [
  {
    title: "Projects",
    count: 500
  },
  {
    title: "Activities",
    count: 2000
  },
  {
    title: "Partnership",
    count: 20
  },
];
</script>

<style scoped>
.our-org-in-numbers-section {
  background-image: url('/public/images/back.avif');
  background-position: center center;
  background-size: cover;
}

.our-org-in-numbers-section .content {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.65);
  color: white;
}
</style>