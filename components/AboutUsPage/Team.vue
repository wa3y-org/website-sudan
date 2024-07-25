<template>
  <div class="team-section py-16">
    <h1 class="text-h3 text-center my-8">
      Meet Our Team
    </h1>
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" xxl="3" xl="3" lg="4" md="6" v-for="(member , i) of team" :key="member.position + i">
          <v-img cover :src="member.photo" height="200" style="border: 1px solid #CCC;"></v-img>
          <h1 class="text-h6 font-weight-black">{{ member.name }}</h1>
          <p class="text-blue font-weight-bold">{{ member.position }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const team = [
  { name: 'Filan Bin Illan', position: 'Founder & CEO', photo: '/images/face4.jpg' },
  { name: 'Alballolah', position: 'Manager', photo: '/images/face4.avif' },
  { name: 'António Guterres', position: 'CTO', photo: '/images/face5.webp' },
  { name: 'Fillanah', position: 'Feminist', photo: '/images/face6.webp' },
  { name: 'Illanah', position: 'Product', photo: '/images/face7.webp' },
  { name: 'Silik', position: 'Coordinator', photo: '/images/face2.webp' },
]
</script>

<style scoped>
.team-section {
  background-color: #EDE7F6;
}
</style>