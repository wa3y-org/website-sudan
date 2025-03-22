<template>
  <div class="testimonials-sections py-16">
    <h5 class="text-h2 my-12 text-center">
      What People Say About Wa3y
    </h5>
    <div class="d-flex justify-center align-center">
      <div class="mx-auto text-center d-inline-block" style="max-width: calc(100vw - 50px);">
        <v-slide-group v-model="model" class="pa-4 mx-auto" selected-class="bg-success" show-arrows center-active>
          <v-slide-group-item v-for="(testimonial, i) of testimonials" :key="i + testimonial.avatar"
            v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['my-4 mx-8', selectedClass]" height="500" width="400" rounded="xl">
              <v-card-title>
                <v-avatar size="160" class="mt-4">
                  <div>
                    <img :src="testimonial.avatar" width="200" height="200" cover alt="alt">
                  </div>
                </v-avatar>
                <p class="font-weight-bold mt-4 text-indigo-lighten-2">
                  {{ testimonial.name }}
                </p>
                <v-card-text class="text-justify px-4 my-4 text-wrap">
                  <v-icon>mdi-format-quote-open</v-icon>
                  {{ testimonial.text }}
                  <v-icon>mdi-format-quote-close</v-icon>
                </v-card-text>
                <v-card-actions class="pb-4">
                  <v-spacer></v-spacer>
                  <div>
                    <h1 class="text-h5 font-weight-black text-success">
                      {{ testimonial.institution }}
                    </h1>
                    <p class="font-weight-bold mt-4 text-green-lighten-2">
                      {{ testimonial.position }}
                    </p>
                  </div>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card-title>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const model = ref(null);

const testimonials = [
  {
    avatar: '/images/mhmdaziz.jpeg',
    name: 'Mohammed Abd Aziz',
    text: `
      Through my experience with Waey, I felt the immense care they provide, making you feel as 
      though you're part of their family. We never asked for training or consulting services without 
      receiving a warm welcome and great support.
    `,
    institution: 'Gornalist',
    position: ''
  },
  {
    avatar: '/images/rsheed.jpeg',
    name: 'Alrasheed Ibrahim',
    text: `
      Waey Organization is a vital entity that contributes to enhancing awareness of social issues
       and mental health. It has maintained neutrality in the ongoing war in Sudan, 
       believing that community dialogue is the only way to stop the war.
    `,
    institution: 'Activist',
    position: ''
  },
  {
    avatar: '/images/mudather.jpeg',
    name: 'Hamdok The Founder',
    text: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eum, 
      ducimus ut similique excepturi doloribus expedita sapiente temporibus commodi, 
      aliquam atque dolor velit! Aut eum tenetur ratione saepe eveniet laboriosam!
    `,
    institution: 'Sudan',
    position: 'Founder'
  },
];
</script>

<style scoped>
.testimonials-sections {
  background-color: #b9f6ca;
}
</style>