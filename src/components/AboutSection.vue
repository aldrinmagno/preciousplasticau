<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>About Precious Plastic Darwin</h2>
          <p>We're part of the global Precious Plastic movement, bringing innovative plastic recycling solutions to Darwin and the Northern Territory.</p>
          <p>Our mission is to empower communities to tackle plastic waste through education, hands-on workshops, and collaborative projects that turn trash into treasure.</p>
          <p>Join us in creating a more sustainable future, one plastic bottle at a time.</p>
        </div>
        <div class="about-image">
          <img src="/logo-1200x1200.png" alt="Precious Plastic Darwin Workshop">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about {
  background: #F7FAFC;
  color: #2D3748;
  padding: 6rem 0;
  position: relative;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #2D3748;
}

.about-text p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4A5568;
  font-weight: 500;
  line-height: 1.7;
}

.about-image {
  text-align: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 3px solid #fee77b;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about-text h2 {
    font-size: 2rem;
  }
}
</style>