<template>
  <section id="home" class="hero">
    <div class="container">
      <h1>Turn Plastic Waste Into Treasure</h1>
      <p>Join our community in Darwin to transform plastic waste into valuable products through innovative recycling workshops and education programs.</p>
      <a href="#contact" class="cta-button">Get Involved Today</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 6rem 0;
  color: white;
  background: #fee77b;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.hero h1 {
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.cta-button {
  display: inline-block;
  background: #fee77b;
  color: #2D3748;
  padding: 1.2rem 2.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 900;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(254, 231, 123, 0.4);
  position: relative;
  z-index: 1;
}

.cta-button:hover {
  background: #f4c20d;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 231, 123, 0.6);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .hero {
    padding: 4rem 0;
  }
}
</style>