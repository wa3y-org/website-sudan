<template>
  <div class="intro">
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col class="py-16 px-8" cols="12" xl="6" lg="6" md="6">
          <div class="mx-4 my-16" :class="
            mdAndUp ? 'd-flex align-end justify-end' : ''
          ">
            <div class="d-inline-block" style="max-width: 580px;">
              <h1 class="text-h2 font-weight-bold">
                <span class="text-indigo font-weight-black">Wa3y</span>
                is changing the way people think
              </h1>
              <p class="text-justify mt-8">
                A Voluntary organization aimed at educating and raising awareness within our communities regarding rights,
                citizenship issues, and the active role citizens should undertake towards their society and nation, also
                fostering creative thinking, enhancing positive interaction with cultural and ethnic diversity, combating
                violence and negative customs, launching social campaigns, providing support, and enhancing the capacities
                of
                youth and women to undertake positive and effective roles in their communities, social organizations,
                professional sectors, and official state institutions.
              </p>
            </div>
          </div>
        </v-col>

        <v-col class="py-16 px-8 logo-side" v-if="mdAndUp">
          <div class="d-flex align-center fill-height">
            <v-img class="d-inline-block rounded-xl" src="@/assets/images/image.png" height="300" width="300"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
</script>

<style scoped>
.intro {
  background-color: #f9f1dd;
}

.logo-side {
  background-color: #12095a;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);

}
</style>