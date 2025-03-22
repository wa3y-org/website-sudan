<template>
  <v-container>
    <v-card flat class="my-4" rounded="lg" :loading="loading.isLoading.value" :disabled="loading.isLoading.value">
      <ProjectsPageViewData :project="project" />
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import type { ProjectsRecord } from "~/app/pocketbase-types";

const projectId = useRoute().params.id;
const tab = ref('project');

const project: Ref<ProjectsRecord> = ref({
  title: '',
  place: '',
  starting_date: null,
  end_date: null,
  details: '',
})

const loading = useLoading();
const backendError = useBackendError();
async function loadProject() {
  loading.start();
  const response = await useProjects().getOne(projectId.toString())
  loading.end();

  if (response.error) {
    backendError.set(response.error)
    return;
  }

  if (response.model) {
    project.value = response.model;
  }
}

onMounted(() => {
  loadProject();
});
</script>

<style></style>