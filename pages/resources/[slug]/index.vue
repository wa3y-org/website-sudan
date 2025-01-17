<template>
  <object-view :title="attachmentToView || ''" :show="objectViewModal.isShown.value" @close="objectViewModal.hide"
    :filename="attachmentToView || ''" :record="resource || {}" />
  <div>
    <v-container class="pb-16">
      <v-row>
        <v-col>
          <p class="pt-6 text-center text-indigo">
            <nuxt-link to="/resources">
              back to resources
            </nuxt-link>
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 class="text-center py-8">
            {{ resource?.title }}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center mb-6">
          <v-chip density="compact" variant="tonal" class="mx-1" color="primary" v-for="tag of resource?.tags">{{ tag
            }}</v-chip>

        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex align-center justify-center fill-height">
            <template v-html="resource?.embed_script"></template>
          </div>
        </v-col>
      </v-row>
      <v-row class="mx-0 pa-0 my-16">
        <v-col>
          <article v-html="resource?.full_text"></article>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="font-weight-bold text-h5">
            <v-icon>mdi-attachment</v-icon>
            <span class="mx-2">Attachments</span>
          </p>
          <div v-for="(attachment, index) in resource?.attachments" :key="index + attachment">
            <p variant="text" color="blue" class="font-weight-thin mx-2 my-3 d-inline-block text-blue cursor-pointer"
              link @click="showAttachmentView(attachment)">
              {{ index + 1 }}. {{ attachment }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="py-6 text-center text-indigo">
            <nuxt-link to="/resources">
              back to resources
            </nuxt-link>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import type { TWebsiteResource } from '~/composables/website/resources';

const resourceId = useRoute().params.slug.toString();

const resource = ref<TWebsiteResource | null>(null)

const loading = useLoading();
const backendError = useBackendError();
async function loadResource() {
  loading.start();
  const response = await useWebResources().get.byId(resourceId);
  loading.end();

  if (response.error) {
    backendError.set(response.error);
    return;
  }

  if (response.model) {
    resource.value = response.model;
  }
}

onMounted(loadResource);


const objectViewModal = useModal();
const attachmentToView = ref<string | null>(null)
function showAttachmentView(bill: string) {
  attachmentToView.value = bill;
  objectViewModal.show();
}
</script>

<style></style>