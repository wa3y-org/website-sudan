<template>
  <div>
    <v-container>
      <h1 class="text-center mt-5">Discover Our Projects</h1>
      <v-card :to="`/our-projects/${project.id}`" class="pa-4 mx-2 my-6 rounded-xl" v-for="project in projectsList" :key="project.id">
        <v-card-text>
          <h3 class="text-h5 font-weight-bold mx-6">Project: {{ project.title }}</h3>
          <div class="text-h6 my-8 mx-2 pa-1">
            <p>
              <v-icon class="mx-2">mdi-map-marker</v-icon> Place:
              {{ project.place || 'N/A' }}
            </p>
            <p>
              <v-icon class="mx-2">mdi-calendar-expand-horizontal</v-icon>
              Starting Date:
              <DateView :date="project.starting_date" />
            </p>
            <p>
              <v-icon class="mx-2">mdi-calendar-expand-horizontal</v-icon>
              End Date:
              <DateView :date="project.end_date" />
            </p>
            <p>
              <v-icon class="mx-2">mdi-calendar-expand-horizontal</v-icon>
              Duration:


              {{ calcProjectTimeInDays(project.starting_date, project.end_date) }} Days
            </p>
          </div>
        </v-card-text>

      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectsRecord } from '~/app/pocketbase-types';
import moment from "moment";

const loading = useLoading();
const projects = useProjects();
const backendError = useBackendError();

const projectsList: Ref<ProjectsRecord[]> = ref([]);

async function getAllProjects() {
  loading.start();
  const response = await projects.getAll();
  loading.end();

  if (response.error) {
    backendError.set(response.error)
    return
  }

  projectsList.value = response.models || [];
}

onMounted(() => {
  getAllProjects();
});




function calcProjectTimeInDays(dateOne: string | Date, dateTwo: string | Date) {
  const diffInDays = Math.abs(moment(dateOne).diff(dateTwo, 'days'));
  if (isNaN(diffInDays)) return 'N/A';
  return diffInDays + 1;
}
</script>

<style></style>