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
  padding: 6rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.feature-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #E2E8F0;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #fee77b 0%, #f4c20d 100%);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #fee77b;
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  color: #2D3748;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #4A5568;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>