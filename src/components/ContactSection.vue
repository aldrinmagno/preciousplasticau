<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <h2>Get In Touch</h2>
        <p>Ready to join our plastic recycling revolution? We'd love to hear from you!</p>
        
        <div class="contact-info">
          <div 
            v-for="contact in contactInfo" 
            :key="contact.id"
            class="contact-item"
          >
            <span>{{ contact.icon }}</span>
            <a 
              v-if="contact.link" 
              :href="contact.link"
              :target="contact.target || '_self'"
            >
              {{ contact.text }}
            </a>
            <span v-else>{{ contact.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      contactInfo: [
        {
          id: 1,
          icon: '📧',
          text: 'hello@preciousplastic.com.au',
          link: 'mailto:hello@preciousplastic.com.au'
        },
        {
          id: 2,
          icon: '📍',
          text: 'Darwin, Northern Territory'
        },
        {
          id: 3,
          icon: '🌐',
          text: 'preciousplastic.com.au',
          link: 'https://preciousplastic.com.au',
          target: '_blank'
        },
        {
          id: 4,
          icon: '📘',
          text: 'Facebook Page',
          link: 'https://www.facebook.com/profile.php?id=61580648091526',
          target: '_blank'
        },
        {
          id: 5,
          icon: '👥',
          text: 'Facebook Group',
          link: 'https://www.facebook.com/groups/1801827844055214',
          target: '_blank'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contact {
  background: white;
  padding: 6rem 0;
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact h2 {
  color: #2D3748;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.contact p {
  font-size: 1.2rem;
  color: #4A5568;
  font-weight: 500;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #F7FAFC;
  padding: 1.2rem 1.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid #E2E8F0;
  font-weight: 600;
}

.contact-item:hover {
  background: #fee77b;
  border-color: #f4c20d;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.contact-item a {
  color: #2D3748;
  text-decoration: none;
  font-weight: 600;
}

.contact-item span:first-child {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
  
  .contact h2 {
    font-size: 2rem;
  }
}
</style>