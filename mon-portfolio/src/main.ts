import { createApp } from 'vue'
import './style/style.css'
import App from './App.vue'
import router from "../src/router/router.js";


const app = createApp(App)
app.use(router)
app.mount('#app')

//backgound
document.addEventListener('DOMContentLoaded', function() {
    const particuleContainer = document.querySelector('.boxes')

    const createParticule = () => {
        const particule = document.createElement('div');
        particule.className = 'particule';
        particule.style.left = Math.random() * window.innerWidth + 'px';
        particule.style.top = Math.random() * window.innerHeight + 'px';
        particule.style.animationDuration = Math.random() * 2 + 1 + 's';
        particuleContainer?.appendChild(particule);
        particule.addEventListener('animationend', () => {
            particule.remove();
        });
    };
    const spawnParticules = () => {
       setInterval(createParticule, 500); 
    };
    spawnParticules();
})