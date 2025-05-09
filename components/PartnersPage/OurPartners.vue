<template>
  <div class="mb-16 pb-16">
    <v-container>
      <v-row class="mb-4">
        <v-col>
          <h2 class="text-h4">International Partners</h2>
          <ol class="ms-6  mt-2">
            <li>
              <h3 class="font-wight-bold"> National Endowment for Democracy (NED): </h3>
              The National Endowment for Democracy (NED) is a quasi-autonomous non-governmental organization in the
              United States founded in 1983 with the stated aim of advancing democracy worldwide by promoting political
              and economic institutions, such as political groups, business groups, trade unions, and free markets.
            </li>
            <li>
              <h3 class="font-wight-bold"> Norwegian People Aid “NPA”: </h3>
              Norwegian People’s Aid is a politically independent membership-based organization working in Norway and in
              more than 30 countries around the world. Founded in 1939 as the labor movement's humanitarian solidarity
              organization, NPA aims to improve people's living conditions and to create a democratic, just and safe
              society. NPA's international work covers three core areas: Mine Action and disarmament, Development and
              Humanitarian relief aid.
            </li>
            <li>
              <h3 class="font-wight-bold"> Life and Peace Institute “LPI”: </h3>
              Life and Peace Institute is a Sweden organization work in achieve the inclusive engagement for peace,
              enhance policy engagement and awareness raising, and open the door for a collaborative learning to enhance
              practice and policy
            </li>
            <li>
              <h3 class="font-wight-bold"> Africans Rising: </h3>
              Africans Rising is a Pan-African movement of people and organizations, working for justice, peace and
              dignity for all Africans wherever they live. The organization provides a space for progressive African
              civil society leaders and groups engaged in various civic struggles to convene, connect, collaborate,
              share knowledge and build solidarity among people and across issues. Africans Rising promotes citizens’
              organising and enables civic movements in their struggles for social justice.
            </li>
            <li>
              <h3 class="font-wight-bold"> African Coaching Network “ACN” </h3>
              The African Coaching Network was established in May 2017 and presently comprises social movement coaches
              from Twelve different African countries who provide embedded training and coaching to social movements &
              activists across our continent and African diaspora.</li>
            <li>
              <h3 class="font-wight-bold"> HAG Office for Legal Aid for Refugees (Egypt): </h3>
              It is an Egyptian legal aid office that provides legal services to refugees in Egypt.</li>
          </ol>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" lg="3" xl="2" md="3" xs="12" v-for="(partner, i) of internationalPartners">
          <v-card rounded="xl" class="fill-height text-center px-auto" flat>
            <div class="mx-auto d-inline-block">
              <v-img height="230" cover width="230" class="elevation-4 rounded-xl  mt-2 ms-2"
                :src="partner.image"></v-img>
            </div>
            <div class="pa-2">
              <h4 class="text-h9 font-weight-bold my-2" style="color: #da291c;">
                {{ partner.name }}
              </h4>
              <!-- <p class="text-justify my-0">
                {{ partner.text }}
              </p> -->
              <!-- <a v-for="link of partner.links" :href="link.link" style="text-decoration: none;">
                  <div style="color: #da291c; display: inline-block;">
                    <v-icon size="24">{{ link.icon }}</v-icon>
                    <span class="mx-4 font-weight-bold text-title">{{ link.name }}</span>
                  </div>
                </a> -->
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-4">
        <v-col>
          <h2 class="text-h4">National Partners</h2>
          <ol class="ms-6  mt-2">
            <li>
              <h3 class="text-weight-bold"> Sudan Bokra Channel: </h3>
              Sudan Bokra is an independent Sudanese media platform that expresses the diversity of Sudan, represents
              the
              sectors of the Sudanese people, and works to bring the country to a sustainable democratic civil rule.
            </li>

            <li>
              <h3 class="text-weight-bold"> Eigd Al-Jallad Foundation: </h3>
              Eigd Al-Jallad is a Sudanese artistic, cultural and social institution that has been able to leave its
              mark
              on Sudanese singing and music. It has also launched a number of social initiatives and was part of
              important
              initiatives and campaigns in Sudan.</li>

            <li>
              <h3 class="text-weight-bold">  Sudanese Teachers Committee: </h3>
              It is an independent professional body that includes a large number of Sudanese teachers who have clear
              positions against the educational policies of governments that have harmed education and weakened the role
              of the educational and teaching teacher. The committee had a strong and pivotal contribution to the
              Sudanese
              December Revolution.</li>

            <li>
              <h3 class="text-weight-bold"> Sustainable Dialogue Center: </h3>
              The Sustainable Dialogue Center is a center founded by young people from the city of Al-Geneina in West
              Darfur State to enhance and sustain dialogue between different youth and raise awareness of the importance
              of dialogue, peaceful coexistence and acceptance of others.</li>

            <li>
              <h3 class="text-weight-bold"> Medameek Electronic News Foundation </h3>
              Medameek is an independent, non-partisan and non-profit media institution that supports freedom Justice,
              peace, democracy, human rights and national construction through media products with professional
              commitment.</li>

            <li>
              <h3 class="text-weight-bold"> Nabd Al Balad Association </h3>
              It is a local association founded by youth in Al-Roseires locality in Blue Nile State and aims to enhance
              commitment to human rights, raise awareness and serve youth and the community of Al-Roseires city in
              general.</li>

            <li>
              <h3 class="text-weight-bold">  Al-Sharq Center: </h3>
              It is a Sudanese center that provides legal aid, advocates for human rights issues and supports refugees
              and
              displaced persons. Its headquarters is in Kassala city.</li>
            </ol>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" lg="3" xl="2" md="3" xs="12" v-for="(partner, i) of nationalPartners">
          <v-card rounded="xl" class="fill-height text-center px-auto" flat>
            <div class="mx-auto d-inline-block">
              <v-img height="230" cover width="230" class="elevation-4 rounded-xl  mt-2 ms-2"
                :src="partner.image"></v-img>
            </div>
            <div class="pa-2">
              <h4 class="text-h9 font-weight-bold my-2" style="color: #da291c;">
                {{ partner.name }}
              </h4>
              <!-- <p class="text-justify my-0">
                {{ partner.text }}
              </p> -->
              <!-- <a v-for="link of partner.links" :href="link.link" style="text-decoration: none;">
                  <div style="color: #da291c; display: inline-block;">
                    <v-icon size="24">{{ link.icon }}</v-icon>
                    <span class="mx-4 font-weight-bold text-title">{{ link.name }}</span>
                  </div>
                </a> -->
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row v-for="(partner, i) of partners" :key="partner.name + i">
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
            <v-card flat class="mt-1" variant="text" color="#da291c">
              <v-card-text>
                <v-icon size="36">{{ link.icon }}</v-icon>
                <span class="mx-4 font-weight-bold text-title">{{ link.name }}</span>
              </v-card-text>
            </v-card>
          </a>
        </v-col>

      </v-row> -->
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const internationalPartners = [
  {
    name: 'National Endowment for Democracy',
    image: '/images/ned.jpeg',
    text: `
      The National Endowment for Democracy (NED) is a private,
       nonprofit foundation dedicated to the growth and strengthening of democratic institutions 
       around the world.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Africans Rissing',
    image: '/images/pan.jpeg',
    text: `
      The Africans Rissing Movements,
       People and Organizations. #Unity, #Justice, #Peace & Dignity.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Ayin Network',
    image: '/images/ain.jpeg',
    text: `
      It is a Sudanese Channel
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Sudanese Teachers Committee',
    image: '/images/teacherscom.jpeg',
    text: `
      It is a Sudanese Channel
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Radio Dabanga',
    image: '/images/dabanga.jpeg',
    text: `
      It is a Sudanese Channel
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Sudan Bokra Channel',
    image: '/images/sudanbokra.jpeg',
    text: `
      The United Nations is a key forum in terms of the international discussions 
      on development aid, and AFD participates in these actively. 
      We maintain institutional relations with the UN actors and 
      operational relations with certain UN organizations.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'MEDAMEEK ',
    image: '/images/mdameek.jpeg',
    text: `
      Regardless of whether they are bilateral, multilateral or national, 
      development banks and agencies are natural partners for AFD. 
      Many of our projects are cofinanced by one or more of them. Indeed, 
      synergies among donors are essential for making their actions effective.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'ALRAKIZA DEMOCRAT FORUM',
    image: '/images/alrakiza.jpeg',
    text: `
      AFD is devoting an increasing share of its activity to direct financing of 
      local authorities in the countries where it works. To do so, 
      it relies on the expertise of French local and regional authorities 
      in particular, many of which are significant actors in development aid.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
]

const nationalPartners = [
  {
    name: 'National Endowment for Democracy',
    image: '/images/ned.jpeg',
    text: `
      The National Endowment for Democracy (NED) is a private,
       nonprofit foundation dedicated to the growth and strengthening of democratic institutions 
       around the world.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Africans Rissing',
    image: '/images/pan.jpeg',
    text: `
      The Africans Rissing Movements,
       People and Organizations. #Unity, #Justice, #Peace & Dignity.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Ayin Network',
    image: '/images/ain.jpeg',
    text: `
      It is a Sudanese Channel
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Sudanese Teachers Committee',
    image: '/images/teacherscom.jpeg',
    text: `
      It is a Sudanese Channel
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Radio Dabanga',
    image: '/images/dabanga.jpeg',
    text: `
      It is a Sudanese Channel
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'Sudan Bokra Channel',
    image: '/images/sudanbokra.jpeg',
    text: `
      The United Nations is a key forum in terms of the international discussions 
      on development aid, and AFD participates in these actively. 
      We maintain institutional relations with the UN actors and 
      operational relations with certain UN organizations.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'MEDAMEEK ',
    image: '/images/mdameek.jpeg',
    text: `
      Regardless of whether they are bilateral, multilateral or national, 
      development banks and agencies are natural partners for AFD. 
      Many of our projects are cofinanced by one or more of them. Indeed, 
      synergies among donors are essential for making their actions effective.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
  {
    name: 'ALRAKIZA DEMOCRAT FORUM',
    image: '/images/alrakiza.jpeg',
    text: `
      AFD is devoting an increasing share of its activity to direct financing of 
      local authorities in the countries where it works. To do so, 
      it relies on the expertise of French local and regional authorities 
      in particular, many of which are significant actors in development aid.
    `,
    links: [
      {
        name: '',
        icon: 'mdi-web',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-facebook',
        link: ''
      },
      {
        name: '',
        icon: 'mdi-twitter',
        link: ''
      },
    ]
  },
]
</script>

<style></style>