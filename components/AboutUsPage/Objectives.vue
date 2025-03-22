<template>
  <div class="objectives-section py-16">
    <h1 class="text-h2 text-center">Organization Objectives</h1>
    <h5 class="text-h5 text-center">priorities  from 2024 to 2027</h5>
    <v-container class="my-8">

      <v-row>
        <v-col cols="12" xl="7" lg="6">
          <div class="rounded-xl" :class=" mdAndDown ? 'elevation-0' : 'elevation-3'" style="overflow: hidden;">
            <div v-for="(objective, i) of objectives">
              <v-card class="pa-4" rounded="0" :elevation="0"
                :color="isSelectedObjective(i) && !mdAndDown ? 'primary' : 'transparent'"
                :variant="isSelectedObjective(i) && !mdAndDown ? 'tonal' : 'flat'" @click="selectObjective(i)">
                <v-card-title :class="isSelectedObjective(i) ? 'font-weight-black' : ''">
                  {{ objective.title }}
                </v-card-title>
                <v-card-text v-if="mdAndDown" class="text-justify">
                  {{ objective.details }}
                  <p>
                    
                  </p>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>

        <v-col v-if="!mdAndDown">
          <v-window v-model="objectiveTab" transition="fade-transition" class="fill-height">
            <v-window-item v-for="(objective, i) of objectives" :key="generateObjectiveId(i)"
              :value="generateObjectiveId(i)" class="fill-height">
              <div style="height: 100%;" class="d-flex align-center">
                <v-card color="transparent" elevation="0">
                  <v-card-text class="text-justify">
                    <h1 class="mb-2">{{ objective.title }}</h1>
                    {{ objective.details }}
                  </v-card-text>
                </v-card>
              </div>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();
const objectives = [
  { title: 'Objective one', details: 'Supporting Sudanese communities inside and outside Sudan humanitarianly, socially and legally through direct and indirect interventTions.' },
  { title: 'Objective Two', details: 'Strengthening modern civil society and enhancing processes of resistance to the classification of Sudanese civil space.' },
  { title: 'Objective Three', details: 'Contributing to stopping the war in Sudan, building peace, and promoting peaceful coexistence.' },
  { title: 'Objective Four', details: 'Building and strengthening regional, local and international partnerships.' },
]

const objectiveTab = ref('');
const currentObjectiveIndex = ref(0);
const timeOutId = ref();

function generateObjectiveId(index: number): string {
  return `objective_${objectives[index].title.trim().replaceAll('\s', ' ').replaceAll(' ', '_')}_tab_${index}`;
}

function selectObjective(index: number) {
  if (mdAndDown.value) return;
  if (timeOutId) {
    clearWaiting();
  }
  objectiveTab.value = generateObjectiveId(index);
  currentObjectiveIndex.value = index;
  waitThenPlayNext();
}

function isSelectedObjective(index: number) {
  return objectiveTab.value == generateObjectiveId(index);
}

function waitThenPlayNext() {
  timeOutId.value = setTimeout(() => {
    const index = (currentObjectiveIndex.value + 1) % objectives.length;
    selectObjective(index);
  }, 3500);
}

function clearWaiting() {
  clearTimeout(timeOutId.value);
}


onMounted(() => {
  selectObjective(0);

});


onUnmounted(() => {
  clearWaiting();
});


watch(() => mdAndDown.value, () => {
  if (!mdAndDown.value) {
    selectObjective(0);
  }
})

</script>

<style scoped>
.objectives-section {
  background-color: #E1F5FE;
}
</style>