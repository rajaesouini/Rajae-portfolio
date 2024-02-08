<template>
    <div class="project">
        <section class="project-container" >
            <a href="https://www.carrefour.fr/">Carrefour Design Systeme
                <i class="fas fa-arrow-circle-right"></i>
            </a>
            <p>From January 2023 to January 2024, I contributed to Carrefour's design system by creating components in Vue.js, Sass, JS,  and React.</p>
        </section>
        <section class="project-container">
            <a href="https://www.letrun.fr/">Let Run
                <i class="fas fa-arrow-circle-right"></i>
            </a>
            <p>I created a project using Vue.js, SQL, Node.js, JS and Sass for the resale of sports equipment among runners.</p>
        </section>
        <section class="project-container">
            <a href="https://studiomillefeuilles.fr/">Studio Millefeuilles
                <i class="fas fa-arrow-circle-right"></i>
            </a>
            <p>Collaboration with culinary designer Laura Albier for the creation of her web application.</p>
        </section>
    </div>
</template>

<script setup>
</script>

<style>
.project {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.project-container {
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

.project-container p{
  margin: 10px;
  line-height: 1.5;
}
.project-container a:hover{
  background-color: rgb(255, 255, 255);
  padding: 10px;
  color: black;
  border-radius: 20px;
}
</style>