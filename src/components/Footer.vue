<template>
  <div class="footer">
    <div class="social-links">
      <a
        href="https://www.linkedin.com/in/raja-casado-souini-56a5ab225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/rajaesouini"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://x.com/rajaesouini0?s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/rajaewebdesigne?igsh=MXA2NnZ4cGJjYjdtNw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 2px;
  position: absolute;
  bottom: 500px;
  left: 0;
  z-index: 1;
}

.social-links a {
  display: flex;
  color: rgb(255, 255, 255);
  font-size: 20px;
  padding: 20px;
  text-decoration: none;
}

.fab {
  font-family: "Font Awesome 5 Brands";
}

@media screen and (max-width: 600px) {
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
  }
  .social-links a {
  display: inline-block;
  
}
}
@media screen and (max-width: 280px) and (max-height: 653px) {
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;  
  }
  }
</style>
