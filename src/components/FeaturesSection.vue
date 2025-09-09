<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">What We Do</h2>
      <p class="section-subtitle">We're building a sustainable future through community-driven plastic recycling initiatives</p>
      
      <div class="features-grid">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="feature-card"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          id: 1,
          icon: '♻️',
          title: 'Plastic Recycling Workshops',
          description: 'Learn hands-on techniques to transform plastic waste into useful products using our community machines and tools.'
        },
        {
          id: 2,
          icon: '🎓',
          title: 'Education Programs',
          description: 'Discover the impact of plastic waste and learn sustainable practices through our comprehensive educational initiatives.'
        },
        {
          id: 3,
          icon: '🤝',
          title: 'Community Building',
          description: 'Connect with like-minded individuals passionate about environmental sustainability and making a positive impact.'
        },
        {
          id: 4,
          icon: '🔧',
          title: 'Machine Building',
          description: 'Help us build and maintain the recycling machines that power our plastic transformation processes.'
        },
        {
          id: 5,
          icon: '🌱',
          title: 'Environmental Impact',
          description: 'Make a real difference by diverting plastic waste from landfills and oceans while creating valuable products.'
        },
        {
          id: 6,
          icon: '💡',
          title: 'Innovation Hub',
          description: 'Experiment with new recycling techniques and product designs in our collaborative innovation space.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.features {
  background: white;
  padding: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: #fee77b;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f4c20d;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #F4C20D;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>