<template>
  <div class="py-16" style="background-color: white;">
    <div class="text-center mt-8">
      <h1 class="text-h2">
        Resources
      </h1>
      <p class="my-8">
        Rapidly find all the publications, research studies, institutional publications, videos…
      </p>
    </div>
    <v-container>
      <v-row >
        <v-col cols="12" v-for="j in 6" xs="12" sm="12" md="6" lg="4" xxl="3">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card v-bind="props" :elevation="isHovering ? 8 : 2" flat min-height="300" class="mb-8">
                <v-img src="/public/images/blog_1.jpeg" height="200" cover></v-img>
                <div class="ma-4">
                  <v-chip density="compact" variant="tonal" class="mx-1" color="primary">Video</v-chip>
                </div>
                <v-card-title class="font-weight-black text-h6 text-wrap">
                  <p class="d-flex align-center text-wrap mt-2">
                    <!-- <span class="d-inline-block pa-0 ma-0"
                      style="width: 0.3rem; height: 2.2rem; background-color: #da291c; border: 0px; border-radius: 1rem;" /> -->
                    <span class="text-wrap mx-4">
                      Title of publication
                    </span>
                  </p>
                  <br>

                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  published in July 2024
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>