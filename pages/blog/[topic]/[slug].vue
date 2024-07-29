<template>
  <div class="article-container">
    <div class="article-header py-16">
      <v-container class="my-8">
        <v-row>
          <v-col>
            <div style="height: 100%;" class="d-flex align-center px-4">
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
            <v-img rounded="xl" :aspect-ratio="9 / 6" cover width="100%" :src="article.cover_image"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <article class="article-content py-16">
      <v-container>
        <v-row>
          <v-col class="text-justify">
            <div v-for="i in 6">
              <h1>Some Header in the article</h1>
              <p class="my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
                commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
                tempora dicta. At voluptas iure alias minus necessitatibus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
                commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
                tempora dicta. At voluptas iure alias minus necessitatibus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
                commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
                tempora dicta. At voluptas iure alias minus necessitatibus?
              </p>
              <iframe v-if="i == 3" style="width: 100%; aspect-ratio: 3/1;" class="my-8 elevation-2 rounded-xl"
                src="https://www.youtube.com/embed/cMz5jX373HQ?si=xa8K1ybUHDnT2CWh" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </article>
    <div class="similar-articles-section py-16">
      <v-container>
        <v-row class="my-8">
          <v-col>
            <h3 class="text-h3">
              Similar Articles
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xxl="3" xl="4" lg="6" md="6" v-for="i in 2">
            <BlogPageArticleCard :article="article" />
          </v-col>
        </v-row>
      </v-container>
    </div>
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

.similar-articles-section {
  background-color: #F5F5F5;
}
</style>