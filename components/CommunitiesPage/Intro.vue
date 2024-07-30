<template>
  <div class="intro ma-0 pa-0">
    <v-container fluid class="mb-8 pa-0">
      <v-row class="ma-0 pa-0">
        <v-col class="py-16 px-8" cols="12" xl="6" lg="6" md="6">
          <div class="mx-4 my-16" :class="mdAndUp ? 'd-flex align-end justify-end' : ''
            ">
            <div class="d-inline-block" style="max-width: 580px;">
              <h1 class="text-h2 font-weight-bold">
                
                We Have a Stunning Community
              </h1>
              <p class="text-justify mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit tempora accusamus, 
                suscipit sed ipsa dignissimos a, consectetur, minima numquam incidunt 
                corrupti quasi doloremque? Aspernatur similique atque officiis odit nisi.
              
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit tempora accusamus, 
                suscipit sed ipsa dignissimos a, consectetur, minima numquam incidunt 
                corrupti quasi doloremque? Aspernatur similique atque officiis odit nisi.
              </p>

            </div>
          </div>
        </v-col>

        <v-col class="py-16 px-8 logo-side" v-if="mdAndUp">
          <div class="d-flex align-center fill-height">
            <v-img class="d-inline-block rounded-xl" src="@/assets/images/communities.png" height="300"
              width="300"></v-img>
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
  background-color: #66BB6A;
  color: white;
}

.logo-side {
  background-color: #5C76E5;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
}</style>