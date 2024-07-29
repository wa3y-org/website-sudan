<template>
  <div class="resources-header my-0 py-16 text-center font-weight-black text-h3">
    <p class="my-16">
      Resources Library
    </p>

  </div>
  
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.resources-header {
  position: relative;
  background: #250e62;

  color: white;
  text-align: center;
  overflow: hidden;
}

.resources-header::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.28;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/images/resources_bg.jpg');
}
</style>