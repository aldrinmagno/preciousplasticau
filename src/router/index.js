import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlasticDropOff from '../views/PlasticDropOff.vue'
import EventsWorkshops from '../views/EventsWorkshops.vue'
import AZPlasticRecycling from '../views/AZPlasticRecycling.vue'
import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Plastic recycling in Darwin | PreciousPlastic.com.au',
      description: 'Turn Darwin\'s plastic into new products. Find a plastic drop-off near you, learn how to recycle plastic correctly, book workshops, and support local circular design.',
      keywords: 'plastic recycling, plastic drop-off near me, recycle plastic near me, Darwin NT'
    }
  },
  {
    path: '/plastic-drop-off',
    name: 'PlasticDropOff',
    component: PlasticDropOff,
    meta: {
      title: 'Plastic drop-off in Darwin | Locations & accepted plastics',
      description: 'Find plastic drop-off points in Darwin. We accept clean HDPE (#2) and PP (#5) like bottles, containers, and small plastic lids. See locations, hours, and prep steps.',
      keywords: 'plastic drop-off, plastic recycling Darwin, recycle plastics Darwin, bottle recycling Darwin, bottle caps recycling Darwin, bottle caps Darwin, small plastic lids Darwin'
    }
  },
  {
    path: '/events-workshops',
    name: 'EventsWorkshops',
    component: EventsWorkshops,
    meta: {
      title: 'Plastic recycling events & workshops in Darwin | Book now',
      description: 'Hands-on recycling events in Darwin—community plastic collection days, shredder demos, school workshops, and maker classes. Learn sorting, avoid common mistakes, and build a local hub.',
      keywords: 'plastic recycling events Darwin, community plastic recycling event Darwin, plastic collection day Darwin, bottle drive Darwin, start a community plastic hub, plastic shredder workshop, plastic shredder demo Darwin, recycling education Darwin, how to sort plastics, plastic recycling mistakes'
    }
  },
  {
    path: '/a-z-plastic-recycling',
    name: 'AZPlasticRecycling',
    component: AZPlasticRecycling,
    meta: {
      title: 'A–Z plastic recycling guide (Darwin) | What goes where',
      description: 'Look up any plastic item in Darwin: see if it\'s HDPE (#2) or PP (#5), whether it goes in the yellow bin, or bring it to a drop-off. Includes sorting tips and common mistakes.',
      keywords: 'A-Z plastic recycling Darwin, plastic recycling list Darwin, what goes in the yellow bin Darwin, Is it bin day'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: 'Recycled plastic products made in Darwin | Shop & waitlist',
      description: 'Locally made recycled plastic products from Darwin—sunglasses, homewares, gifts. Join the waitlist or preorder limited batches made from HDPE/PP.',
      keywords: 'recycled plastic products, recycled plastic sunglasses, recycled plastic homewares, recycled plastic gifts Darwin'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Precious Plastic Darwin | Mission & impact',
      description: 'Learn about our mission to turn Darwin\'s plastic waste into valuable products through community workshops and education.',
      keywords: 'about precious plastic darwin, plastic recycling mission, community recycling darwin'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Precious Plastic Darwin | Get in touch',
      description: 'Contact us for plastic drop-off questions, workshop bookings, partnerships, or general inquiries about recycling in Darwin.',
      keywords: 'contact precious plastic darwin, plastic recycling contact, workshop bookings darwin'
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