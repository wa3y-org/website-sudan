<template>
  <div class="py-16">
    <h1 class="text-center text-indigo text-h3">All Topics</h1>
    <v-container>
      <v-divider color="my-8"></v-divider>
      <v-row class="mt-8">
        <v-col cols="12" xxl="3" xl="3" lg="4" md="6" sm="12" xs="12" v-for="(topic, i) of topics" :key="topic.name + i"> 
          
            <v-card :to="`/blog/${topic.name.trim().replaceAll('\s', ' ').replaceAll(' ', '_')}`" class="text-indigo font-weight-bold">
              <v-card-title indigo-title>
                {{ topic.name }}
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 100px;">
                {{ topic.description }}
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <span class="text-grey mx-2"> {{ topic.articles_count }} Article</span>
              </v-card-actions>
            </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const topics = [
  { name: 'topic one', description: 'A topic to tell about something important', articles_count: 50 },
  { name: 'topic two', description: 'A topic to tell about something important', articles_count: 50 },
  { name: 'topic three', description: 'A topic to tell about something important', articles_count: 50 },
  { name: 'topic four', description: 'A topic to tell about something important', articles_count: 50 },
  { name: 'topic five', description: 'A topic to tell about something important', articles_count: 50 },
  { name: 'topic six', description: 'A topic to tell about something important', articles_count: 50 },
]
</script>

<style></style>