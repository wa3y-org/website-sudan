<template>
  <div class="intro-hero">
    <div class="intro-content">
      <v-container>

      </v-container>
      <slot />
    </div>
  </div>
  <v-container>
    <v-card class="intro-card mx-1" rounded="xl" >
      <v-card-text class="px-12">
        <p class="text-h3 mt-8">
        {{ $t("pages.home.intro.title")}}
        </p>
        <hr class="mt-4 mb-6"
          style="width: 9rem; height: 0.6rem; background-color: #da291c; border: 0px; border-radius: 1rem;">

        <p class="mt-4 text-h6">
        {{ $t("pages.home.intro.text")}}

          
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.intro-hero {
  height: 100vh;
  position: relative;
  background-color: #c4b1ff;
  color: white;
  top: -80px;
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
  opacity: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/public/images/coveeer.jpeg');
}

.intro-content {
  position: relative;
}

.intro-card {
  position: relative;
  top: -16rem;
  -webkit-box-shadow: 0px -2rem 20px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -2rem 20px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -2rem 20px 2px rgba(0, 0, 0, 0.3);
  // border-radius: 0px !important;
}
</style>