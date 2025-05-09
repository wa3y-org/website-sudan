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
                Waey's Communities and Social Club:
                The war in Sudan has produced a bitter reality, the most obvious manifestation of which is the asylum
                and displacement of huge numbers of Sudanese in search of safety and stability.
                Unfortunately, their conditions in the asylum and displacement sites were extremely harsh. They came
                carrying heavy burdens of pain, loss and shock, losing their means of livelihood and being destitute,
                fleeing to an unknown and dark future.
              </p>

            </div>
          </div>
        </v-col>

        <v-col class="pa-0 ma-0 logo-side" v-if="mdAndUp">
          <v-card class="fill-height" rounded="0">
            <v-img class="d-inline-block" height="100%" width="100%" src="@/assets/images/coveeer.jpeg" cover></v-img>
          </v-card>
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
}
</style>