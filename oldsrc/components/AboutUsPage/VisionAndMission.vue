<template>
  <div class="section-container pa-0">
    <v-container fluid class="ma-0 pa-0">
      <v-row class="ma-0 pa-0">
        <v-col class="py-16 px-8 vision-section" cols="12" xl="6" lg="6" md="6">
          <div class="mx-4 my-16" :class="mdAndUp ? 'd-flex align-end justify-end' : ''
            ">
            <div class="d-inline-block text-white" style="max-width: 580px;">
              <h1 class="text-h2 font-weight-black text-start">
                Vision
              </h1>
              <p class="text-justify mt-8">
                “Inspired citizens; enjoying all their rights, and proud of
                their cultures and their identity”
              </p>
            </div>
          </div>
        </v-col>

        <v-col class="py-16 px-8 mission-section">
          <div class="mx-4 my-16" :class="mdAndUp ? 'd-flex align-start justify-start' : ''">
            <div class="d-inline-block text-black" style="max-width: 580px;">
              <h1 class="text-h2 font-weight-black text-end">
                Mission
              </h1>
              <p class="text-justify mt-8">
                Waey is working to promote and develop the
                Sudanese citizen's capacities to face challenges and
                problems on the way of building a bright future; that’s
                based on Human rights concepts; the human
                experiences; and Sudanese cultures; Waey also
                working to create a learning & dialogue environments,
                to insure citizen's active participation through
                organize the communities, promoting team work and
                team spirit, and by building effective partnerships and
                alliances to achieve its vision.
              </p>
            </div>
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

<style>
.section-container {
  background: rgb(149, 117, 205);
  background: -moz-linear-gradient(135deg, rgba(149, 117, 205, 1) 0%, rgba(209, 196, 233, 0.6943509825805323) 100%);
  background: -webkit-linear-gradient(135deg, rgba(149, 117, 205, 1) 0%, rgba(209, 196, 233, 0.6943509825805323) 100%);
  background: linear-gradient(135deg, rgba(149, 117, 205, 1) 0%, rgba(209, 196, 233, 0.6943509825805323) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9575cd", endColorstr="#d1c4e9", GradientType=1);
}

.vision-section {
  background: rgb(179, 157, 219);
  background: -moz-linear-gradient(135deg, rgba(179, 157, 219, 1) 0%, rgba(81, 45, 168, 1) 100%);
  background: -webkit-linear-gradient(135deg, rgba(179, 157, 219, 1) 0%, rgba(81, 45, 168, 1) 100%);
  background: linear-gradient(135deg, rgba(179, 157, 219, 1) 0%, rgba(81, 45, 168, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b39ddb", endColorstr="#512da8", GradientType=1);
}

.mission-section {
  background: rgb(237, 231, 246);
  background: -moz-linear-gradient(135deg, rgba(237, 231, 246, 1) 0%, rgba(126, 87, 194, 0.8596170890231092) 100%);
  background: -webkit-linear-gradient(135deg, rgba(237, 231, 246, 1) 0%, rgba(126, 87, 194, 0.8596170890231092) 100%);
  background: linear-gradient(135deg, rgba(237, 231, 246, 1) 0%, rgba(126, 87, 194, 0.8596170890231092) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ede7f6", endColorstr="#7e57c2", GradientType=1);
}
</style>