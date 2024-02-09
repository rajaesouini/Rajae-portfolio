<template>
    <div>
        <section class="contact-container" ref="tiltElement">
            <h2>To contact me!</h2>
            <p><i class="fas fa-envelope"></i> rajaesouini0@gmail.com <br/> Where you can also find me on social media.</p>
        </section>
        <section class="typewriter">
      <h1 class="typewriter-text"></h1>
    </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
  VanillaTilt.init(document.querySelector('.contact-container'), {
    max: 25, 
    speed: 300, 
    glare: true, 
    'max-glare': 0.5, 
  });

  startAnimation(); // Déclencher l'animation du texte lorsque le composant est monté
});

// Animation du texte
function startAnimation() {
  const text = document.querySelector('.typewriter-text');
  const typewriterText = "Thank you !";
  let i = 0;
  
  function type() {
    if (i < typewriterText.length) {
      text.textContent += typewriterText.charAt(i);
      i++;
      setTimeout(type, 200);
    }
  }

  type();
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.contact-container {
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

.contact-container:hover {
    font-size: 14px;
}
.contact-container p{
  margin: 10px;
  line-height: 1.5;
}

.typewriter {
  overflow: hidden; 
  color: white;
  border-right: .15em solid rgb(0, 0, 0); 
  white-space: nowrap;
  margin: 0 auto;
  padding: 30px;
  letter-spacing: .15em; 
  animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(0, 0, 0); }
}

.typewriter-text {
  display: inline-block; 
  overflow: hidden; 
}
@media screen and (max-width: 280px) and (max-height: 653px) {
  .contact-container {
    width: 80%;
    margin-left: 12px;
    margin-top: 100px;
    font-size: 13px;
    line-height: 2.5;
  }
  }
</style>