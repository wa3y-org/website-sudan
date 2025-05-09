<template>
  <div class="intro-hero">
    <div class="intro-content">
      <v-container>

      </v-container>
      <slot />
    </div>
  </div>
  <v-container>
    <v-row class="pa-0 ma-0">
      <v-col>
        <v-card class="intro-card mx-1" rounded="xl">
          <v-card-text class="px-12">
            <p class="text-h3 mt-8">
              Build with our <span class="font-weight-bold text-indigo">Partners</span>
            </p>
            <hr class="mt-4 mb-6"
              style="width: 9rem; height: 0.6rem; background-color: #da291c; border: 0px; border-radius: 1rem;">

            <p class="mt-4 text-justify text-h6">
              We achieve the greatest impact through partnerships.
               That’s why Wa3y collaborates with a wide range of humanitarian,
                development and peacekeeping partners across the globe, from multinational agencies 
                to national authorities and local organisations. We combine our knowledge,
               experience and resources to protect and empower people at risk.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
  background-image: url('/public/images/coveeer.jpeg');
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
}</style>