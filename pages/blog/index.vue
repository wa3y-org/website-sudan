<template>
  <div>
    <h1 class="text-h3 text-center font-weight-black pt-16 pb-8">
      Wa3y blog
    </h1>

    <v-container>
      <div class="d-flex justify-center align-center">
        <v-divider></v-divider>
        <span class="font-weight-bold text-h6 text-success mx-6">Pinned</span>
        <v-divider></v-divider>
      </div>
      <blog-page-pinned-article-card v-for="i in 1" :article="pinnedArticleExample1" />
      <div class="d-flex justify-center align-center mt-4">
        <v-divider></v-divider>
        <span class="font-weight-bold text-h6 text-brown mx-6">Articles</span>
        <v-divider></v-divider>
      </div>
      <v-row>
        <v-col cols="12" xxl="3" xl="4" lg="6" md="6" v-for="i in 4">
          <BlogPageArticleCard :article="pinnedArticleExample1" />
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
  </div>
</template>

<script>

</script>

<script lang="ts" setup>
import { Article } from "@/app/models/article";
const pinnedArticles = [];

const pinnedArticleExample1 = new Article();
pinnedArticleExample1.author = { name: "Ayman Nageeb" };
pinnedArticleExample1.title = "Does Aromatherapy Works for Sleep? Maybe, Here's What We Know";
pinnedArticleExample1.topic = { name: "Sleep Hygiene" };
pinnedArticleExample1.short_text = `
   Lorem ipsum dolor sit amet consectetur, 
   adipisicing elit. Sit fuga, 
   ipsa explicabo officiis corrupti eligendi repellendus est, 
   voluptatibus saepe voluptates magnam nihil tempora? 
   Ipsam facilis animi unde saepe, quisquam cumque.
`;
pinnedArticleExample1.updated = '2024-07-25'
pinnedArticleExample1.cover_image = '/images/visuel-sensibilisation.jpg'
</script>

<style></style>