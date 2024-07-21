
<template>
  <v-app-bar scroll-behavior="hide elevate" height="100" color="white" class="px-4 ma-0">
    <span>
      <v-img rounded=xl width="75" height="75" src="@/assets/images/image.png"></v-img>
    </span>
    <v-container>
      <div>

        <v-toolbar color="transparent" height="100">

          <v-spacer></v-spacer>
          <v-btn size="x-large" rounded="pill" class="px-8" color="primary"
            prepend-icon="mdi-invoice-text-outline">blog</v-btn>
          <span class="mx-1"></span>
          <v-btn size="x-large" rounded="pill" class="px-8" color="primary" prepend-icon="mdi-information-variant">about
            us</v-btn>
          <span class="mx-1"></span>
          <v-btn size="x-large" rounded="pill" class="px-8" color="primary"
            prepend-icon="mdi-land-fields">projects</v-btn>
          <v-spacer></v-spacer>

        </v-toolbar>
      </div>
    </v-container>
    <v-btn color="success" variant="plain" icon="mdi-translate mdi-24px"></v-btn>
    <span class="mx-1"></span>
    <v-btn color="black" icon="mdi-menu" />
  </v-app-bar>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>