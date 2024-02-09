<template>
    <div class="about-container" ref="tiltElement">
        <h2>HELLO !</h2>
        <p>I am Rajae, a web developer and web designer passionate about new technologies and digital. As a web developer, I master technologies such as HTML, CSS, Sass, SQL, Node.js, and TypeScript. Additionally, I am proficient in using creative software such as Adobe, Figma, and Canva, enabling me to bring my ideas to life with creativity and efficiency. Outside the digital realm, I am an endurance athlete, particularly in ultra long-distance running. I love combining my two passions and finding synergies between sports and technology.</p>
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
  transition: .5s ease-in-out;
}

.about-container:hover {
    font-size: 14px;
}

.about-container p{
  margin: 10px;
  line-height: 1.5;
}
@media screen and (max-width: 280px) and (max-height: 653px) {
  .about-container {
    width: 80%;
    margin: 13px;
    font-size: 13px;
    line-height: 2.5;
  }
  }
</style>