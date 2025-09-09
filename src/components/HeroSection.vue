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
  padding: 4rem 0;
  color: white;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.cta-button {
  display: inline-block;
  background: #fee77b;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(254, 231, 123, 0.4);
}

.cta-button:hover {
  background: #f4c20d;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 231, 123, 0.6);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
}
</style>