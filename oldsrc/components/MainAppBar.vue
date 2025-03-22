
<template>
  <main-mega-menu :show="megaMenuModal.isShown.value" @close="megaMenuModal.hide" />
  <v-app-bar elevation="0" scroll-behavior="hide" height="80" :color="appBarBg" class="px-4 ma-0" :style="appBarBg.toLowerCase() == `transparent`
    ? ''
    : `border-bottom: 1px solid #d2d2d2 !important`
    ">
    <!-- The logo -->
    <nuxt-link to="/">
      <span>
        <v-img rounded="lg" width="65" height="65" src="@/assets/images/logo.png"></v-img>
      </span>
    </nuxt-link>
    <v-spacer></v-spacer>
    <!-- Main Navigation Buttons Section -->
    <div v-if="mdAndUp">
      <v-toolbar color="transparent" height="80" >

        <v-spacer></v-spacer>
        <nuxt-link to="/about-us">
          <v-btn size="x-large" rounded="pill" class="px-8 font-weight-bold" color="primary"
            prepend-icon="mdi-information-variant-circle-outline">about
            us</v-btn>
        </nuxt-link>
        <span class="mx-1"></span>
        <nuxt-link to="/blog">
          <v-btn size="x-large" rounded="pill" class="px-8 font-weight-bold" color="primary"
            prepend-icon="mdi-invoice-text-outline">blog</v-btn>
        </nuxt-link>
        <span class="mx-1"></span>
        <!-- <nuxt-link to="/our-projects">
          <v-btn size="x-large" rounded="pill" class="px-8 font-weight-bold" color="primary"
            prepend-icon="mdi-land-fields">projects</v-btn>
        </nuxt-link> -->
      </v-toolbar>
    </div>
    <v-spacer></v-spacer>

    <!-- Useful tools section -->
    <v-btn color="success" variant="plain" icon="mdi-translate mdi-24px"></v-btn>
    <span class="mx-1"></span>
    <v-btn color="black" icon="mdi-menu" @click="megaMenuModal.show" />
  </v-app-bar>
</template>

<script type="module" lang="ts">
function useAppBarBgController() {
  const route = useRoute()

  // app bar background color
  const appBarDefaultColor = "white";
  const appBarBg = ref(appBarDefaultColor);

  // pages that the appBar background should initially be transparent
  const pagesHaveInitialTransparentAppBar = [
    '/'
  ]

  // function to determine appBar Background Color
  function setAppBarBg() {
    const transparencyMaxHeight = 50;
    if (!pagesHaveInitialTransparentAppBar.includes(route.path.trim().toLocaleLowerCase())) {
      appBarBg.value = appBarDefaultColor;
      return;
    }
    if (
      document.body.scrollTop > transparencyMaxHeight ||
      document.documentElement.scrollTop > transparencyMaxHeight
    ) {
      appBarBg.value = appBarDefaultColor;
      return;
    }
    appBarBg.value = "transparent";
  }

  onMounted(() => {
    setAppBarBg();
    window.addEventListener("scroll", setAppBarBg);
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", setAppBarBg);
  })

  watch(() => route.path, setAppBarBg);

  return { appBarBg };
}
</script>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
const appBarBg = useAppBarBgController().appBarBg;

// mage menu modal controller
const megaMenuModal = useModal();

// display
const { mdAndUp } = useDisplay();
</script>

<style lang="scss" scoped></style>