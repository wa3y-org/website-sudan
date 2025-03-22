<template>
  <home-page-intro />
  <div class="home-page-sections">
    <home-page-about-us />
    <home-page-what-we-do />
    <home-page-discover-projects />
    <!-- <home-page-blog-and-news /> -->
    <home-page-org-in-numbers />
    <!-- <home-page-resources /> -->

    <div class="text-center mt-16 mb-n16">
      <v-container>
        <v-row>
          <v-col v-for="link of pagesLinks">
            <v-card class="ma-2 py-6" rounded="xl" :to="link.url" :color="link.color">
              <v-card-text>

                <v-icon size="84">{{ link.icon }}</v-icon>
                <p class="text-h3 mt-4">{{ link.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
const pagesLinks = [
  { title: "About Us", url: "/about-us", color: "primary", icon: "mdi-information-variant-circle-outline" },
  { title: "Projects", url: "/our-projects", color: "teal", icon: "mdi-land-fields" },
  { title: "Blog/News", url: "/blog", color: "info", icon: "mdi-file-document-outline" },
  { title: "Resources", url: "/resources", color: "indigo", icon: "mdi-folder-open-outline" },
];
</script>

<style scoped>
.home-page-sections {
  height: max-content;
  position: relative;
  top: -220px;
  left: 0;
}
</style>