<template>
  <div class="about-us-section py-12">
    <v-container>
      <h1 class="text-h3 text-center mb-8">About the Organization</h1>
      <p class="text-justify text-h6">
        {{ aboutOurOrg }}
      </p>
      <div class="text-center">
        <nuxt-link to="/about-us">
          <v-btn color="primary" append-icon="mdi-arrow-right" rounded="lg" size="x-large" variant="flat" class="mt-8">
            Read More
          </v-btn>
        </nuxt-link>
      </div>
    </v-container>

  </div>
</template>

<script lang="ts" setup>
const aboutOurOrg = `
  A Voluntary organization aimed at educating and raising awareness within
  our communities regarding rights, citizenship issues, and the active role citizens
  should undertake towards their society and nation, also fostering
  creative thinking, enhancing positive interaction with cultural and ethnic diversity,
  combating violence and negative customs, launching social campaigns, providing support,
  and enhancing the capacities of youth and women to undertake positive and effective roles
  in their communities, social organizations, professional sectors,
  and official state institutions.
`;


</script>

<style scoped>
.about-us-section {
  background-color: #cbcbcb;
}
</style>