<template>
  <div class="blog-section py-16">
    <h2 class="text-center text-h3 my-8">
      From Our Blog
    </h2>
    <v-container>
      <v-row v-for="i in 2">
        <v-col v-for="j in 3">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
          <v-card v-bind="props" :elevation="isHovering ? 8 : 0" flat min-height="400" class="mb-8">
            <v-img src="/public/images/blog_2.jpg" height="200" cover></v-img>
            <v-card-title class="font-weight-black text-h6 text-wrap">
              <p class="d-flex align-center text-wrap mt-2">
                <span class="d-inline-block pa-0 ma-0"
                  style="width: 0.3rem; height: 2.2rem; background-color: #da291c; border: 0px; border-radius: 1rem;" />
                  <span class="text-wrap mx-4">
                    Title of the article
                  </span>
              </p>
              <br>
              <div class="text-center">
                <v-chip density="compact" variant="outlined" class="mx-1" color="#CCC">some tag</v-chip>
                <v-chip density="compact" variant="outlined" class="mx-1" color="#CCC">some tag</v-chip>
                <v-chip density="compact" variant="outlined" class="mx-1" color="#CCC">some tag</v-chip>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-center my-5">
                <v-btn color="primary" size="x-large" rounded="pill">Read more</v-btn>
              </div>
            </v-card-text>
          </v-card>
          </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.blog-section {
  background-color: #f5f5f5;
}
</style>