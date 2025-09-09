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
  background: linear-gradient(135deg, #fee77b 0%, #f4c20d 100%);
  color: white;
  padding: 4rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.about-image {
  text-align: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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