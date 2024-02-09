<template>
  <Welcome />
  <div class="home-container" ref="tiltElement">
    <img src="/autoportrait.png" />
    <h2>Rajae Casado Souini</h2>
    <p>Web developer Vuejs & React</p>
  </div>
</template>

<script setup>
import Welcome from './Welcome.vue';
import { onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
  VanillaTilt.init(document.querySelector('.home-container'), {
    max: 25, 
    speed: 300, 
    glare: true, 
    'max-glare': 0.5, 
  });
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.home-container {
  width: 100%;
  max-width: 440px;
  color: aliceblue;
  text-align: center;
  padding: 50px 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: .5s ease-in-out;
}

.home-container:hover {
    font-size: 14px;
}
.home-container p{
  margin: 10px;
}

.home-container img {
  width: 200px;
}
@media screen and (max-width: 280px) and (max-height: 653px) {
  .home-container {
    padding: 10px;
    margin: 5px;
    width: 85%;
  }
  }
</style>
