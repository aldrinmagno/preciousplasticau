<template>
  <div id="app">
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <AppHeader />
    <main id="main-content" role="main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header')
      if (window.scrollY > 100) {
        header.style.background = 'rgba(250, 250, 249, 0.98)'
      } else {
        header.style.background = 'rgba(250, 250, 249, 0.95)'
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1E1E1E;
  background: #FAFAF9;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1E1E1E;
  line-height: 1.2;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #1E1E1E;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 3rem;
  line-height: 1.5;
}

.btn-primary {
  display: inline-block;
  background: #F9C513;
  color: #1E1E1E;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(249, 197, 19, 0.3);
  border: none;
  cursor: pointer;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary:hover {
  background: #e6b012;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 197, 19, 0.4);
}

.btn-secondary {
  display: inline-block;
  background: #1B73E8;
  color: #FAFAF9;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-secondary:hover {
  background: #1557b0;
  transform: translateY(-2px);
}

.btn-tertiary {
  display: inline-block;
  background: transparent;
  color: #1E1E1E;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid #1E1E1E;
  cursor: pointer;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-tertiary:hover {
  background: #1E1E1E;
  color: #FAFAF9;
}

.card {
  background: #FAFAF9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(30, 30, 30, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(30, 30, 30, 0.12);
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #1E1E1E;
  color: #FAFAF9;
  padding: 8px;
  text-decoration: none;
  z-index: 10000;
  border-radius: 4px;
}

.skip-link:focus {
  top: 6px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .container {
    padding: 0 16px;
  }
}
</style>