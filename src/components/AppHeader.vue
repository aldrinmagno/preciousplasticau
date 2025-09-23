<template>
  <header>
    <nav class="nav-container">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="Precious Plastic Darwin Logo">
        <span>Precious Plastic Darwin</span>
      </router-link>
      <ul class="nav-links" :class="{ 'mobile-open': showMobileMenu }">
        <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link to="/plastic-drop-off" @click="closeMobileMenu">Plastic drop-off</router-link></li>
        <li><router-link to="/events-workshops" @click="closeMobileMenu">Events & Workshops</router-link></li>
        <li><router-link to="/a-z-plastic-recycling" @click="closeMobileMenu">A–Z Plastic Recycling</router-link></li>
        <li><router-link to="/shop" @click="closeMobileMenu">Shop</router-link></li>
      </ul>
      <button class="mobile-menu" @click="toggleMobileMenu" :aria-expanded="showMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    closeMobileMenu() {
      this.showMobileMenu = false
    }
  }
}
</script>

<style scoped>
header {
  background: rgba(250, 250, 249, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(30, 30, 30, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(30, 30, 30, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E1E1E;
  text-decoration: none;
  gap: 12px;
}

.logo img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #1E1E1E;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #1B73E8;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1B73E8;
  border-radius: 1px;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 4px;
}

.mobile-menu span {
  width: 24px;
  height: 3px;
  background: #1E1E1E;
  border-radius: 2px;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 16px;
  }
  
  .logo span {
    display: none;
  }
  
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(250, 250, 249, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(30, 30, 30, 0.1);
    gap: 0;
  }
  
  .nav-links.mobile-open {
    display: flex;
  }
  
  .nav-links li {
    width: 100%;
  }
  
  .nav-links a {
    display: block;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(30, 30, 30, 0.1);
  }
  
  .nav-links a:last-child {
    border-bottom: none;
  }
  
  .mobile-menu {
    display: flex;
  }
}
</style>