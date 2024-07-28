<template>
  <div>
    <v-card class="my-8" elevation="3">
      <v-img cover height="300" :src="article.cover_image"></v-img>
      <v-card-text class="pa-8" style="height: 18rem;">
        <p class="text-indigo font-weight-black">
          <nuxt-link :to="`/blog/${article.topic.name.trim().replaceAll('\s', ' ').replaceAll(' ', '_')}`">
            {{ article.topic.name }}
          </nuxt-link>
        </p>
        <p class="my-4 text-h5 font-weight-bold">{{ article.title }}</p>
        <p class="text-justify">{{ article.short_text }}</p>
        <p class="mt-4 text-grey">
          {{ article.author.name }}
          <span class="mx-2">-</span>
          {{ article.updated }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { Article } from "@/app/models/article";
defineProps({
  article: {
    type: Article,
    required: true,
  }
})


</script>

<style></style>