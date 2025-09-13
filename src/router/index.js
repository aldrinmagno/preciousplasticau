import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DropOff from '../views/DropOff.vue'
import Shop from '../views/Shop.vue'
import Workshops from '../views/Workshops.vue'
import Learn from '../views/Learn.vue'
import Community from '../views/Community.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Plastic recycling & workshops in Darwin | PreciousPlastic.com.au',
      description: 'Drop off HDPE/PP, join workshops, and shop recycled products made in Darwin, NT.'
    }
  },
  {
    path: '/drop-off',
    name: 'DropOff',
    component: DropOff,
    meta: {
      title: 'Plastic drop-off Darwin (HDPE #2, PP #5) | Locations & hours',
      description: 'Find plastic drop-off locations in Darwin. We accept clean HDPE and PP plastics.'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: 'Recycled plastic sunglasses & homewares | Made in the NT',
      description: 'Shop recycled plastic products made in Darwin from local waste.'
    }
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: Workshops,
    meta: {
      title: 'School & community recycling workshops | Book in Darwin NT',
      description: 'Hands-on recycling workshops for schools, communities, and teams in Darwin.'
    }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
    meta: {
      title: 'Plastic ID guide, posters & teacher resources | Precious Plastic Darwin',
      description: 'Learn about plastic recycling with our guides, downloadable resources, and how-tos.'
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      title: 'Volunteer, partnerships & local projects | Darwin NT',
      description: 'Join our community, volunteer, or partner with Precious Plastic Darwin.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Precious Plastic Darwin | Impact & team',
      description: 'Our mission: creating a circular Darwin through community-driven plastic recycling.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact PreciousPlastic.com.au | Darwin NT',
      description: 'Get in touch with Precious Plastic Darwin. Location, hours, and contact information.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Precious Plastic Darwin'
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  
  next()
})

export default router