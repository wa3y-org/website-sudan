<template>
  <v-app>
    <NuxtLayout />
  </v-app>
</template>


<style lang="scss" scoped>
@font-face {
  font-family: cairo;
  src: url(./assets/fonts/Cairo_all.ttf);
}

@font-face {
  font-family: janna-bold;
  src: url(./assets/fonts/janna_lt_bold.ttf);
  font-weight: bold;
}

@font-face {
  font-family: janna-regular;
  src: url(./assets/fonts/janna_lt_regular.ttf);
  font-weight: normal;
}

p {
  font-family: cairo;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: janna-regular;
}
</style>