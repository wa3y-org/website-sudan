
<template>
  <main-mega-menu :show="megaMenuModal.isShown.value" @close="megaMenuModal.hide" />
  <v-app-bar elevation="0" scroll-behavior="hide" height="80" :color="appBarBg" class="px-4 ma-0" :style="appBarBg.toLowerCase() == `transparent`
    ? ''
    : `border-bottom: 1px solid #d2d2d2 !important`
    ">
    <!-- The logo -->
    <span>
      <v-img rounded="lg" width="65" height="65" src="@/assets/images/image.png"></v-img>
    </span>
    <v-spacer></v-spacer>
    <!-- Main Navigation Buttons Section -->
    <div>
      <v-toolbar color="transparent" height="80">

        <v-spacer></v-spacer>
        <v-btn size="x-large" rounded="pill" class="px-8" color="primary"
          prepend-icon="mdi-invoice-text-outline">blog</v-btn>
        <span class="mx-1"></span>
        <v-btn size="x-large" rounded="pill" class="px-8" color="primary"
          prepend-icon="mdi-information-variant-circle-outline">about
          us</v-btn>
        <span class="mx-1"></span>
        <v-btn size="x-large" rounded="pill" class="px-8" color="primary" prepend-icon="mdi-land-fields">projects</v-btn>

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

const appBarBg = useAppBarBgController().appBarBg;

// mage menu modal controller
const megaMenuModal = useModal();
</script>

<style lang="scss" scoped></style>