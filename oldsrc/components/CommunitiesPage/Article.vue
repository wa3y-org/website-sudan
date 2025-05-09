<template>
  <v-container class="py-12">
    <v-row class="pa-0 ma-0">
      <v-col>
        <div v-for="i in 6">
          <h1>Some Header in the article</h1>
          <p class="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
            commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
            tempora dicta. At voluptas iure alias minus necessitatibus?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
            commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
            tempora dicta. At voluptas iure alias minus necessitatibus?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet inventore hic,
            commodi eligendi repellendus, praesentium reiciendis saepe autem nulla dolorum rem,
            tempora dicta. At voluptas iure alias minus necessitatibus?
          </p>
          <iframe v-if="i == 3" style="width: 100%; aspect-ratio: 16/9;" class="my-8 elevation-2 rounded-xl"
            src="https://www.youtube.com/embed/cMz5jX373HQ?si=xa8K1ybUHDnT2CWh" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

</script>

<style></style>