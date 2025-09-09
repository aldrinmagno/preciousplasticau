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
  padding: 4rem 0;
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact h2 {
  color: #F4C20D;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fee77b;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  transition: background 0.3s ease;
}

.contact-item:hover {
  background: #f4c20d;
}

.contact-item a {
  color: #333;
  text-decoration: none;
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