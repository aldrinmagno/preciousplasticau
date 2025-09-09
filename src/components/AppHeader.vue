<template>
  <header>
    <nav class="container">
      <div class="logo">
        <img src="/logo.png" alt="Precious Plastic Darwin Logo">
        Precious Plastic Darwin
      </div>
      <ul class="nav-links" :style="{ display: showMobileMenu ? 'flex' : '' }">
        <li><a href="#about">About</a></li>
        <li><a href="#features">What We Do</a></li>
        <li><a href="#newsletter">Newsletter</a></li>
        <li><a href="#contact">Contact</a></li>
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
  background: #ffffff;
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

.logo {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 900;
  color: #2D3748;
  text-transform: uppercase;
  letter-spacing: -0.02em;
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
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #fee77b;
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
  }
  
  .mobile-menu {
    display: flex;
  }
}
</style>