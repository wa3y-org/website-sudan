<template>
  <div class="intro ma-0 pa-0">
    <v-container fluid class="mb-8 pa-0">
      <v-row class="ma-0 pa-0">
        <v-col class="py-16 px-8" cols="12" xl="6" lg="6" md="6">
          <div class="mx-4 my-16" :class="mdAndUp ? 'd-flex align-end justify-end' : ''
            ">
            <div class="d-inline-block" style="max-width: 580px;">
              <h1 class="text-h2 font-weight-bold">
                <span class="text-indigo font-weight-black">Wa3y</span>
                is changing the way people think
              </h1>
              <p class="text-justify mt-8">
                Waey Association ( Organization later) is a non-governmental organization established on 2017,
                  to educate and raise awareness of our societies towards  varying rights and culture issues
                   such as nationalism, human rights, democracy, active citizen roles;
                    sponsoring of creative thinking, strengthening of cultural and ethnic diversity,
                     fighting violence and negative habits as well as launching social campaigns and providing support
                      and raising the capacity of youth and women to take an active roles with their communities;
                       civil society organizations and government institutions.
              </p>
              <p class="text-center mt-14">
                <v-btn to="/contact-us" color="primary" size="x-large">Contact us</v-btn>
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="py-16 px-8 logo-side" v-if="mdAndUp">
          <div class="d-flex align-center fill-height">
            <v-img class="d-inline-block rounded-xl" src="@/assets/images/logo.png" height="300" width="300"></v-img>
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