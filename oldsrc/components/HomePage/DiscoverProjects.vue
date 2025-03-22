<template>
  <div class="discover-projects-container d-flex justify-center align-center py-12">
    <v-container class="content">
      <div class="">
        <div>
          <h3 class="text-h3 mb-16">
            Our projects around the world
          </h3>
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn style="transition: 0.5s;" v-bind="props" color="white" :variant="isHovering ? 'flat' : 'outlined'"
                size="x-large">Discover Our Projects</v-btn>
            </template>
          </v-hover>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.discover-projects-container {
  position: relative;
  background: #250e62;
  height: 30rem;
  color: white;
  text-align: center;
  overflow: hidden;
}

.discover-projects-container::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: url('/public/images/carte-pathfinder.jpg');
}

.discover-projects-container .content {
  position: relative;
}
</style>