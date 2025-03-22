<template>
  <div class="objectives-section py-16">
    <v-container class="my-8">
      <h1 class="text-h2 font-weight-bold">Our Values</h1>
      <div class="my-4"></div>
      <v-row>
        <v-col cols="12">
          <div class="mx-4">
            <ol>
              <li v-for="(objective, i) of objectives">
                <p :class="'font-weight-regular'">
                  {{ objective.title }}
                </p>
                {{ objective.details }}
              </li>
            </ol>
          </div>
        </v-col>


      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();
const objectives = [
  { title: 'Non- discrimination on the basis of ethnic, culture or sex.', details: '' },
  { title: 'Build a sense of voluntary work.', details: '' },
  { title: 'Full compliance with work disciplines.', details: '' },
  { title: 'Commitment to quality and professional standards.', details: '' },
  { title: 'Work to establish the rules and the systems of institutional transparency, and accountability.', details: '' },
  { title: 'Encourage exchange of experiences, constructive ideas, Learning and self-promotion and support creativity.', details: '' },
  { title: 'Commitment to rules and mechanisms for the accountability to affect population it serves.', details: '' },
  { title: 'Adhering to child and youth protection policies.', details: '' },
  { title: 'Ensure protection and gender mainstreaming.', details: '' },
]

</script>

<style scoped>
.objectives-section {
  background-color: #aac35a55;
}
</style>