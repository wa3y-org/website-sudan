<template>
  <div class="py-16">
    <h1 class="text-center text-indigo text-h3">All Topics</h1>
    <v-container>
      <v-divider color="my-8"></v-divider>
      <backend-error-wrapper :backend-error="backendError.error" v-if="backendError.hasError" />
      <LoadingFromBackend v-if="loading.isLoading.value" />
      <v-row class="mt-8" v-else>
        <v-col cols="12" xxl="3" xl="3" lg="4" md="6" sm="12" xs="12" v-for="(topic, i) of topicsList"
          :key="topic.name + i">

          <v-card rounded="xl" :to="`/blog/${topic.id}`" class="text-indigo font-weight-bold">
            <v-card-title indigo-title>
              {{ topic.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 100px;">
              {{ topic.description }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <span class="text-grey mx-2"> {{ topic.expand?.blog_articles_via_topic?.length || 0 }} Article</span>
            </v-card-actions>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

import type { TTopic } from '~/composables/website/index';

const topicsList = ref<TTopic[]>([])

const loading = useLoading();
const backendError = useBackendError();
async function loadTopics() {
  loading.start();
  const response = await useBlog().topics.get.all();
  loading.end();

  if (response.error) {
    backendError.set(response.error);
    return;
  }

  if (response.models) {
    topicsList.value = response.models;
  }
}

onMounted(loadTopics)
</script>

<style></style>