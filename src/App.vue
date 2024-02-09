<template>
  <div class="container">
    <div class="line-wrapper">
      <div class="line"></div>
    </div>
    <div v-if="!isMenuOpen">
      <section class="bubble home" ref="homeBubble">
        <router-link to="/">Home</router-link>
      </section>
      <section class="bubble about" ref="aboutBubble">
        <router-link to="/About">About</router-link>
      </section>
      <section class="bubble project" ref="projectBubble">
        <router-link to="/Project">Project</router-link>
      </section>
      <section class="bubble contact" ref="contactBubble">
        <router-link to="/Contact">Contact</router-link>
      </section>
    </div>
  </div>
  <div class="menu">
    <section class="menu-content" v-if="isMenuOpen">
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/Project">Project</router-link>
      <router-link to="/Contact">Contact</router-link>
  </section>
    <section class="burger-menu" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </section>
  </div>
  <Footer class="footer-bar"></Footer>
  <router-view />
</template>

<script>
import Footer from "./components/Footer.vue";
import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    Footer,
  },
  setup() {
    const homeBubble = ref(null);
    const aboutBubble = ref(null);
    const projectBubble = ref(null);
    const contactBubble = ref(null);
    const isMenuOpen = ref(false);

    // Logique de montage
    onMounted(() => {
      animateBubble(homeBubble, 1000);
      animateBubble(aboutBubble, 1500);
      animateBubble(projectBubble, 2000);
      animateBubble(contactBubble, 2500);
    });

    // Fonction d'animation de la bulle
    function animateBubble(bubbleRef, delay) {
      setTimeout(() => {
        if (bubbleRef.value) {
          bubbleRef.value.classList.add("show");
        }
      }, delay);
    }

    // Méthode pour basculer l'état du menu
    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
      const burgerMenu = document.querySelector(".burger-menu");
      if (isMenuOpen.value) {
        burgerMenu.classList.add("active");
      } else {
        burgerMenu.classList.remove("active");
      }
    }

    return {
      aboutBubble,
      contactBubble,
      projectBubble,
      homeBubble,
      toggleMenu,
      isMenuOpen,
    };
  },
};
</script>

<style scoped>
/* Styles pour les bulles */
.line-wrapper {
  position: absolute;
  top: 35%;
  right: 12%;
  transform: translateX(-20%);
  width: 2px;
  height: 35%;
  overflow: hidden;
}

.line {
  width: 2px;
  height: 0;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  right: 5%;
  animation: drawLine 2s forwards;
}

@keyframes drawLine {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 100px;
    height: 100%;
  }
}

.bubble {
  position: absolute;
  width: 80px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0;
}

.bubble.show {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Position des bulles */
.about {
  top: 45%;
  right: 5%;
}

.home {
  top: 35%;
  right: 5%;
}

.project {
  top: 55%;
  right: 5%;
}

.contact {
  top: 65%;
  right: 5%;
}

/* Styles pour le menu burger */
.burger-menu {
  display: none;
}

.menu-content {
  display: none;
  gap: 20px;
  display: flex;
}

.burger-menu:active + .menu-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #ffffff;
  padding: 10px;
}

.burger-menu:active + .menu-content a {
  color: white;
  margin-bottom: 10px;
}
@media screen and (max-width: 600px) {
  .line-wrapper {
    display: none;
  }

  .bubble {
    display: none;
  }

  /* Styles pour le menu burger */

  .menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .burger-menu {
    display: flex;
    align-items: center;
    height: 40px;
    background: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: center;
  }

  .burger-menu span {
    display: block;
    width: 30px;
    height: 3px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 2px;
    margin: 3px;
  }
}
@media screen and (max-width: 280px) and (max-height: 653px) {
  .menu-content{
    padding-left: 0;
    padding-right: 25px;
  }
  .menu-content a {
  color: white;
  margin-top: 50px;
}
.menu-content a:hover{
  text-decoration: underline;

}
  }
</style>
