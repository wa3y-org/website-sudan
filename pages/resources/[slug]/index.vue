<template>
  <div>

    <v-container class="pb-16">
      <v-row>
        <v-col>
          <p class="pt-6 text-center text-indigo">
            <nuxt-link to="/resources">
              back to resources
            </nuxt-link>
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 class="text-center py-8">
            Title of the resource
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex align-center justify-center fill-height">
            <iframe style="width: 95%; aspect-ratio: 16 / 9;" class="elevation-2 rounded-xl"
              src="https://www.youtube.com/embed/cMz5jX373HQ?si=xa8K1ybUHDnT2CWh" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </v-col>
      </v-row>
      <v-row class="mx-0 pa-0 my-16">
        <v-col>
          <div v-for="i in 2">
            <h1>Some Header in the article</h1>
            <p class="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
              commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
              tempora dicta. At voluptas iure alias minus necessitatibus?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
              commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
              tempora dicta. At voluptas iure alias minus necessitatibus?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
              commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
              tempora dicta. At voluptas iure alias minus necessitatibus?
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="py-6 text-center text-indigo">
            <nuxt-link to="/resources">
              back to resources
            </nuxt-link>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>