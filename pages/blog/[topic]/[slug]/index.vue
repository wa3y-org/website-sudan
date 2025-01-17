<template>
  <div class="article-container">
    <div class="article-header py-16">
      <v-container class="my-8">
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
        <v-row>
          <v-col cols="12" xxl="3" xl="4" lg="6">
            <div style="height: 100%;" class="d-flex align-center px-4 w-100">
              <div class="w-100">
                <p class="text-indigo font-weight-black">
                  {{ article?.expand?.topic?.title }}
                </p>
                <v-divider class="my-4"></v-divider>
                <p class="my-4 text-h5 font-weight-bold">
                  {{ article?.title }}
                </p>
                <p class="text-justify">
                  {{ article?.short_description }}
                </p>
                <p class="mt-4 text-grey">

                  <span class="mx-2">
                    <DateView :date="article?.updated" />
                  </span>

                </p>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-img class="my-8" rounded="xl" :aspect-ratio="16 / 9" cover width="100%" :src="coverImage"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <article class="article-content py-16">
      <v-container>
        <v-row>
          <v-col class="text-justify">
            <div class="pa-2" v-html="article?.full_text"></div>
          </v-col>
        </v-row>
      </v-container>
    </article>
    <!-- <div class="similar-articles-section py-16">
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
            <BlogPageArticleCard :article="article || {}" />
          </v-col>
        </v-row>
      </v-container>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import type { TArticle } from "~/composables/website";



const articleId = useRoute().params.slug.toString();

const article = ref<TArticle | null>(null)

const loading = useLoading();
const backendError = useBackendError();
async function loadArticle() {
  loading.start();
  const response = await useBlog().articles.get.byId(articleId);
  loading.end();

  if (response.error) {
    backendError.set(response.error);
    return;
  }

  if (response.model) {
    article.value = response.model;
  }
}

onMounted(loadArticle)

const coverImage = computed(() => usePocketBase().files.getURL(article.value || {}, article.value?.cover_image || ''));

</script>

<style scoped lang="scss">
.article-header {
  background-color: #F3E7DB;
}

.similar-articles-section {
  background-color: #F5F5F5;
}
</style>