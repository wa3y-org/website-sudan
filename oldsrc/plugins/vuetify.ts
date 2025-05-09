// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    theme: {
      themes: {
        light: {
          colors: {
            // primary: "#12095a",
            primary: "#351d49",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
