<template>
  <div class="objectives-section py-16">
    <h1 class="text-h2 text-center">Organization Objectives</h1>
    <v-container class="my-8">

      <v-row>
        <v-col cols="12" xl="7" lg="6">
          <div class=" elevation-3 rounded-xl" style="overflow: hidden;">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat expedita veritatis accusantium
                    pariatur libero illum porro, tempore repellendus,
                    nesciunt optio vero odit maxime saepe ipsum
                    laboriosam earum dolore quas non?
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat expedita veritatis accusantium
                      pariatur libero illum porro, tempore repellendus,
                      nesciunt optio vero odit maxime saepe ipsum
                      laboriosam earum dolore quas non?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat expedita veritatis accusantium
                      pariatur libero illum porro, tempore repellendus,
                      nesciunt optio vero odit maxime saepe ipsum
                      laboriosam earum dolore quas non?
                    </p>
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
  { title: 'Objective one', details: '' },
  { title: 'Objective Two', details: '' },
  { title: 'Objective Three', details: '' },
  { title: 'Objective Four', details: '' },
  { title: 'Objective Five', details: '' },
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