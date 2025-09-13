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
      description: 'Drop off HDPE/PP, join workshops, and shop recycled products made in Darwin, NT. Community-driven plastic recycling in the Northern Territory.',
      keywords: 'plastic recycling darwin, HDPE recycling NT, PP recycling northern territory, recycling workshops darwin, precious plastic darwin'
    }
  },
  {
    path: '/drop-off',
    name: 'DropOff',
    component: DropOff,
    meta: {
      title: 'Plastic drop-off Darwin (HDPE #2, PP #5) | Locations & hours',
      description: 'Find plastic drop-off locations in Darwin. We accept clean HDPE and PP plastics. Map, hours, and preparation guide for plastic donation in NT.',
      keywords: 'plastic drop off darwin, donate plastic darwin, HDPE recycling locations, PP recycling darwin, plastic donation NT'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: 'Recycled plastic sunglasses & homewares | Made in the NT',
      description: 'Shop recycled plastic products made in Darwin from local waste. Sunglasses, homewares, and gifts made from HDPE and PP plastic.',
      keywords: 'recycled plastic products darwin, recycled plastic sunglasses australia, recycled homewares NT, sustainable products darwin'
    }
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: Workshops,
    meta: {
      title: 'School & community recycling workshops | Book in Darwin NT',
      description: 'Hands-on recycling workshops for schools, communities, and teams in Darwin. Educational programs, corporate team building, and maker sessions.',
      keywords: 'recycling workshops darwin, school recycling workshops NT, sustainability education darwin, corporate team building recycling'
    }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
    meta: {
      title: 'Plastic ID guide, posters & teacher resources | Precious Plastic Darwin',
      description: 'Learn about plastic recycling with our guides, downloadable resources, and how-tos. Plastic identification, preparation guides, and educational materials.',
      keywords: 'plastic identification guide, HDPE vs PP, plastic recycling education, teacher resources recycling, plastic codes australia'
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      title: 'Volunteer, partnerships & local projects | Darwin NT',
      description: 'Join our community, volunteer, or partner with Precious Plastic Darwin. Volunteer opportunities, school partnerships, and community projects.',
      keywords: 'volunteer recycling darwin, school recycling program darwin, business recycling program NT, community recycling projects'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Precious Plastic Darwin | Impact & team',
      description: 'Our mission: creating a circular Darwin through community-driven plastic recycling. Meet our team, see our impact, and learn about our transparency.',
      keywords: 'precious plastic darwin team, circular economy darwin, plastic recycling impact NT, community recycling darwin'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact PreciousPlastic.com.au | Darwin NT',
      description: 'Get in touch with Precious Plastic Darwin. Location, hours, and contact information. Workshop bookings, partnerships, and general inquiries.',
      keywords: 'contact precious plastic darwin, recycling workshop bookings darwin, plastic recycling contact NT'
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
  
  // Update keywords meta tag
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.setAttribute('content', to.meta.keywords || '')
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://preciousplastic.com.au${to.path}`)
  
  next()
})

export default router