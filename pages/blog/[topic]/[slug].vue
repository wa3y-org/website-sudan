<template>
  <div class="article-container">
    <div class="article-header py-16">
      <v-container fill-height class="my-8">
        <v-row class="fill-height">
          <v-col class="fill-height pt-8" fill-height>
            <div class="fill-height d-flex align-center" style="height: 100%;">
              <div>
                <p class="text-indigo font-weight-black">
                  {{ article.topic.name }}
                </p>
                <v-divider class="my-4"></v-divider>
                <p class="my-4 text-h5 font-weight-bold">
                  {{ article.title }}
                </p>
                <p class="text-justify">
                  {{ article.short_text }}
                </p>
                <p class="mt-4 text-grey">
                  {{ article.author.name }}
                  <span class="mx-2">-</span>
                  {{ article.updated }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-img cover height="400" :src="article.cover_image"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <article class="article-content py-16">
      <v-container>
        <v-row>
          <v-col>
            <h1>content</h1>
          </v-col>
        </v-row>
      </v-container>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { Article } from "@/app/models/article";

const article = new Article();
article.author = { name: "Ayman Nageeb" };
article.title = "Does Aromatherapy Works for Sleep? Maybe, Here's What We Know";
article.topic = { name: "Sleep Hygiene" };
article.short_text = `
   Lorem ipsum dolor sit amet consectetur, 
   adipisicing elit. Sit fuga, 
   ipsa explicabo officiis corrupti eligendi repellendus est, 
   voluptatibus saepe voluptates magnam nihil tempora? 
   Ipsam facilis animi unde saepe, quisquam cumque.
`;
article.updated = '2024-07-25'
article.cover_image = '/images/visuel-sensibilisation.jpg';

</script>

<style scoped lang="scss">
.article-header {
  background-color: #F3E7DB;
}
</style>