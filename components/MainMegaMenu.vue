<template>
  <v-dialog :model-value="show" scrollable fullscreen persistent :overlay="false" transition="dialog-top-transition">
    <v-card>

      <v-toolbar color="white" class="px-4" height="80">
        <span>
          <v-img rounded="lg" width="65" height="65" src="@/assets/images/image.png"></v-img>
        </span>
        <v-spacer></v-spacer>
        <v-btn color="success" variant="plain" icon="mdi-translate mdi-24px"></v-btn>
        <span class="mx-1"></span>
        <v-btn color="primary" variant="plain" icon="mdi-theme-light-dark mdi-24px"></v-btn>
        <span class="mx-1"></span>
        <v-btn color="error" icon="mdi-menu-close mdi-36px" @click="close" />
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="mega-menu-wrap">
        <v-container fluid class="mega-menu-content">
          <div class="my-8"></div>
          <v-row>
            <v-col>
              <div class="pa-8" style="border: 0px solid white; border-radius: 7px;">
                <h1 class="font-weight-black text-h3 mb-4">Our Mission</h1>
                <hr class="mb-4"
                  style="width: 6rem; height: 0.3rem; background-color: #da291c; border: 0px; border-radius: 1rem;">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio ab voluptates totam, hic fuga, nemo iure
                  quasi odio debitis quae blanditiis quod impedit neque
                  minima placeat quia vitae aliquam ad!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </v-col>
            <v-col>
              <div class="pa-8">
                <h1 class="font-weight-black text-h3 mb-4">Organization</h1>
                <hr class="mb-8"
                  style="width: 6rem; height: 0.3rem; background-color: #da291c; border: 0px; border-radius: 1rem;">
                <p>
                <ul class="links-group">
                  <li v-for="(link) of ourOrganizationLinks">
                    <v-hover>
                      <template v-slot:default="{ isHovering, props }">
                        <nuxt-link v-bind="props" class="our-link " :href="link.url">
                          <v-expand-x-transition tag="span" v-show="isHovering">
                            <hr
                              style="display: inline-block ;width: 1.7rem; height: 1rem; background-color: rgb(218, 41, 28); border: 0px; border-radius: .2rem;" />
                          </v-expand-x-transition>
                          <span class="mx-2">
                            {{ link.name }}
                          </span>
                        </nuxt-link>
                      </template>
                    </v-hover>
                  </li>
                </ul>
                </p>
              </div>
            </v-col>
            <v-col>
              <div class="pa-8">
                <h1 class="font-weight-black text-h3 mb-4">Resources</h1>
                <hr class="mb-8"
                  style="width: 6rem; height: 0.3rem; background-color: #da291c; border: 0px; border-radius: 1rem;">
                <p>
                <ul>
                  <li class="links-group" v-for="link of resourcesLinks">
                    <v-hover>
                      <template v-slot:default="{ isHovering, props }">
                        <nuxt-link v-bind="props" class="our-link " :href="link.url">
                          <v-expand-x-transition tag="span" v-show="isHovering">
                            <hr
                              style="display: inline-block ;width: 1.7rem; height: 1rem; background-color: rgb(218, 41, 28); border: 0px; border-radius: .2rem;" />

                          </v-expand-x-transition>

                          <span class="mx-2">
                            {{ link.name }}
                          </span>
                        </nuxt-link>
                      </template>
                    </v-hover>
                  </li>
                </ul>
                </p>
              </div>
            </v-col>
          </v-row>
          <div color="white" class="my-16"></div>
          <v-row>

            <v-col>
              <div class="pa-8">
                <h1 class="font-weight-black text-h4 mb-12">Find & Follow Us</h1>
                <a :href="media.url" v-for="media of ourSocialMedia" class="mx-6">
                  <v-hover>
                    <template v-slot:default="{ isHovering, props }">
                      <v-icon v-bind="props" :color="isHovering ? '#d20015CC' : 'white'">{{ media.Icon }}
                        mdi-48px</v-icon>
                    </template>
                  </v-hover>
                </a>
              </div>

            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
    default: false,
  }
})

const emit = defineEmits(['close'])

function close() {
  emit('close');
}

const ourOrganizationLinks = [
  { name: "About Us", url: "#" },
  { name: "Contact Us", url: "#" },
  { name: "Our Partners", url: "#" },
  { name: "Our Communities", url: "#" },
  { name: "Our Projects", url: "#" },
]

const resourcesLinks = [
  { name: "News", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Podcasts", url: "#" },
  { name: "Campaigns", url: "#" },
  { name: "Videos", url: "#" },
]
const ourSocialMedia = [
  { "name": "Email", "Icon": "mdi-email", "url": "" },
  { "name": "Facebook", "Icon": "mdi-facebook", "url": "" },
  { "name": "X", "Icon": "mdi-twitter", "url": "" },
  { "name": "YouTube", "Icon": "mdi-youtube", "url": "" },
]
</script>

<style scoped>
.mega-menu-wrap {
  position: relative;
  background-color: #251064;
  color: white;
}

.mega-menu-wrap::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: url('@/assets/images/image.png');
  background-repeat: no-repeat;
  background-position: -50% 0%;
  background-size: cover;
}

.mega-menu-content {
  position: relative;
}

.links-group {
  list-style-type: none;
}

.our-link {
  text-decoration: none;
  color: white;
  list-style-type: none;
  transition: 0.3s;
  font-size: 1.25rem;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  text-rendering: optimizeLegibility;
  margin: 8px;
}

.our-link:hover {
  font-weight: bolder;
}
</style>