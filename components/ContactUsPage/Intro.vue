<template>
  <div class="intro-hero">
    <div class="intro-content">
      <v-container>

      </v-container>
      <slot />
    </div>
  </div>
  <v-container>
    <v-card class="intro-card mx-1" rounded="xl">
      <v-card-text class="px-12">
        <p class="text-h3 mt-8">
          Contact <span class="font-weight-black text-indigo">Wa3y</span>
        </p>
        <hr class="mt-4 mb-6"
          style="width: 9rem; height: 0.6rem; background-color: #da291c; border: 0px; border-radius: 1rem;">

        <p class="mt-4 text-h6">
          <span class="font-weight-black text-h5">Wa3y</span>
          has <span class="font-weight-bold text-info">Five</span> offices around the glob,
          located in <span class="font-weight-bold text-info">Three</span> countries
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.intro-hero {
  height: calc(100vh - 80px);
  position: relative;
  color: white;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 100px;
}

.intro-hero::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/public/images/location.jpg');
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 50% 100%, 0% 100%);
}

.intro-content {
  position: relative;
}

.intro-card {
  position: relative;
  top: -10rem;
  -webkit-box-shadow: 0px -2rem 20px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -2rem 20px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -2rem 20px 2px rgba(0, 0, 0, 0.3);
  // border-radius: 0px !important;
}
</style>