<template>
  <header>
    <nav class="nav-container ">
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="Precious Plastic Darwin Logo">
        Precious Plastic Darwin
      </router-link>
      <ul class="nav-links" :style="{ display: showMobileMenu ? 'flex' : '' }">
        <li><router-link to="/drop-off">Drop-off</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/workshops">Workshops & Events</router-link></li>
        <li><router-link to="/learn">Learn</router-link></li>
        <li><router-link to="/community">Community</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div class="mobile-menu" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
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
    }
  }
}
</script>

<style scoped>
header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #E2E8F0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}


.nav-container {
  margin: 0 1em;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 900;
  color: #2D3748;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  text-decoration: none;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4A5568;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #f4c20d;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #f4c20d;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-menu span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 1024px) {
  .nav-links {
    gap: 1.5rem;
  }
  
  .nav-links a {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }
  
  .mobile-menu {
    display: flex;
  }
  
  .logo {
    font-size: 1.4rem;
  }
  
  .logo img {
    width: 40px;
    height: 40px;
  }
}
</style>