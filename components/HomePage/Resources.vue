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
          <resources-page-resource-card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>