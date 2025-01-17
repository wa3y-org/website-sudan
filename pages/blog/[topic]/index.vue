<template>
  <div>
    <v-container>
      <v-row v-if="loading.isLoading.value">
        <v-col>
          <LoadingFromBackend />
        </v-col>
      </v-row>
      <v-row v-if="backendError.hasError">
        <v-col>
          <BackendErrorWrapper :backend-error="backendError.error" />
        </v-col>
      </v-row>
      <v-row v-els>
        <v-col>
          <h3 class="text-h4 text-center font-weight-bold pt-16 pb-8">
            Articles from topic <span class="text-indigo">{{ topic?.title }}</span>
          </h3>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" xxl="3" xl="4" lg="6" md="6" v-for="article in articlesList">
          <BlogPageArticleCard :article="article" />
        </v-col>
      </v-row>
      <!-- <v-row class="my-12">
        <v-col>
          <div class="text-center">
            <v-btn color="primary" size="x-large">Load More</v-btn>
          </div>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { Article } from "@/app/models/article";
import type { TArticle, TTopic } from "~/composables/website";

const topicName = useRoute().params.topic.toString();


const topic = ref<TTopic | null>(null)

const loading = useLoading();
const backendError = useBackendError();
async function loadTopic() {
  loading.start();
  const response = await useBlog().topics.get.byId(topicName);
  loading.end();

  if (response.error) {
    backendError.set(response.error);
    return;
  }

  if (response.model) {
    topic.value = response.model;
  }
}

const articlesList = ref<TArticle[]>([])

async function loadArticles() {
  loading.start();
  const response = await useBlog().articles.get.byTopic(topic.value || {});
  loading.end();

  if (response.error) {
    backendError.set(response.error);
    return;
  }

  if (response.models) {
    articlesList.value = response.models;
  }
}
onMounted(async () => {
  await loadTopic();
  await loadArticles();
})

</script>

<style></style>