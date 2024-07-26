<template>
  <div>
    <h3 class="text-h3 text-center mb-16">
      Where to find us
    </h3>
    <div v-for="(office, i) of offices" :key="office.address + i">
      <div class="d-flex align-center justify-center office-name py-12 text-center font-weight-black text-h3">
        {{ office.name }}
      </div>

      <v-container fluid class="ma-0 pa-0">
        <v-row>
          <v-col cols="12" xxl="6" xl="6" lg="6" md="6">
            <iframe :src="office.mapSrc" width="100%" height="100%" style="border:0; min-height: 500px;"
              allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
          <v-col>
            <div class="fill-height d-flex align-center" :class="{
              'pa-8' : smAndDown
            }">
              <div>
                <h3 class="text-h3 mb-4">Office Contact Info</h3>

                <a v-for="link of office.links" :href="link.link" style="text-decoration: none;">
                  <v-card flat class="mt-1">
                    <v-card-title>
                      <v-icon size="36">{{ link.icon }}</v-icon>
                      <span class="mx-4">{{ link.name }}</span>
                    </v-card-title>
                  </v-card>
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const offices = [
  {
    name: 'al-Obayyied Office (Sudan)',
    links: [
      {
        name: 'Sudan, NK, al-Obayyied, al-Gobah, 2255',
        icon: 'mdi-map-marker-outline',
        link: ''
      },
      {
        name: '+249 911415666',
        icon: 'mdi-whatsapp',
        link: ''
      },
      {
        name: '+249 911415666',
        icon: 'mdi-phone-outline',
        link: ''
      },
      {
        name: 'alobayyied@wa3y.org',
        icon: 'mdi-email-outline',
        link: ''
      },
      {
        name: '/wa3y-alobayyied',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@wa3y-alobayyied',
        icon: 'mdi-twitter',
        link: ''
      },

    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845265.3711036466!2d29.502569253039393!3d13.131092164669875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16ec0658763a2d79%3A0xabfb1547d230db51!2sEl%20Obeid%2C%20Sudan!5e0!3m2!1sen!2s!4v1721982617936!5m2!1sen!2s',
  },
  {
    name: 'al-Geneina Office (Sudan)',
    links: [
      {
        name: 'Sudan, WD, al-Geneina',
        icon: 'mdi-map-marker-outline',
        link: ''
      },
      {
        name: '+249 911415666',
        icon: 'mdi-whatsapp',
        link: ''
      },
      {
        name: '+249 911415666',
        icon: 'mdi-phone-outline',
        link: ''
      },
      {
        name: 'algeneina@wa3y.org',
        icon: 'mdi-email-outline',
        link: ''
      },
      {
        name: '/wa3y-alGeneina',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@wa3y-alGeneina',
        icon: 'mdi-twitter',
        link: ''
      },

    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845265.3711036466!2d29.502569253039393!3d13.131092164669875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16ec0658763a2d79%3A0xabfb1547d230db51!2sEl%20Obeid%2C%20Sudan!5e0!3m2!1sen!2s!4v1721982617936!5m2!1sen!2s',
  },
  {
    name: 'Khartoum Bahri Office (Sudan)',
    links: [
      {
        name: 'Sudan, KH, Khartoum Bahri',
        icon: 'mdi-map-marker-outline',
        link: ''
      },
      {
        name: '+249 911415666',
        icon: 'mdi-whatsapp',
        link: ''
      },
      {
        name: '+249 911415666',
        icon: 'mdi-phone-outline',
        link: ''
      },
      {
        name: 'bahri@wa3y.org',
        icon: 'mdi-email-outline',
        link: ''
      },
      {
        name: '/wa3y-bahri',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@wa3y-bahri',
        icon: 'mdi-twitter',
        link: ''
      },

    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845265.3711036466!2d29.502569253039393!3d13.131092164669875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16ec0658763a2d79%3A0xabfb1547d230db51!2sEl%20Obeid%2C%20Sudan!5e0!3m2!1sen!2s!4v1721982617936!5m2!1sen!2s',
  }
];
</script>

<style scoped lang="scss">
.office-name {
  position: relative;
  background: #250e62;
  height: 12rem;
  color: white;
  text-align: center;
  overflow: hidden;
}

.office-name::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('@/assets/images/image.png');
}
</style>