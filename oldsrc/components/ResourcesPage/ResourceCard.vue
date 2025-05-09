<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card rounded="xl" :to="`/resources/${resource?.id}`" v-bind="props" :elevation="isHovering ? 8 : 2" flat
        min-height="300" class="mb-8">
        <!-- <v-img src="/public/images/blog_1.jpeg" height="200" cover></v-img> -->
        <div class="ma-4">
          <v-chip density="compact" variant="tonal" class="mx-1" color="primary" v-for="tag of resource?.tags">{{ tag }}</v-chip>
        </div>
        <v-card-title class="font-weight-black text-h6 text-wrap">
          <p class="d-flex align-center text-wrap mt-2">
            <!-- <span class="d-inline-block pa-0 ma-0"
                      style="width: 0.3rem; height: 2.2rem; background-color: #da291c; border: 0px; border-radius: 1rem;" /> -->
            <span class="text-wrap mx-4">
              {{resource?.title}}
            </span>
          </p>
          <br>

        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          published in <date-view :date="resource?.created" />
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts" setup>
const props = defineProps({
  resource: {
    type: Object,
    required: true,
  }
});

const coverImage = computed(() => usePocketBase().files.getURL(props.resource || {}, props.resource?.cover_image || ''));

</script>

<style></style>