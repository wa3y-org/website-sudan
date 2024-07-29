<template>
  <v-container class="my-16">
    <v-row>
      <v-col>
        <p class="text-h6 text-center my-16">
          Explore our resource library to learn more about PRM best practices. Access ebooks, case studies, templates,
          expert
          insights, and more.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-center mb-8">
          <v-chip v-for="(tag, i) of tags" :key="tag + i" size="large" color="indigo" class="ma-4 px-6">{{ tag }}</v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col cols="12" v-for="j in 6" xs="12" sm="12" md="6" lg="4" xxl="3">
        <resources-page-resource-card />
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col>
        <div class="text-center">

          <v-btn color="primary" size="x-large">Load More</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const tags = ["videos", "podcasts", "book", "report", "others"];
</script>

<style></style>