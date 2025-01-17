<template>
  <div>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card rounded="xl" class="my-8" v-bind="props" :elevation="isHovering ? 8 : 1">
          <v-img cover height="300" :src="coverImage"></v-img>
          <v-card-text class="pa-8" style="min-height: 18rem;">
            <p class="text-indigo font-weight-black">
              <nuxt-link :to="`/blog/${article.expand?.topic?.id}`">
                {{ article.expand?.topic?.title }}
              </nuxt-link>
            </p>
            <p class="my-4 text-h5 font-weight-bold">
              <nuxt-link :to="`/blog/${article.expand?.topic?.title}/${article.id}`">
                {{ article.title }}
              </nuxt-link>
            </p>
            <p class="text-justify">{{ article.short_description }}</p>
            <p class="mt-4 text-grey">
              <date-view :date="article.updated" />
            </p>
            
          </v-card-text>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script lang="ts" setup>
import { Article } from "@/app/models/article";
import type { TArticle } from "~/composables/website";
const props = defineProps({
  article: {
    type: Object,
    required: true,
  }
})

const coverImage = computed(() => usePocketBase().files.getURL(props.article, props.article?.cover_image || ''));
</script>

<style></style>