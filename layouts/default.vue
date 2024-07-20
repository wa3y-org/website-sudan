<template>
  <v-app-bar >
    the main app
  </v-app-bar>
  <v-main class="text-red text-h1">
    Main content
    <NuxtPage />
    <slot />
  </v-main>
  <v-footer>
    the main footer
  </v-footer>
</template>

<script lang="ts" setup>

</script>

<style>

</style>