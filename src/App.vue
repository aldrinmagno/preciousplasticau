<template>
  <div id="app">
    <AppHeader />
    <main>
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
  background: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #2D3748;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.section-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #4A5568;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.btn-primary {
  display: inline-block;
  background: #fee77b;
  color: #2D3748;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(254, 231, 123, 0.4);
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: #f4c20d;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 231, 123, 0.6);
}

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: #2D3748;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  border: 2px solid #2D3748;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #2D3748;
  color: white;
}

.sticky-cta {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: #fee77b;
  color: #2D3748;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.sticky-cta:hover {
  background: #f4c20d;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .sticky-cta {
    bottom: 10px;
    right: 10px;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>