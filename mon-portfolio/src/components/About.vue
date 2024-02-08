<template>
    <div class="about-container" ref="tiltElement">
        <h2>HELLO !</h2>
        <p>I am Rajae, a web developer and web designer, passionate about new technologies and digital. Outside the digital world, I am an endurance athlete, particularly in Ultra long-distance running. I love combining my two passions and finding synergies between sports and technology.</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
  VanillaTilt.init(document.querySelector('.about-container'), {
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
.about-container {
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
}

.about-container p{
  margin: 10px;
  line-height: 1.5;
}
</style>