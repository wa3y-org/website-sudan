<template>
  <MainAppBar />
  <v-main class="text-red text-h1" style="height: 200vh;">
    <div style="height: 100vh; position: absolute; top: 0; left: 0; width: 100vw;padding-top: 120px;
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
    background-image: url('http://localhost:3000/_nuxt/assets/images/intro-bg-image.png') ;">
      <span class="font-weight-black text-h1">
        data
      </span>
      <slot />

    </div>

  </v-main>
  <v-footer>
    the main footer
  </v-footer>
</template>

<script lang="ts" setup>

</script>

<style>

</style>