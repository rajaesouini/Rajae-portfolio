<template>
    <div class="welcome">
      <h1>
        <span v-for="(letter, index) in welcomeText" :key="index" :class="{ 'animate': index <= currentIndex }">
          {{ letter }}
        </span>
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        welcomeText: "WELCOME",
        currentIndex: -1,
      };
    },
    mounted() {
      this.animateText();
    },
    methods: {
      animateText() {
        const interval = setInterval(() => {
          this.currentIndex++;
          if (this.currentIndex === this.welcomeText.length) {
            clearInterval(interval);
          }
        }, 200);
      },
    },
  };
  </script>
  
  <style scoped>
  .animate {
    opacity: 1;
    transform: translateY(0);
  }
  .welcome{
    padding: 20px;
  }

 h1 span {
    color: white;
    opacity: 0;
    display: inline-block;
    padding: 10px;
    transform: translateY(1em);
    transition: opacity 0.3s, transform 0.3s;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }
  </style>
  