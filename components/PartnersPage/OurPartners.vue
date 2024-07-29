<template>
  <div class="mb-16 pb-16">
    <v-container>
      <v-row v-for="(partner, i) of partners" :key="partner.name + i">
        <v-col cols="12" v-if="i > 0">
          <p class="text-center py-16">
            <v-icon size="84">mdi-dots-horizontal</v-icon>
          </p>
        </v-col>
        <v-col cols="12" xxl="6" xl="6" lg="6" >
          <v-card class="fill-height" rounded="xl">
            <v-img height="100%" cover width="100%" :src="partner.image"></v-img>
          </v-card>
        </v-col>
        <v-col class="px-4 py-8" >
          <h2 class="text-h4 font-weight-bold my-6" style="color: #da291c;">
            {{ partner.name }}
          </h2>
          <p class="text-justify my-8">
            {{ partner.text }}
          </p>
          <a v-for="link of partner.links" :href="link.link" style="text-decoration: none;">
            <v-card flat class="mt-1">
              <v-card-text>
                <v-icon size="36">{{ link.icon }}</v-icon>
                <span class="mx-4 font-weight-bold text-title">{{ link.name }}</span>
              </v-card-text>
            </v-card>
          </a>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const partners = [
  {
    name: 'Europe',
    image: '/images/partner_1.jpg',
    text: `
      The European Commission and its 27 Member States provide about 46% of the world's 
      official development assistance, which makes them the world's largest donor with 
      a total of €66.8 billion allocated in 2020. The EU is therefore a key player 
      in the attainment of the UN Sustainable Development Goals (SDGs). 
      To achieve its objectives, the European Commission is mobilizing its European partners. 
      For more than 12 years, AFD Group has been working extensively with the EU.
    `,
    links: [
      {
        name: 'europe.org',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '/europe',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@europe',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'The United Nations',
    image: '/images/partner_2.jpg',
    text: `
      The United Nations is a key forum in terms of the international discussions 
      on development aid, and AFD participates in these actively. 
      We maintain institutional relations with the UN actors and 
      operational relations with certain UN organizations.
    `,
    links: [
      {
        name: 'un.org',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '/un-org',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@un-org',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Development banks and agencies',
    image: '/images/partner_4.jpg',
    text: `
      Regardless of whether they are bilateral, multilateral or national, 
      development banks and agencies are natural partners for AFD. 
      Many of our projects are cofinanced by one or more of them. Indeed, 
      synergies among donors are essential for making their actions effective.
    `,
    links: [
      {
        name: 'DBA.org',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '/dba-bank',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@dba-bank',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Local and regional authorities',
    image: '/images/partner_3.jpg',
    text: `
      AFD is devoting an increasing share of its activity to direct financing of 
      local authorities in the countries where it works. To do so, 
      it relies on the expertise of French local and regional authorities 
      in particular, many of which are significant actors in development aid.
    `,
    links: [
      {
        name: 'local.gov',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '/local-gov',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '@local-gov',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
]
</script>

<style></style>