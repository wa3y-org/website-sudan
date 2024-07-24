<template>
  <v-footer class="main-footer py-12">
    <v-container class="">
      <v-row>

        <v-col cols="12" xxl="4" xl="4" lg="4" md="6" sm="12" xs="12">

          <div class="pa-8">
            <h1 class="font-weight-black text-h3 mb-4">Organization</h1>
            <hr class="mb-8"
              style="width: 6rem; height: 0.3rem; background-color: #da291c; border: 0px; border-radius: 1rem;">
            <p>
            <ul class="links-group">
              <li v-for="(link) of ourOrganizationLinks">
                
                    <nuxt-link class="our-link " :href="link.url">
                      
                      <span class="mx-2">
                        {{ link.name }}
                      </span>
                    </nuxt-link>
              </li>
            </ul>
            </p>
          </div>
        </v-col>
        <v-col cols="12" xxl="4" xl="4" lg="4" md="6" sm="12" xs="12">
          <div class="pa-8">
            <h1 class="font-weight-black text-h3 mb-4">Pages</h1>
            <hr class="mb-8"
              style="width: 6rem; height: 0.3rem; background-color: #da291c; border: 0px; border-radius: 1rem;">
            <p>
            <ul class="links-group">
              <li v-for="(link) of ourPagesLinks">
                <nuxt-link class="our-link " :href="link.url">
                  <span class="">
                    {{ link.name }}
                  </span>
                </nuxt-link>
              </li>
            </ul>
            </p>
          </div>
        </v-col>
        <v-col cols="12" xxl="4" xl="4" lg="4" md="6" sm="12" xs="12">
          <div class="pa-8">
            <h1 class="font-weight-black text-h3 mb-4">Social Media</h1>
            <hr class="mb-8"
              style="width: 6rem; height: 0.3rem; background-color: #da291c; border: 0px; border-radius: 1rem;">
            <p>
              <a :href="media.url" v-for="media of ourSocialMedia" class="ma-6">
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <v-icon v-bind="props" :color="isHovering ? '#12095a' : '#d20015CC'">{{ media.Icon }}
                      mdi-48px</v-icon>
                  </template>
                </v-hover>
              </a>

            </p>
            <div class="mt-12">
              <span>
                <v-img rounded="lg" width="65" height="65" src="@/assets/images/image.png"></v-img>
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
const ourOrganizationLinks = [
  { name: "About Us", url: "#" },
  { name: "Contact Us", url: "#" },
  { name: "Our Partners", url: "#" },
  { name: "Our Communities", url: "#" },
  { name: "Our Projects", url: "#" },
];

const ourPagesLinks = [
  { name: "News", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Our Projects Map", url: "#" },
  { name: "Videos", url: "#" },
  { name: "Podcasts", url: "#" },
  { name: "Campaigns", url: "#" },
];

const ourSocialMedia = [
  { "name": "Email", "Icon": "mdi-email", "url": "" },
  { "name": "Facebook", "Icon": "mdi-facebook", "url": "" },
  { "name": "X", "Icon": "mdi-twitter", "url": "" },
  { "name": "YouTube", "Icon": "mdi-youtube", "url": "" },
]
</script>

<style scoped>
.main-footer {
  /* background-color: #12095a; */
  background-color: white;
  border-top: 0.5rem solid #da291c;
}

.links-group {
  list-style-type: none;
}

.our-link {
  text-decoration: none;
  color: #12095a;
  list-style-type: none;
  
  font-size: 1.25rem;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  text-rendering: optimizeLegibility;
  margin: 8px;
}

.our-link:hover {
  font-weight: bolder;
  transition: 0.3s;
}
</style>