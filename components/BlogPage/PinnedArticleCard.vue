<template>
  <div>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card class="my-8" v-bind="props" :elevation="isHovering ? 8 : 1">
          <v-row>
            <v-col class="pa-8" cols="12" xxl="3" xl="4" lg="6" md="6">
              <p class="text-indigo font-weight-black">
                <nuxt-link :to="`/blog/${article.topic.name.trim().replaceAll('\s', ' ').replaceAll(' ', '_')}`">
                  {{ article.topic.name }}
                </nuxt-link>
              </p>
              <p class="my-4 text-h5 font-weight-bold">
                <nuxt-link :to="`/blog/${article.topic.name.trim().replaceAll('\s', ' ').replaceAll(' ', '_')}/some_slug_23`">
                {{ article.title }}
              </nuxt-link>
              </p>
              <p class="text-justify">{{ article.short_text }}</p>
              <p class="mt-4 text-grey">
                {{ article.author.name }}
                <span class="mx-2">-</span>
                {{ article.updated }}
              </p>
            </v-col>
            <v-col>
              <v-img cover width="100%" height="100%" :src="article.cover_image"></v-img>
            </v-col>
          </v-row>
        </v-card>
    </template>
    </v-hover>
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

<style></style>~/utils/app/models/article