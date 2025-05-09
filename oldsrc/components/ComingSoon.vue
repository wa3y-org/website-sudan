<template>
  <div class="coming-soon-container py-16">
    <v-container class="fill-height text-center">
      <v-row>
        <v-col>
          <h1 class="text-h1 mt-12 font-weight-bold text-center">
            Coming Soon
          </h1>
          <h1 class="text-h3 mt-12 font-weight-bold text-center text-grey text-capitalize">
            {{$route.name}} Page
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped>
.coming-soon-container {
  height: calc(100vh - 80px);
  background-image: url('@/assets/images/forestbridge.jpg');
  background-position: center;
  background-size: cover;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}
</style>