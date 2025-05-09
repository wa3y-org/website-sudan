<template>
  <div class="team-section py-16">
    <h1 class="text-h3 text-center my-8">
      Meet Our Team
    </h1>
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" xxl="3" xl="3" lg="4" md="6" v-for="(member, i) of team" :key="member.position + i">
          <div class="text-center">
            <v-img rounded="circle" class="mx-auto" cover :src="member.photo" height="200" width="200" style="border: 1px solid #CCC;"></v-img>
            <div class="py-2"></div>
            <h1 class="text-h6 font-weight-black">{{ member.name }}</h1>
            <p class="text-blue font-weight-bold">{{ member.position }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const team = [
  { name: 'Zahraa Haydar', position: 'Executive Director', photo: '/images/zahraa.jpeg' },
  { name: 'Merna Saeed', position: 'HR Manager', photo: '/images/merna.jpeg' },
  { name: 'Mohamed Khalil ', position: 'Finance manger', photo: '/images/mhmdkhalil.jpeg' },
  { name: 'Mohamed Alhadi', position: 'Logostic Manger', photo: '/images/mhmalhadi2.jpeg' },
  { name: 'Ziyad Fadlesaid', position: 'Media Manger', photo: '/images/ziyadprofile.jpeg' },
  { name: 'Neama Awad', position: 'Programm Manager', photo: '/images/neama.jpg' },
]
</script>

<style scoped>
.team-section {
  background-color: #EDE7F6;
}
</style>