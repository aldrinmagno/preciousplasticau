<template>
  <div id="app">
    <AppHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    FeaturesSection,
    AboutSection,
    ContactSection,
    AppFooter
  },
  mounted() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header')
      if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)'
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)'
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #F4C20D;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}
</style>