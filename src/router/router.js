import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Project from '../components/Project.vue'
import Footer from '../components/Footer.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.API_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/Project',
            name: 'Project',
            component: Project
        },
        {
            path: '/Footer',
            name: 'Footer',
            component: Footer
        },
    ]
  })
  
  export default router